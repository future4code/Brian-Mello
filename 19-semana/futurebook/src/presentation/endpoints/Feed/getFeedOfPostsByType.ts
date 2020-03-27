import { Request, Response } from "express";
import { FeedOfPostsByTypeUC, FeedOrderType } from "../../../bussiness/usecase/Feed/getFeedOfPostsByType";
import { FeedDB } from "../../../data/feedDataBase";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";

export const FeedOfPostsByType = async (req: Request, res: Response) => {
    try{
        const feedOfPostsByType = new FeedOfPostsByTypeUC(new FeedDB(), new JwtAuthorizer());

        let orderType = FeedOrderType.ASC;

        if(req.body.orderType === "DESC"){
            orderType = FeedOrderType.DESC
        }
        
        const result = await feedOfPostsByType.execute({
            token: req.headers.auth as string,
            type: req.query.type,
            orderBy: req.body.orderBy,
            orderType,
            page: req.body.page
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