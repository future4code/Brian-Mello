import { Request, Response } from "express";
import { UserRelationsDB } from "../../../data/relationDataBase";
import { AddUserUC } from "../../../bussiness/usecase/Relations/addUser";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";

export const AddUserEndpoit = async(req: Request, res: Response) => {
    try{
        const addUserUC = new AddUserUC(new UserRelationsDB(), new JwtAuthorizer());

        const result = await addUserUC.execute({
            token: req.headers.auth as string,
            friendAddedId: req.body.friendAddedId
        });

        res.status(200).send(result);
    } catch(err){
        res.status(400).send({
            message: err.message
        });
    };
    
}