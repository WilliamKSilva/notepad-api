import { NotesRepository } from "../../repositories/implementations/NotesRepository";
import { ListNoteController } from "./ListNoteController";
import { ListNoteUseCase } from "./ListNoteUseCase";


const notesRepoistory = NotesRepository.getInstance(); 

const listNoteUseCase = new ListNoteUseCase(notesRepoistory);

const listNoteController = new ListNoteController(listNoteUseCase);

export { listNoteController }