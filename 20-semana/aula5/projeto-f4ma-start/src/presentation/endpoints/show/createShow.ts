import { Request, Response } from "express";
import { CreateShowUC } from "../../../business/usecases/shows/createShow";
import { ShowDatabase } from "../../../data/showDatabase";

export const CreateShowEndpoint = async (req: Request, res: Response) => {
    try{
        const createShowUC = new CreateShowUC(new ShowDatabase());
        
        const result = await createShowUC.execute({
            week_day: req.body.week_day,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            band_id: req.body.band_id
        })

        res.status(200).send({
            show: result
        })
    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
}