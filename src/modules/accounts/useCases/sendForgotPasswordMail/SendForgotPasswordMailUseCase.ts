import { inject, injectable } from "tsyringe";
import { v4 as uuidv4 } from 'uuid';
import { resolve } from 'path';

import { AppError } from "../../../../errors/AppError";
import { IMailProvider } from "../../../../shared/container/providers/MailProvider/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../repositories/IUsersTokenRepository";

const date = new Date();
date.setHours(date.getHours() + 3);

@injectable()
class SendForgotPasswordMailUseCase {
    constructor( 
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("EtherealMailProvider")
        private mailProvider: IMailProvider
    ){}

    async execute(email: string): Promise<void> {
        const user = await this.usersRepository.findByEmail(email);
        
        const templatePath = resolve(__dirname, '..', '..', 'views', 'emails', 'forgotPasswordTemplate.hbs')

        if(!user) {
            throw new AppError("User does not exists!")
        }

        const token = uuidv4();

        await this.usersTokensRepository.create({
            refresh_token: token,
            user_id: user.id,
            expires_date: date
        })

        const variables = {
            name: user.name,
            link: `${process.env.FORGOT_PASSWORD_URL}${token}`,
        }

        await this.mailProvider.sendMail(
            email, 
            "Atualização de senha",
            variables,
            templatePath,
        )
        }
}

export { SendForgotPasswordMailUseCase }