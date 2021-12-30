import { Router } from "express";
import { createNoteController } from "../modules/notes/useCases/createNote";
import { listNoteController } from "../modules/notes/useCases/listNote";

const notesRoutes = Router();

notesRoutes.post("/", (request, response) => {
    return createNoteController.handle(request, response);
})

notesRoutes.get("/", (request, response) => {
    return listNoteController.handle(request, response);
})

export { notesRoutes }
