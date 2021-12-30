import { Request, Response } from "express";
import { CreateNoteUseCase } from "./CreateNoteUseCase";


class CreateNoteController {
    constructor(private createNoteUseCase: CreateNoteUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, content } = request.body;

        this.createNoteUseCase.execute({name, content})

        return response.status(201).send();
    }
}

export { CreateNoteController }

