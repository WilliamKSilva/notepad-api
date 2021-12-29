import { request } from "express";
import { Note } from "../../model/Note";

import { ICreateNoteDTO, INoteRepository } from "../INoteRepository";

class NotesRepository implements INoteRepository {
    private notes: Note[];

    private static INSTANCE: NotesRepository;

    private constructor() {
        this.notes = [];
    }

    public static getInstance(): NotesRepository {
        if(!NotesRepository.INSTANCE) {
            NotesRepository.INSTANCE = new NotesRepository();
        }
        return NotesRepository.INSTANCE;
    }

    create({name, content}: ICreateNoteDTO): void {
        const note = new Note();

        Object.assign(note, {
            name,
            content,
            created_at: new Date()
        })

        this.notes.push(note)
    }

    findById(): Note {
        const note = this.notes.find(note => note.id === request.params.id)
        return note;
    }
}

export { NotesRepository }