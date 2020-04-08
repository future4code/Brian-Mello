import { Request, Response } from "express";
import { GetProductByIdUC } from "../../business/usecase/getProductById";
import { ProductDB } from "../../data/productDatabase";

export const GetProductByIdEndpoint = async (req: Request, res: Response) => {
    try{
        const getProductByIdUC = new GetProductByIdUC(new ProductDB());
        const result = await getProductByIdUC.execute({
            id: req.query.id
        })

        res.status(200).send({
            product: result
        })
    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
}