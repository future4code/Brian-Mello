import { ShowGateway } from "../../gateways/show";
import { v4 } from 'uuid';
import { Show, ShowWeekDay } from "../../entities/show";

export class CreateShowUC{
    constructor(
        private showGateway: ShowGateway
    ){}

    public async execute(input: CreateShowUCInput): Promise<CreateShowUCOutput>{
        const id = v4()

        let weekDay = ShowWeekDay.FRIDAY;

        if(input.week_day === "SATURDAY"){
            weekDay = ShowWeekDay.SATURDAY;
        } else if (input.week_day === "SUNDAY"){
            weekDay = ShowWeekDay.SUNDAY
        } else if(input.week_day !== "FRIDAY"){
            throw new Error("Invalid week day!")
        }

        if(!input.week_day || input.week_day.length <1){
            throw new Error("Input Week Day are missing!")
        }

        if(!input.start_time){
            throw new Error("Input Start Time are missing!")
        }

        if(!input.end_time){
            throw new Error("Input End Time are missing!")
        }

        if(!input.band_id){
            throw new Error("Input band_id are missing")
        }
        
        if(input.start_time < 8 || input.start_time > 23){
            throw new Error("Start time must be between 8 and 23")
        }

        if(input.end_time < 8 || input.end_time > 23){
            throw new Error("End time must be between 8 and 23")
        }

        if(input.start_time % 1 !== 0) {
            throw new Error("Start time must be entire")
        }

        if(input.end_time % 1 !== 0) {
            throw new Error("End time must be entire")
        }

        const showTime = await this.showGateway.getShows(weekDay, input.start_time, input.end_time)

        if(showTime){
            throw new Error("there is a show at this time")
        }

        const show = new Show(
            id,
            weekDay,
            input.start_time,
            input.end_time,
            input.band_id
        )

        await this.showGateway.createShow(show)

        return{
            message: "Show Created Successfully!"
        }
    }
}

export interface CreateShowUCInput {
    week_day: string;
    start_time: number;
    end_time: number;
    band_id: string;
}

export interface CreateShowUCOutput{
    message: string;
}