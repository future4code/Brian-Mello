import { menu } from './dishes'
import { Cashier } from './cashier'
import { Manager } from './manager'
import { Chef } from './chef'

const funcionarioDoMes: Cashier = new Cashier("Joao", 4000)
const newManager: Manager = new Manager("Brian", 8000)
const newChef: Chef = new Chef("Jacquin", 5000)

console.log(`${funcionarioDoMes.getName()} diz: eu sou ${funcionarioDoMes.sayJob()}`)
console.log(`----------------------------------------------`)
console.log(`${newManager.getName()} diz: eu sou ${newManager.sayJob()}`)
console.log(`----------------------------------------------`)
console.log(`${newChef.getName()} diz: eu sou ${newChef.sayJob()}`)
console.log(`----------------------------------------------\n`)

console.log(`O ${funcionarioDoMes.sayJob()} ${funcionarioDoMes.getName()} disse que o valor da comanda foi de R$ ${funcionarioDoMes.calculateBill([
    menu[0],
    menu[2],
    menu[4]
])}`)

console.log(`---------------------------------------------------------------------`)

console.log(`O ${newManager.sayJob()} ${newManager.getName()} disse que o valor da comanda foi de R$ ${newManager.calculateBill([
    menu[1],
    menu[3],
    menu[5]
])}`)
