import { UserGateway } from '../../gateways/userGateway';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export class LoginUC{
    constructor(
        private userGateway: UserGateway
    ){}

    public async execute(input: LoginUCInput): Promise<LoginUCOutput>{

        if(input.email.indexOf("@") === -1 || input.password.length < 6){
            throw new Error("Invalid password or email");
        };

        const user = await this.userGateway.login(input.email);

        if(!user){
            throw new Error("User not found!");
        };

        const passwordCompare = await bcrypt.compare(input.password, user.getPassword());

        if(!passwordCompare) {
            throw new Error("invalid password or email");
        };

        const JWT_SECRET: string = process.env.JWT_SECRET || "";

        const token = jwt.sign({id: user.getId()}, JWT_SECRET, {
                expiresIn: "10h"
            }
        );

        return {
            message: "User Logged Successfully",
            token: token
        }
    }
}

export interface LoginUCInput{
    email: string;
    password: string;
}

export interface LoginUCOutput{
    message: string;
    token: string;
}