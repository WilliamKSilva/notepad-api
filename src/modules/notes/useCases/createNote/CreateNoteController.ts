import { Request, Response } from "express";
import { CreateNoteUseCase } from "./CreateNoteUseCase";
import { container } from 'tsyringe';


class CreateNoteController {   

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, content } = request.body;
        
        const createNoteUseCase = container.resolve(CreateNoteUseCase)

        await createNoteUseCase.execute({name, content})

        return response.status(201).send();
    }
}

export { CreateNoteController }

