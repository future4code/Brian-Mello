import { Request, Response } from "express";
import { DeleteUserUC } from "../../../bussiness/usecase/Relations/deleteUser";
import { UserRelationsDB } from "../../../data/relationDataBase";
import * as jwt from "jsonwebtoken";

export const DeleteUserEndpoit = async(req: Request, res: Response) => {
    try{
        const deleteUserUC = new DeleteUserUC(new UserRelationsDB);

        const JWT_SECRET: string = process.env.JWT_SECRET || "";

        const token_verify = jwt.verify(req.headers.auth as string, JWT_SECRET) as { id: string};
        
        const result = await deleteUserUC.execute({
            adderFriendId: token_verify.id,
            friendAddedId: req.body.friendAddedId
        });

        res.status(200).send(result);
    } catch(err){
        res.status(400).send({
            message: err.message
        });
    };
    
}