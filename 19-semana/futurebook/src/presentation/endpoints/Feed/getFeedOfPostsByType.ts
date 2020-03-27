import { Request, Response } from "express";
import { FeedOfPostsByTypeUC, FeedOrderType } from "../../../bussiness/usecase/Feed/getFeedOfPostsByType";
import { FeedDB } from "../../../data/feedDataBase";
import * as jwt from 'jsonwebtoken';

export const FeedOfPostsByType = async (req: Request, res: Response) => {
    try{
        const feedOfPostsByType = new FeedOfPostsByTypeUC(new FeedDB);

        const JWT_SECRET: string = process.env.JWT_SECRET || "";

        const token_verify = await jwt.verify(req.headers.auth as string, JWT_SECRET) as {id: string};

        let orderType = FeedOrderType.ASC;

        if(req.body.orderType === "DESC"){
            orderType = FeedOrderType.DESC
        }
        
        const result = await feedOfPostsByType.execute({
            id: token_verify.id,
            type: req.query.type,
            orderBy: req.body.orderBy,
            orderType,
            limit: req.body.limit
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