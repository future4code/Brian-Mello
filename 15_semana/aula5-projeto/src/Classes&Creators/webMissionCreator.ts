import { Teacher } from "../Teachers/Teacher";
import { Student } from "../Students/student";

export interface WebMissionCreator{
    createMission(Patrono: string, startDate: string, endDate: string, teachers: Teacher[], students: Student[]): void;
}