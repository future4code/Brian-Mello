import { Residence } from "./residence";
import { Client } from "./client";

export class ResidencialClient extends Residence implements Client {
    public clientName: string
    public clientNumber: number
    public consumedEnergy: number

    constructor(clientName: string, clientNumber: number, consumedEnergy: number, name: string, cpf: string, cep: string){
        super(name, cpf, cep)
        this.clientName = clientName
        this.clientNumber = clientNumber
        this.consumedEnergy = consumedEnergy
    }

    public calculateBill(): number{
        let kWh = 0.75  
        let sum = 0
        sum = this.consumedEnergy * kWh
        
        return sum
    }
}