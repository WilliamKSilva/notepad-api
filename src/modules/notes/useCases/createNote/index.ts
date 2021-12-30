import { NotesRepository } from "../../repositories/implementations/NotesRepository";
import { CreateNoteController } from "./CreateNoteController";
import { CreateNoteUseCase } from "./CreateNoteUseCase";


const notesRepository = NotesRepository.getInstance();

const createNoteUseCase = new CreateNoteUseCase(notesRepository);

const createNoteController = new CreateNoteController(createNoteUseCase);

export { createNoteController }