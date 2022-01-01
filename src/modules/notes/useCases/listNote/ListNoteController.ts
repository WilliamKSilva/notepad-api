import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListNoteUseCase } from "./ListNoteUseCase";


class ListNoteController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const listNoteUseCase = container.resolve(ListNoteUseCase)
        
        const note = await listNoteUseCase.execute(id)

        return response.json(note);
    }
}

export { ListNoteController }