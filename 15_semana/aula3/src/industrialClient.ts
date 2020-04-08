import { Client } from "./client";
import { Industry } from "./industry";

export class IndustrialClient extends Industry implements Client {
    public clientName: string
    public clientNumber: number
    public consumedEnergy: number

    constructor(clientName: string, clientNumber: number, consumedEnergy: number, industryName: string, industryNumber: string, cep: string){
        super(industryName, industryNumber, cep)
        this.clientName = clientName
        this.clientNumber = clientNumber
        this.consumedEnergy = consumedEnergy
    }

    public calculateBill(): number{
        let kWh = 0.45
        let fixValue = 10000  
        let sum = 0
        sum = (this.consumedEnergy * kWh) + fixValue
        
        return sum
    }
}