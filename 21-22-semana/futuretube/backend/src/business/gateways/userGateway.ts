import { User } from "../entites/user";

export interface UserGateway {
    signUp(user: User): Promise<void>;
    login(email: string): Promise<User | undefined>;
    getAllUsers(): Promise<User[] | undefined>;
    getUserById(id: string, email: string): Promise<User | undefined>;
}