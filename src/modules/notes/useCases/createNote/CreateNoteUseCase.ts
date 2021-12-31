import { response } from 'express';
import { INoteRepository } from '../../repositories/INoteRepository'

interface IRequest {
    name: string;
    content: string;
}

class CreateNoteUseCase {
    constructor(private notesRepository: INoteRepository) {}

    async execute({name, content}: IRequest): Promise<void> {
        this.notesRepository.create({name, content})        
    }
}

export { CreateNoteUseCase };