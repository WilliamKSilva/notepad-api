import { Note } from "../../entities/Note";
import { INoteRepository } from "../../repositories/INoteRepository";

class ListNoteUseCase {
    constructor(private notesRepoistory: INoteRepository) {}
    
    execute(id: string): Promise<Note> {
        const note = this.notesRepoistory.findById(id)

        return note;
    }
}

export { ListNoteUseCase }