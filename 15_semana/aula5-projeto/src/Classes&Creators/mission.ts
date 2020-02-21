import { Student } from "../Students/student";
import { Teacher } from "../Teachers/Teacher";

export class Mission{
    protected startDate: string
    protected endDate: string
    protected teachers: Teacher[]
    protected students: Student[]
    constructor(startDate: string, endDate: string, teachers: Teacher[], students: Student[]){
        this.startDate = startDate
        this.endDate = endDate
        this.teachers = teachers
        this.students = students
    }  
}