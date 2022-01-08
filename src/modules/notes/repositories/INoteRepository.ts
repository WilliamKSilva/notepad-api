import { Note } from "../entities/Note";

export interface ICreateNoteDTO {
    name: string;
    content: string;
    user_id: string;
}

interface INoteRepository {
    create({name, content, user_id}: ICreateNoteDTO): Promise<void>;
    findNotesByUserId(user_id: string): Promise<Note[]>;
    listAll(): Promise<Note[]>;    
}


export { INoteRepository };