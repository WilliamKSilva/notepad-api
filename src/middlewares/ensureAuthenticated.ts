import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { UsersTokensRepository } from "../modules/accounts/repositories/implementations/UsersTokensRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;
    const usersTokensRepository = new UsersTokensRepository(); 

    if(!authHeader) {
        throw new AppError("Missing token!", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "16044b5fb538a02671f22e97df152c48") as IPayload;
        console.log(user_id);

        const usersRepository = new UsersRepository();        
        const user = await usersTokensRepository.findByUserIdAndToken(
            user_id,
            token
            );

        if(!user) {
            throw new AppError("User does not exists!", 401);
        }
        
        next();
    } catch {
        throw new AppError("Invalid Token!", 401);
    }


}