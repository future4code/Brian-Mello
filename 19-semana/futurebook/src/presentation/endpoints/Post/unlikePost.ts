import { Request, Response } from "express";
import { PostDB } from "../../../data/postDataBase";
import { UnlikePostUC } from "../../../bussiness/usecase/Post/unlikePost";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";

export const UnlikePostEndPoint = async(req: Request, res: Response) => {

    try{
        const unlikePostUC = new UnlikePostUC(new PostDB(), new JwtAuthorizer());

        const result = await unlikePostUC.execute({
            token: req.headers.auth as string,
            postId: req.body.postId
        })

        res.status(200).send(result)
    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
}