import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError("Missing token!", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "a8e756d3f1e42188f3cd96fdf0b9e893") as IPayload;
        console.log(user_id);

        const usersRepository = new UsersRepository();        
        const user = await usersRepository.findById(user_id);

        if(!user) {
            throw new AppError("User does not exists!", 401);
        }
        
        next();
    } catch {
        throw new AppError("Invalid Token!", 401);
    }


}