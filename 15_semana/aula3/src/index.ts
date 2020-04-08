import { ResidencialClient } from "./residencialClient";
import { CommercialClient } from "./commercialClient";
import { IndustrialClient } from "./industrialClient";
import { ClientManager } from "./clientManager";

// novas instâncias residênciais 
const cRBrian: ResidencialClient = new ResidencialClient("Brian", 123, 200, "Brian", "123.123.123-12", "22740-322") 
const cRDarvas: ResidencialClient = new ResidencialClient("Darvas", 99, 150, "Darvas", "122.122.122-11", "22743-213")

// novas instâncias Industriais 
const cIBrian: IndustrialClient = new IndustrialClient("Brian", 213, 1000000, "VoliGod coca-cola", "123-321-213", "24681-987" )
const cIJoao: IndustrialClient = new IndustrialClient("Joao", 533, 412423, "Tabacaria do Jão", "111-111-111", "53381-234" )

// novas instâncias comerciais 
const cCBrian: CommercialClient = new CommercialClient("Brian", 321, 20000, "Brian", "12.12-1-12", "12345-678")
const cCChiquinha: CommercialClient = new CommercialClient("Chiquinha", 300, 40000, "Chiquinha", "13.13-3-13", "54321-876")

// novo client Manager, lista de clients
const clientManager: ClientManager = new ClientManager()

// Adicionando os clientes na lista
clientManager.addClientToClientList(cRBrian)
clientManager.addClientToClientList(cRDarvas)
clientManager.addClientToClientList(cIBrian)
clientManager.addClientToClientList(cIJoao)
clientManager.addClientToClientList(cCBrian)
clientManager.addClientToClientList(cCChiquinha)

// Renderizando a lista de clientes
console.log(clientManager)

// Renderizando o Número de pessoas na lista de clientes
console.log(`\nNúmero de clientes na lista: ${clientManager.getClientsQuantity()}`)

clientManager.printClientBills()

clientManager.calculateBills()