import { Response, Request } from "express";
import { GetAllUsersUC } from "../../business/usecase/getAllUsers";
import { UserDB } from "../../data/userDataBase";

export const getAllUsers = async (req: Request, res: Response) => {
    try{
        const signupUC = new GetAllUsersUC(new UserDB);
        const result = await signupUC.execute();

        res.status(200).send(result)
    } catch(err) {
        console.log(err)
        res.status(400).send({
            message: err.message,
            ...err
        });
    }
};