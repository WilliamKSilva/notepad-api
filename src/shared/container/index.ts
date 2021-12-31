import { container } from 'tsyringe';
import { NotesRepository } from '../../modules/notes/repositories/implementations/NotesRepository';
import { INoteRepository } from '../../modules/notes/repositories/INoteRepository';

container.registerSingleton<INoteRepository>(
    "NotesRepository",
    NotesRepository
);