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
    

    async create({name, content, user_id}: ICreateNoteDTO): Promise<void> {
        const note = this.repository.create({
            name,
            content,
            user_id,                        
        })

        await this.repository.save(note);        
    }

    async findNotesByUserId(user_id: string): Promise<Note[]> {
        const notes = await this.repository.find({user_id});
        
        if(notes === undefined) {
            throw new AppError("Invalid Id!")
        }

        return notes;
    }     
    
    async listAll(): Promise<Note[]> {
        const notes = await this.repository.find();
        return notes;
    }
}

export { NotesRepository }