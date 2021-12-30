import { NotesRepository } from "../../repositories/implementations/NotesRepository";
import { ListNoteController } from "./ListNoteController";
import { ListNoteUseCase } from "./ListNoteUseCase";



const notesRepository = NotesRepository.getInstance();

const listNoteUseCase = new ListNoteUseCase(notesRepository);

const listNoteController = new ListNoteController(listNoteUseCase);

export { listNoteController }