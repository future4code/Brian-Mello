import { Request, Response } from "express";
import { DeleteUserUC } from "../../../bussiness/usecase/Relations/deleteUser";
import { UserRelationsDB } from "../../../data/relationDataBase";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";

export const DeleteUserEndpoit = async(req: Request, res: Response) => {
    try{
        const deleteUserUC = new DeleteUserUC(new UserRelationsDB(), new JwtAuthorizer());
        
        const result = await deleteUserUC.execute({
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