import { BandGateway } from "../../gateways/band";
import { Band } from "../../entities/band";

export class GetBandByNameOrIdUC{
    constructor(
        private bandGateway: BandGateway
    ){}

    public async execute(input: GetBandByNameOrIdUCInput): Promise<GetBandByNameOrIdUCOutPut>{
        let band: Band | undefined;
        
        if(input.id){
            band = await this.bandGateway.getBandById (input.id);

        } else if(input.name){
            band = await this.bandGateway.getBandByName(input.name);
        }

        if(!band){
            throw new Error("Band not found!")
        }

        return {
            id: band.getId(),
            name: band.getName(),
            music_genre: band.getMusicGenre(),
            responsible: band.getResponsible()
        }
    }
}

export interface GetBandByNameOrIdUCInput{
    id: string;
    name: string;
}

export interface GetBandByNameOrIdUCOutPut{
    id: string;
    name: string;
    music_genre: string;
    responsible: string;
}