import { Note } from "../model/Note";

interface ICreateNoteDTO {
    name: string;
    content: string;
}

interface INoteRepository {

}


export { ICreateNoteDTO, INoteRepository };