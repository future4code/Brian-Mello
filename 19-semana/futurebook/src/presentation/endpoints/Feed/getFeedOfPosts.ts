import { Request, Response } from "express";
import { FeedOfPostsUC, FeedOrderType } from "../../../bussiness/usecase/Feed/getFeedOfPosts";
import { FeedDB } from "../../../data/feedDataBase";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";

export const FeedOfPostsEnpoint = async(req: Request, res: Response) => {
    try{
        const feedOfPostsUC = new FeedOfPostsUC(new FeedDB(), new JwtAuthorizer());

        let orderType = FeedOrderType.ASC;

        if(req.body.orderType === "DESC"){
            orderType = FeedOrderType.DESC
        }

        const result = await feedOfPostsUC.execute({
            token: req.headers.auth as string,
            orderBy: req.body.orderBy,
            orderType,
            page: req.body.page
        })

        res.status(200).send({feed: result})
    } catch(err) {
        console.log(err)
        res.status(400).send({
            message: err.mesagge
        })
    }
}