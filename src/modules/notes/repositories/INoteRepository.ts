import { Note } from "../entities/Note";

export interface ICreateNoteDTO {
    name: string;
    content: string;
}

interface INoteRepository {
    create({name, content}: ICreateNoteDTO): Promise<void>;
    findById(id: string): Promise<Note>;
    listAll(): Promise<Note[]>;    
}


export { INoteRepository };