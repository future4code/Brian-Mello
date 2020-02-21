import { User } from "../Classes&Creators/user";
import { UserCreator } from "../Classes&Creators/userCreator";
import { FileManager } from "../FileManager";

export class Student implements User, UserCreator{
    public name: string
    public email: string
    public birthDate: string
    protected mission: string

    constructor(name: string, email: string, birthDate: string, mission: string){
        this.name = name
        this.email = email
        this.birthDate = birthDate
        this.mission = mission
    }

    public createUser(mission: string, name: string, email: string, birthDate: string){
        this.saveStudent(new Student(mission, name, email, birthDate))
        console.log("Novo aluno cadastrado com sucesso")
    }

    protected saveStudent(student: Student): any{
        const jsonPath = "MissionList.json"
        const fileManager = new FileManager(jsonPath)
        const data = fileManager.readFile();
        data.missions.forEach((mission: any) => {
            if(mission.patrono === student.mission || mission.number === student.mission){
                mission.students.push(student)
            } 
        })
        fileManager.writeFile(data)
    }
} 