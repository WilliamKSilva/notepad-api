import { Request, Response } from "express";
import { CreateNoteUseCase } from "./CreateNoteUseCase";


class CreateNoteController {
    constructor(private createNoteUseCase: CreateNoteUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, content } = request.body;

        await this.createNoteUseCase.execute({name, content})

        return response.status(201).send();
    }
}

export { CreateNoteController }

