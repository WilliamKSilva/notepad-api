import { getRepository, Repository } from "typeorm";
import { ICreateUserTokenDTO } from "../../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../../entities/UserTokens";
import { IUsersTokensRepository } from "../IUsersTokenRepository";


class UsersTokensRepository implements IUsersTokensRepository {
    private repository: Repository<UserTokens>;

    constructor() {
        this.repository = getRepository(UserTokens);
    }    
    
    async create({ expires_date, refresh_token, user_id }: ICreateUserTokenDTO): Promise<UserTokens> {        
        const user_token = this.repository.create({
            expires_date,
            user_id,
            refresh_token
        })

        await this.repository.save(user_token);

        return user_token;
    }

    async findByUserIdAndToken(user_id: string, refresh_token: string): Promise<UserTokens> {
        const users_tokens = await this.repository.findOne({
            user_id,
            refresh_token
        });
        return users_tokens!;
    }

    async deleteById(id: string): Promise<void> {
        const delete_token = await this.repository.delete(id);
    }

    async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
        const userToken = await this.repository.findOne({refresh_token});

        return userToken!;
    }
    
}

export { UsersTokensRepository }