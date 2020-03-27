import { Request, Response } from "express";
import { FeedOfPostsByTypeUC } from "../../../bussiness/usecase/Feed/getFeedOfPostsByType";
import { FeedDB } from "../../../data/feedDataBase";
import * as jwt from 'jsonwebtoken';

export const FeedOfPostsByType = async (req: Request, res: Response) => {
    try{
        const feedOfPostsByType = new FeedOfPostsByTypeUC(new FeedDB);

        const JWT_SECRET: string = process.env.JWT_SECRET || "";

        const token_verify = await jwt.verify(req.headers.auth as string, JWT_SECRET) as {id: string};

        const result = await feedOfPostsByType.execute({
            id: token_verify.id,
            type: req.query.type
        })

        res.status(200).send({
            feed: result
        })
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}