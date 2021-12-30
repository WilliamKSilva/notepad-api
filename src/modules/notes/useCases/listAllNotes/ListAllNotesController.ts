import { Request, Response } from "express";
import { ListAllNotesUseCase } from "./ListAllNotesUseCase";


class ListAllNotesController {
    constructor(private listAllNotesUseCase: ListAllNotesUseCase) {}

    handle(request: Request, response: Response) {
        const all = this.listAllNotesUseCase.execute();

        return response.json(all);
    }
}

export { ListAllNotesController }