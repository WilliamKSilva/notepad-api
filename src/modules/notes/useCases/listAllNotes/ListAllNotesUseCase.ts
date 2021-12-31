import { Note } from "../../entities/Note";
import { INoteRepository } from "../../repositories/INoteRepository";


class ListAllNotesUseCase {
    constructor(private notesRepository: INoteRepository) {}

    execute(): Note[] {
        const notes = this.notesRepository.listAll();

        return notes;
    }
}

export { ListAllNotesUseCase }