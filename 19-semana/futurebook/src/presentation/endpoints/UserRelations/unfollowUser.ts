import { Request, Response } from "express";
import { UnfollowUserUC } from "../../../bussiness/usecase/Relations/unfollowUser";
import { UserRelationsDB } from "../../../data/relationDataBase";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";

export const UnfollowUserEndpoint = async (req: Request, res: Response) => {
    try{
        const unfollowUserUC = new UnfollowUserUC(new UserRelationsDB(), new JwtAuthorizer());

        const result = await unfollowUserUC.execute({
            token: req.headers.auth as string,
            friendAddedId: req.body.friendAddedId
        })
    
        res.status(200).send(result)
    }catch(err){
        res.status(400).send({
            message: err.message
        })
    }
}