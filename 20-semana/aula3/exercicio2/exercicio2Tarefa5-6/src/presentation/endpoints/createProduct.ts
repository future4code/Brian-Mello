import { Request, Response } from "express";
import { CreateProductUC } from "../../business/usecase/createProduct";
import { ProductDB } from "../../data/productDatabase";

export const CreateProductEndpoint = async(req: Request, res: Response) => {
    try{
        const createProductUC = new CreateProductUC(new ProductDB());
        const result = await createProductUC.execute({
            name: req.body.name,
            photo: req.body.photo,
            price: req.body.price
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