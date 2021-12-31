import { NotesRepository } from "../../repositories/implementations/NotesRepository";
import { CreateNoteController } from "./CreateNoteController";
import { CreateNoteUseCase } from "./CreateNoteUseCase";


export default(): CreateNoteController => {

    const notesRepository = new NotesRepository();

    const createNoteUseCase = new CreateNoteUseCase(notesRepository);

    const createNoteController = new CreateNoteController(createNoteUseCase);

    return createNoteController;
};