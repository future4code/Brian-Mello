import { BandGateway } from "../../gateways/band";
import { v4 } from 'uuid'
import { Band } from "../../entities/band";

export class CreateBandUC {
    constructor(
        private bandGateway: BandGateway
    ){}

    public async execute(input: CreateBandUCInput): Promise<CreateBandUCOutput>{
        const id = v4()

        if(!input.name || input.name.length <1){
            throw new Error("Input name are missing!")
        }

        if(!input.music_genre || input.music_genre.length <1){
            throw new Error("Input music gender are missing!")
        }

        if(!input.responsible || input.responsible.length <1){
            throw new Error("Input responsible are missing!")
        }

        const band = new Band(
            id,
            input.name,
            input.music_genre,
            input.responsible
        )

        await this.bandGateway.createBand(band)

        return {
            message: "Band created successfully!"
        }
    }
}

export interface CreateBandUCInput{
    name: string;
    music_genre: string;
    responsible: string;
}

export interface CreateBandUCOutput{
    message: string;
}