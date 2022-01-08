import { request } from 'express';
import { verify } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { IDateProvider } from '../../../../shared/container/providers/DateProvider/IDateProvider';
import { IUsersRepository } from '../../../accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '../../../accounts/repositories/IUsersTokenRepository';
import { Note } from '../../entities/Note';
import { INoteRepository } from '../../repositories/INoteRepository'

interface IRequest {
    name: string;
    content: string;
    token: string;
}

interface IPayload {
    sub: string;    
}

@injectable()
class CreateNoteUseCase {
    constructor(
        @inject("NotesRepository")
        private notesRepository: INoteRepository,
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("DayJsDateProvider")
        private dateProvider: IDateProvider         
    ) {}                    
    async execute({name, content, token }: IRequest): Promise<void> {                        
        const { sub: user_id } = verify(token, '16044b5fb538a02671f22e97df152c48') as IPayload                                          

        const notes = await this.notesRepository.create({name, content, user_id: user_id})    
             
    }
}

export { CreateNoteUseCase };