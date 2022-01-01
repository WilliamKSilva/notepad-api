import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { NotesRepository } from '../../modules/notes/repositories/implementations/NotesRepository';
import { INoteRepository } from '../../modules/notes/repositories/INoteRepository';

container.registerSingleton<INoteRepository>(
    "NotesRepository",
    NotesRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)