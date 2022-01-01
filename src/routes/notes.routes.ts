import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateNoteController } from "../modules/notes/useCases/createNote/CreateNoteController";
import { ListAllNotesController } from "../modules/notes/useCases/listAllNotes/ListAllNotesController";
import { ListNoteController } from "../modules/notes/useCases/listNote/ListNoteController";


const notesRoutes = Router();

const createNoteController = new CreateNoteController;
const listAllNotesController = new ListAllNotesController;
const listNoteController = new ListNoteController;

notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/", createNoteController.handle);

notesRoutes.get("/", listAllNotesController.handle)

notesRoutes.get("/:id", listNoteController.handle)

export { notesRoutes }
