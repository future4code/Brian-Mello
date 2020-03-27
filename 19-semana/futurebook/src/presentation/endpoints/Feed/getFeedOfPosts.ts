import { Request, Response } from "express";
import { FeedOfPostsUC, FeedOrderType } from "../../../bussiness/usecase/Feed/getFeedOfPosts";
import { FeedDB } from "../../../data/feedDataBase";
import * as jwt from 'jsonwebtoken';

export const FeedOfPostsEnpoint = async(req: Request, res: Response) => {
    try{
        const feedOfPostsUC = new FeedOfPostsUC(new FeedDB);

        const JWT_SECRET: string = process.env.JWT_SECRET || "";

        const token_verify = jwt.verify(req.headers.auth as string, JWT_SECRET) as {id: string};

        let orderType = FeedOrderType.ASC;

        if(req.body.orderType === "DESC"){
            orderType = FeedOrderType.DESC
        }

        const result = await feedOfPostsUC.execute({
            id: token_verify.id,
            orderBy: req.body.orderBy,
            orderType,
            limit: req.body.limit
        })

        res.status(200).send({feed: result})
    } catch(err) {
        res.status(400).send({
            message: err.mesagge
        })
    }
}