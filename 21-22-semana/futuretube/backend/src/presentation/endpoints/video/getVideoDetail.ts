import { Request, Response } from "express";
import { GetVideoDetailUC } from "../../../business/usecase/video/getVideoDetail";
import { VideoDB } from "../../../data/videoDatabase";

export const GetVideoDetailEndpoint = async (req: Request, res: Response) => {
    try {
        const getVideoDetailuc = new GetVideoDetailUC(new VideoDB());
        const result = await getVideoDetailuc.execute({
            id: req.query.id
        })

        res.status(200).send(result)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}