import { Client } from "./client";

export class ClientManager{
    public clients: Client[]

    constructor(){
        this.clients = []
    }

    public addClientToClientList(client: Client): void{
        this.clients.push(client)
    }

    public getClientsQuantity(): number{
        return this.clients.length
    }

    public printClientBills(){
        console.log("\n|Número| Nome | valor|")
        console.log("|--------------------------|")
        this.clients.forEach((client) => {
            console.log(`|${client.clientNumber} - ${client.clientName} - ${client.calculateBill()}|`)
        })
        console.log("|---------------------------|\n")
    }

    public calculateBills(){
        let total = 0

        this.clients.forEach((client) => {
            total += client.calculateBill()
        })
        
        console.log(`O valor total de despesas de todos clientes é de R$ ${total}`)
    }
}