import { MobileMissionCreator } from "../Classes&Creators/mobileMissionCreator";
import { FileManager } from "../FileManager";
import { Mission } from "../Classes&Creators/mission";
import { ShowMissions } from "../showMissions";
import { Teacher } from "../Teachers/Teacher";
import { Student } from "../Students/student";

export class MobileMission extends Mission implements ShowMissions, MobileMissionCreator{

    protected classNumber: number

    constructor(classNumber: number, startDate: string, endDate: string, teachers: Teacher[], students: Student[]){
        super(startDate, endDate, teachers, students)
        this.classNumber = classNumber
    }

    public createMission(ClassNumber: number, startDate: string, endDate: string, teachers: Teacher[], students: Student[]): void{
        this.saveMission(new MobileMission(ClassNumber, startDate, endDate, teachers, students))
        console.log("A Turma Mobile foi criado com sucesso")
        
    }

    protected saveMission(turma: Mission): any{
        const jsonPath = "MissionList.json"
        const fileManager = new FileManager(jsonPath)
        const data = fileManager.readFile();
        data.missions.push(turma);
        fileManager.writeFile(data)
    } 

    public showMission(): void{
        const jsonPath = "classList.json"
        const fileManager = new FileManager(jsonPath)
        const data = fileManager.readFile()
        console.log(data)
    }
}