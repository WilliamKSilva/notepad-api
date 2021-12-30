import { NotesRepository } from "../../repositories/implementations/NotesRepository";
import { ListAllNotesController } from "./ListAllNotesController";
import { ListAllNotesUseCase } from "./ListAllNotesUseCase";


const notesRepoistory = NotesRepository.getInstance();

const listAllNotesUseCase = new ListAllNotesUseCase(notesRepoistory);

const listAllNotesController = new ListAllNotesController(listAllNotesUseCase);

export { listAllNotesController }