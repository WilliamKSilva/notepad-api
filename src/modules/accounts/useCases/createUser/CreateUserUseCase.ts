import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { hash } from 'bcrypt';
import { response } from "express";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({name, email, password}: ICreateUserDTO): Promise<void> {

        const userRegistered = await this.usersRepository.findByEmail(email)

        const passwordHash = await hash(password, 8);

        if(userRegistered) {
            throw new Error("User already exists!")
        }

        await this.usersRepository.create({
            name, 
            email, 
            password: passwordHash
        })
    }
}

export { CreateUserUseCase }