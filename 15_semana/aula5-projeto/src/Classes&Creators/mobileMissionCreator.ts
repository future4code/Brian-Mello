import { Teacher } from "../Teachers/Teacher";
import { Student } from "../Students/student";

export interface MobileMissionCreator{
    createMission(ClassNumber: number, startDate: string, endDate: string, teachers: Teacher[], students: Student[]): void;
}