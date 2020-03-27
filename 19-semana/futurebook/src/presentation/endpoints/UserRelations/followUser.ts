import { Request, Response } from "express";
import { FollowUserUC } from "../../../bussiness/usecase/Relations/followUser";
import { UserRelationsDB } from "../../../data/relationDataBase";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";

export const FollowUserEndpoit = async(req: Request, res: Response) => {
    try{
        const followUserUC = new FollowUserUC(new UserRelationsDB, new JwtAuthorizer());

        const result = await followUserUC.execute({
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