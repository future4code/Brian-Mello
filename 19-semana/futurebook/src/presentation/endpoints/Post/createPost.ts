import { Request, Response } from "express";
import { CreatePostUC } from "../../../bussiness/usecase/Post/createPost";
import { PostDB } from "../../../data/postDataBase";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";

export const CreatePostEndPoint = async(req: Request, res: Response) => {

    try{
        const createPostUC = new CreatePostUC(new PostDB(), new JwtAuthorizer());

        const result = await createPostUC.execute({
            photo: req.body.photo,
            description: req.body.description,
            type: req.body.type,
            token: req.headers.auth as string
        })

        res.status(200).send(result)
    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
}