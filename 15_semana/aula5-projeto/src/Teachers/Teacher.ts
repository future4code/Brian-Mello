import { User } from "../Classes&Creators/user";
import { UserCreator } from "../Classes&Creators/userCreator";
import { Mission } from "../Classes&Creators/mission";
import { FileManager } from "../FileManager";

enum Specialty {
    HTML = "HTML",
    CSS = "CSS",
    JS = "Javascript",
    REACT = "React",
    REDUX = "Redux",
    BACK = "Back-end",
    POO = "Programação Orientação a objeto"
}

export class Teacher implements User, UserCreator{
    public name: string
    public email: string
    public birthDate: string
    protected specialty: Specialty

    constructor(name: string, email: string, birthDate: string){
        this.name = name
        this.email = email
        this.birthDate = birthDate
    }

    public createUser(name: string, email: string, birthDate: string){
        this.saveTeacher(new Teacher(name, email, birthDate))
        console.log("Professor Cadastrado Com Sucesso")
    }

    protected saveTeacher(teacher: Teacher): any{
        const jsonPath = "classList.json"
        const fileManager = new FileManager(jsonPath)
        const data = fileManager.readFile();
        data.classes.teachers.push(teacher);
        fileManager.writeFile(data)
    }
} 