import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppError } from "../../../../errors/AppError";
import { IUsersTokensRepository } from "../../repositories/IUsersTokenRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
    refresh_token: string;
}

const date = new Date();
date.setDate(date.getDate() + 30)

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository
        ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if(!user) {
            throw new AppError("Wrong Email or password!");
        }

        const passwordCompare = await compare(password, user.password);

        if(!passwordCompare) {
            throw new AppError("Wrong Email or password!");
        }

        const token = sign({}, "a8e756d3f1e42188f3cd96fdf0b9e893", {
            subject: user.id,
            expiresIn: "15m"
        }); 

        const refresh_token = sign({ email }, "16044b5fb538a02671f22e97df152c48", {
            subject: user.id,
            expiresIn: "30d"
        })

        await this.usersTokensRepository.create({
            expires_date: date,
            refresh_token: refresh_token,
            user_id: user.id
        })

        const tokenReturn: IResponse = {
            token,
            refresh_token,
            user: {
                name: user.name,
                email: user.email
            },
            
        }

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase }