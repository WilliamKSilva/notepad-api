import { INoteRepository } from "../../repositories/INoteRepository";

class ListNoteUseCase {
    constructor(private notesRepoistory: INoteRepository) {}
    
    execute(id: string): void {
        const note = this.notesRepoistory.findById(id)

        return note;
    }
}

export { ListNoteUseCase }