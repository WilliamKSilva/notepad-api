import { Request, Response } from "express";
import { ListNoteUseCase } from "./ListNoteUseCase";


class ListNoteController {
    constructor(private listNoteUseCase: ListNoteUseCase) {}

    handle(request: Request, response: Response) {
        const note = this.listNoteUseCase.execute(request.params.id)

        return response.json(note);
    }
}

export { ListNoteController }