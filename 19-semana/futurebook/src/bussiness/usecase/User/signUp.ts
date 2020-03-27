import { UserGateway } from "../../gateways/userGateway";
import { v4 } from "uuid";
import { UserType, User } from "../../entities/User";
import { InvalidParameterError } from "../../error/InvalidParams";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export class SignUpUC{
    constructor(
        private userGateway: UserGateway
    ){}

    public async execute(input: SignUpUCInput): Promise<SignUpUCOutput>{
        const id = v4();

        let type = UserType.user;

        if (input.type === "admin") {
            type = UserType.admin;
        } else if (input.type !== "user") {
            throw new InvalidParameterError("Invalid type");
        }

        if(input.password.length < 6){
            throw new Error("Minimun password length is 6");

        } else if (input.email.indexOf("@") === -1){
            throw new Error("Invalid email");

        } else {

            const hashPassword = await bcrypt.hash(input.password, 15);

            const user = new User(
                id,
                input.name,
                input.email,
                hashPassword,
                type
            )

            await this.userGateway.singUp(user)

            const JWT_SECRET: string = process.env.JWT_SECRET || "";

            const token = jwt.sign({
                id: user.getId()},
                JWT_SECRET,
                {
                    expiresIn: "10h"
                }
            )

            return {
                message: "User Created Successfully",
                token: token
            }
        }

    }
}

export interface SignUpUCInput{
    name: string;
    email: string;
    password: string;
    type: string;
}

export interface SignUpUCOutput{
    message: string;
    token: string;
}