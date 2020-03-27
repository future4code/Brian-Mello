import { Request, Response } from "express";
import { UserRelationsDB } from "../../../data/relationDataBase";
import * as jwt from "jsonwebtoken";
import { AddUserUC } from "../../../bussiness/usecase/Relations/addUser";

export const AddUserEndpoit = async(req: Request, res: Response) => {
    try{
        const addUserUC = new AddUserUC(new UserRelationsDB);

        const JWT_SECRET: string = process.env.JWT_SECRET || "";

        const token_verify = jwt.verify(req.headers.auth as string, JWT_SECRET) as { id: string};
        
        const result = await addUserUC.execute({
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