import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, username, password } = request.body;

        const createUserUsecase = container.resolve(CreateUserUseCase)

        await createUserUsecase.execute({
            name,
            email,
            password,
        })

        return response.status(201).send();
    }
}

export { CreateUserController }