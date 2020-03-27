import { Request, Response } from "express";
import { CreatePostUC } from "../../../bussiness/usecase/Post/createPost";
import { PostDB } from "../../../data/postDataBase";
import * as jwt from 'jsonwebtoken';

export const CreatePostEndPoint = async(req: Request, res: Response) => {

    try{
        const createPostUC = new CreatePostUC(new PostDB);

        const JWT_SECRET: string = process.env.JWT_SECRET || "";

        const token_verify = jwt.verify(req.headers.auth as string, JWT_SECRET) as {id: string}

        const result = await createPostUC.execute({
            photo: req.body.photo,
            description: req.body.description,
            type: req.body.type,
            userId: token_verify.id
        })

        res.status(200).send(result)
    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
}