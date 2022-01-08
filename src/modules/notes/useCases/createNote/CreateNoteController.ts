import { Request, Response } from "express";
import { CreateNoteUseCase } from "./CreateNoteUseCase";
import { container } from 'tsyringe';


class CreateNoteController {   
    async handle(request: Request, response: Response): Promise<Response> {
        const token = request.headers.authorization;
        const [, user_token] = token!.split(" ");
        const { name, content } = request.body;

        console.log(token)
                
        const createNoteUseCase = container.resolve(CreateNoteUseCase)

        await createNoteUseCase.execute({token: user_token, name, content})

        return response.status(201).send();
    }
}

export { CreateNoteController }

