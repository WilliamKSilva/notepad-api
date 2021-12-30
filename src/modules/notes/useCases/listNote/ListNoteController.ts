import { Request, Response } from "express";
import { ListNoteUseCase } from "./ListNoteUseCase";


class ListNoteController {
    constructor(private listNoteUseCase: ListNoteUseCase) {}

    handle(request: Request, response: Response): Response {
        const note = this.listNoteUseCase.execute();

        return response.json(note);
    }
}

export { ListNoteController }