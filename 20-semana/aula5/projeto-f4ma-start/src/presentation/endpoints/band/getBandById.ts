import { Request, Response } from "express";
import { GetBandByNameOrIdUC } from "../../../business/usecases/bands/getBandById";
import { BandDatabase } from "../../../data/bandDatabase";

export const GetBandByIdEndpoint = async (req: Request, res: Response) => {
    try{
        const getBandByIdUC = new GetBandByNameOrIdUC(new BandDatabase())
        const result = await getBandByIdUC.execute({
            id: req.query.id,
            name: req.query.name
        })

        res.status(200).send({
            band: result
        })
    }catch(err){
        res.status(400).send({
            message: err.message
        })
    }
}