import { Request, Response } from "express";
import { GetShowsByDayUC } from "../../../business/usecases/shows/getShowsByDay";
import { ShowDatabase } from "../../../data/showDatabase";

export const GetShowsByDayEndpoint = async (req: Request, res: Response) => {
    try{
        const getShowsByDay = new GetShowsByDayUC(new ShowDatabase());
        const result = await getShowsByDay.execute({
            week_day: req.query.week_day
        })

        res.status(200).send(result)
    } catch(err){
        res.status(400).send({
            message: err.message
        })
    }
}