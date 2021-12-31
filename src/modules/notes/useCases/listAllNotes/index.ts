import { NotesRepository } from "../../repositories/implementations/NotesRepository";
import { ListAllNotesController } from "./ListAllNotesController";
import { ListAllNotesUseCase } from "./ListAllNotesUseCase";

export default(): ListAllNotesController => {
    const notesRepoistory = new NotesRepository();

    const listAllNotesUseCase = new ListAllNotesUseCase(notesRepoistory);

    const listAllNotesController = new ListAllNotesController(listAllNotesUseCase);

    return listAllNotesController;
}