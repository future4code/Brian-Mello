import { Request, Response } from "express";
import { CreateProductUC } from "../../business/usecase/createProduct";
import { ProductDB } from "../../data/productDatabase";

export const CreateProductEndpoint = async(req: Request, res: Response) => {
    try{
        const createProductUC = new CreateProductUC(new ProductDB());

        if(!req.body.name || req.body.name.length < 0){
            throw new Error("Input name doesn't exist")
        }

        if(!req.body.photo || req.body.photo.length < 0){
            throw new Error("Input photo doesn't exist")
        }

        if(!req.body.price || req.body.price.length < 0){
            throw new Error("Input price doesn't exist")
        }
        
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