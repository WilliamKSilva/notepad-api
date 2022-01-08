import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateNoteController } from "../modules/notes/useCases/createNote/CreateNoteController";
import { ListAllNotesController } from "../modules/notes/useCases/listAllNotes/ListAllNotesController";


const notesRoutes = Router();

const createNoteController = new CreateNoteController;
const listAllNotesController = new ListAllNotesController;

notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/create", createNoteController.handle);

notesRoutes.get("/", listAllNotesController.handle)


export { notesRoutes }
