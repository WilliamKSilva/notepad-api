import { inject, injectable } from 'tsyringe';
import { INoteRepository } from '../../repositories/INoteRepository'

interface IRequest {
    name: string;
    content: string;
}
@injectable()
class CreateNoteUseCase {
    constructor(
        @inject("NotesRepository")
        private notesRepository: INoteRepository) {}

    async execute({name, content}: IRequest): Promise<void> {
        await this.notesRepository.create({name, content})        
    }
}

export { CreateNoteUseCase };