import { NotesRepository } from "../../repositories/implementations/NotesRepository";
import { ListNoteController } from "./ListNoteController";
import { ListNoteUseCase } from "./ListNoteUseCase";

export default(): ListNoteController => {
    const notesRepoistory = new NotesRepository();

    const listNoteUseCase = new ListNoteUseCase(notesRepoistory);

    const listNoteController = new ListNoteController(listNoteUseCase);

return listNoteController
}