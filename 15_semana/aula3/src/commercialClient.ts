import { Client } from "./client";
import { Commerce } from "./commerce";

export class CommercialClient extends Commerce implements Client {
    public clientName: string
    public clientNumber: number
    public consumedEnergy: number

    constructor(clientName: string, clientNumber: number, consumedEnergy: number, name: string, cnpj: string, cep: string){
        super(name, cnpj, cep)
        this.clientName = clientName
        this.clientNumber = clientNumber
        this.consumedEnergy = consumedEnergy
    }

    public calculateBill(): number{
        let kWh = 0.53  
        let sum = 0
        sum = this.consumedEnergy * kWh
        
        return sum
    }
}