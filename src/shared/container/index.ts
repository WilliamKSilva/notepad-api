import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { UsersTokensRepository } from '../../modules/accounts/repositories/implementations/UsersTokensRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '../../modules/accounts/repositories/IUsersTokenRepository';
import { NotesRepository } from '../../modules/notes/repositories/implementations/NotesRepository';
import { INoteRepository } from '../../modules/notes/repositories/INoteRepository';
import { IDateProvider } from './providers/DateProvider/IDateProvider';
import { DayJsDateProvider } from './providers/DateProvider/implementations/DayJsDateProvider';
import { IMailProvider } from './providers/MailProvider/IMailProvider';
import { EtherealMailProvider } from './providers/MailProvider/implementations/EtherealMailProvider';

container.registerSingleton<INoteRepository>(
    "NotesRepository",
    NotesRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",
    UsersTokensRepository
)

container.registerInstance<IMailProvider> (
    "EtherealMailProvider",
    new EtherealMailProvider()
)

container.registerSingleton<IDateProvider> (
    "DayJsDateProvider",
    DayJsDateProvider
)