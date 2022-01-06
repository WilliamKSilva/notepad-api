import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../repositories/IUsersTokenRepository";
import { hash } from 'bcrypt';

interface IRequest {
    token: string;
    password: string;
}

@injectable()
class ResetPasswordUserUseCase {
    constructor(
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("DayJsDateProvider")
        private dateProvider: IDateProvider,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({token, password}: IRequest): Promise<void> {
        const user_token = await this.usersTokensRepository.findByRefreshToken(token);
    
        if(!user_token) {
            throw new AppError("Invalid Token!")
        }
        if(this.dateProvider.compareIfBefore(user_token.expires_date, this.dateProvider.dateNow())) {
            throw new AppError("Expired token!")
        }
        const user = await this.usersRepository.findById(user_token.id);

        user.password = await hash(password, 8);

        await this.usersRepository.create(user);

        await this.usersTokensRepository.deleteById(user_token.id);
    }
}

export { ResetPasswordUserUseCase }