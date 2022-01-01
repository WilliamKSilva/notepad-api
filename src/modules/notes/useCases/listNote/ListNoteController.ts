import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListNoteUseCase } from "./ListNoteUseCase";


class ListNoteController {

    async handle(request: Request, response: Response) {
        const listNoteUseCase = container.resolve(ListNoteUseCase)
        
        const note = listNoteUseCase.execute(request.params.id)

        return response.json(note);
    }
}

export { ListNoteController }