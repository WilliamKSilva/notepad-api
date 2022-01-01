import { response } from "express";
import { getRepository, Repository } from "typeorm";
import { AppError } from "../../../../errors/AppError";
import { Note } from "../../entities/Note";

import { ICreateNoteDTO, INoteRepository } from "../INoteRepository";

class NotesRepository implements INoteRepository {
    private repository: Repository<Note>;

    constructor() {
        this.repository = getRepository(Note);
    }
    

    async create({name, content}: ICreateNoteDTO): Promise<void> {
        const note = this.repository.create({
            name,
            content,
        })

        await this.repository.save(note)     
    }

    async findById(id: string): Promise<Note> {
        const note = await this.repository.findOne({id});
        
        if(note === undefined) {
            throw new AppError("Invalid Id!")
        }

        return note!;
    }     
    
    async listAll(): Promise<Note[]> {
        const notes = await this.repository.find();
        return notes;
    }
}

export { NotesRepository }