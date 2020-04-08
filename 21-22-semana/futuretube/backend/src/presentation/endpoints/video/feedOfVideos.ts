import { Request, Response } from "express";
import { FeedOfVideosUC, FeedOrderType } from "../../../business/usecase/video/feedOfVideos";
import { VideoDB } from "../../../data/videoDatabase";

export const FeedOfVideosEndpoint = async (req: Request, res: Response) => {
    try{
        const feedOfVideosUC = new FeedOfVideosUC(new VideoDB())

        const result = await feedOfVideosUC.execute({
            orderBy: req.body.orderBy,
            orderType: req.body.orderType,
            page: req.body.page
        })

        res.status(200).send(result)
    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
}