import { Mission } from "../Classes&Creators/mission";
import { FileManager } from "../FileManager";
import { ShowMissions } from "../showMissions";
import { WebMissionCreator } from "../Classes&Creators/webMissionCreator";
import { Teacher } from "../Teachers/Teacher";
import { Student } from "../Students/student";

export class WebMission extends Mission implements ShowMissions, WebMissionCreator{

    protected patrono: string

    constructor(patrono: string, startDate: string, endDate: string, teachers: Teacher[], students: Student[]){
        super(startDate, endDate, teachers, students)

        this.patrono = patrono
    }
    
    public createMission(Patrono: string, startDate: string, endDate: string, teachers: Teacher[], students: Student[]): void{
        this.saveMission(new WebMission(Patrono, startDate, endDate, teachers, students))
        console.log("A Turma Web Full-Stack foi criado com sucesso")    
    }

    protected saveMission(turma: Mission): any{
        const jsonPath = "MissionList.json"
        const fileManager = new FileManager(jsonPath)
        const data = fileManager.readFile();
        data.missions.push(turma);
        fileManager.writeFile(data)
    }

    public showMission(): void{
        const jsonPath = "MissionList.json"
        const fileManager = new FileManager(jsonPath)
        const data = fileManager.readFile()
        console.log(data)
    }
}