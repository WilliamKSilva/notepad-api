import { verify, sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IUsersTokensRepository } from '../../repositories/IUsersTokenRepository';

interface IPayload {
    sub: string;
    email: string;
}

const date = new Date();
date.setDate(date.getDate() + 30)

@injectable()
class RefreshTokenUseCase {
    constructor(
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository
    ) {}
    
    async execute(token: string): Promise<string> {
        const { email, sub } = verify(token, '16044b5fb538a02671f22e97df152c48') as IPayload;
        
        const user_id = sub;

        const user_token = await this.usersTokensRepository.findByUserIdAndToken(user_id, token);

        if(!user_token) {
            throw new AppError("Error at the Refresh Token");
        } 
        
        await this.usersTokensRepository.deleteById(user_token.id);


        const refresh_token = sign({ email }, "16044b5fb538a02671f22e97df152c48", {
            subject: user_id,
            expiresIn: "30d"
        })
        
        await this.usersTokensRepository.create({
            expires_date: date,
            refresh_token,
            user_id
        })

        return refresh_token;
    }
}

export { RefreshTokenUseCase }