import { Router } from "express";

import { CreateNoteController } from "../modules/notes/useCases/createNote/CreateNoteController";
import listAllNotesController from "../modules/notes/useCases/listAllNotes";
import listNoteController from "../modules/notes/useCases/listNote";

const notesRoutes = Router();

const createNoteController = new CreateNoteController

notesRoutes.post("/", createNoteController.handle);

notesRoutes.get("/", (request, response) => {
    return listAllNotesController().handle(request, response)
})

notesRoutes.get("/:id", (request, response) => {
    return listNoteController().handle(request, response)
})

export { notesRoutes }
