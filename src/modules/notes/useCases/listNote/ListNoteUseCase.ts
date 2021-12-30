import { Note } from "../../model/Note";
import { INoteRepository } from "../../repositories/INoteRepository";

class ListNoteUseCase {
    constructor(private noteRepository: INoteRepository) {}

    execute(): Note {
        
    }
}

export { ListNoteUseCase }