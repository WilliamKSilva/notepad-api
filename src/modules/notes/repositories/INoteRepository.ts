import { Note } from "../model/Note";

export interface ICreateNoteDTO {
    name: string;
    content: string;
}

interface INoteRepository {
    create({name, content}: ICreateNoteDTO): void;
    findById(id: string): void;
    listAll(): Note[];    
}


export { INoteRepository };