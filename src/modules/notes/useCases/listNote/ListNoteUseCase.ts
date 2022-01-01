import { inject, injectable } from "tsyringe";
import { Note } from "../../entities/Note";
import { INoteRepository } from "../../repositories/INoteRepository";

@injectable()
class ListNoteUseCase {
    constructor(
        @inject("NotesRepository")
        private notesRepoistory: INoteRepository) {}
    
    async execute(id: string): Promise<Note> {
        const note = await this.notesRepoistory.findById(id)

        return note;
    }
}

export { ListNoteUseCase }