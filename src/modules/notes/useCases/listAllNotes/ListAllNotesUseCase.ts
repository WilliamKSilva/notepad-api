import { inject, injectable } from "tsyringe";
import { Note } from "../../entities/Note";
import { INoteRepository } from "../../repositories/INoteRepository";

@injectable()
class ListAllNotesUseCase {
    constructor(
        @inject("NotesRepository")
        private notesRepository: INoteRepository) {}

    async execute(): Promise<Note[]> {
        const notes = await this.notesRepository.listAll();

        return notes;
    }
}

export { ListAllNotesUseCase }