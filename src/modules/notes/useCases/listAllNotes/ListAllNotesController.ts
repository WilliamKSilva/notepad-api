import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllNotesUseCase } from "./ListAllNotesUseCase";


class ListAllNotesController {    

    async handle(request: Request, response: Response): Promise<Response> {
        const listAllNotesUseCase = container.resolve(ListAllNotesUseCase)
        
        const all = await listAllNotesUseCase.execute();        

        return response.json(all);
    }
}

export { ListAllNotesController }