import { BaseDB } from "./baseDatabase";
import { UserGateway } from "../business/gateways/userGateway";
import { User } from "../business/entites/user";

export class UserDB extends BaseDB implements UserGateway{
    private userTableName = "user"

    private mapUserToDbUser(input?: any): User | undefined{
        return(
            input &&
            new User(
                input.id,
                input.name,
                input.birthdate,
                input.email,
                input.password,
                input.type,
                input.photo
            )
        )
    }

    private mapDateToDbDate(input: Date): string {
        const year = input.getFullYear();
        const month = input.getMonth() + 1;
        const date = input.getDate();
        return `${year + "-" + month + "-" + date}`;
    }

    public async getUserById(id: string, email: string): Promise<User | undefined>{
        const result = await this.connection.raw(`
            SELECT *
            FROM ${this.userTableName}
            WHERE id = '${id}' AND email = '${email}'
        `)

        if(!result[0][0]){
            return undefined;
        }

        return await this.mapUserToDbUser(result[0][0])
    }

    public async signUp(user: User): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${this.userTableName}(id, name, birthdate, email, password, type, photo)
            VALUES(
                '${user.getId()}',
                '${user.getName()}',
                '${user.getBirthdate()}',
                '${user.getEmail()}',
                '${user.getPassword()}',
                '${user.getType()}',
                '${user.getPhoto()}'
            )
        `)
    }

    public async login(email: string): Promise<User | undefined>{
        const user = await this.connection.raw(`
            SELECT *
            FROM ${this.userTableName}
            WHERE email='${email}'
        `)

        if(!user[0][0]){
            return undefined;
        }

        return await this.mapUserToDbUser(user[0][0]);
    }

    public async getAllUsers(): Promise <User[] | undefined>{
        const users = await this.connection.raw(`
            SELECT * 
            FROM ${this.userTableName}
        `)

        if(!users[0][0]){
            return undefined;
        };

        return await users[0].map((user: any)=>{
            return new User(
                user.id,
                user.name,
                user.birthdate,
                user.email,
                user.password,
                user.type,
                user.photo
            )
        })
    }  
}