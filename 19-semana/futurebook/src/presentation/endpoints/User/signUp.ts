import { Request, Response } from "express";
import { SignUpUC } from "../../../bussiness/usecase/User/signUp";
import { UserDB } from "../../../data/userDataBase";

export const SignUpEndpoint = async (req: Request, res: Response) => {
    try{
        const signUpUC = new SignUpUC( new UserDB)

        const result = await signUpUC.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            type: req.body.type
        })

        res.status(200).send(result)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
    
}