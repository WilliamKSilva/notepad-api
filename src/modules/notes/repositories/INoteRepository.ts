import { Note } from "../model/Note";

interface ICreateNoteDTO {
    name: string;
    content: string;
}

interface INoteRepository {
    create({name, content}: ICreateNoteDTO): void;

}


export { ICreateNoteDTO, INoteRepository };