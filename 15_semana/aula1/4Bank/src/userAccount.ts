import { transaction } from './transaction'
export default class userAccount {

    private name:  string
    private cpf: string
    private age: number
    private balance: number
    private transactions: transaction[]

    constructor(name: string, cpf: string, age: number) {
        this.name = name
        this.cpf = cpf
        this.age = age
        this.balance = 0
        this.transactions = []
    }

    getNome(){
        return this.name
    }

    setName(name: string){
        this.name = name
    }

    getAge(){
        return this.age
    }

    setAge(age: number){
        this.age = age
    }

    getCpf(){
        return this.cpf
    }

    setCpf(cpf: string){
        this.cpf = cpf
    }

    getBalance(){
        return this.balance
    }

    setBalance(balance: number){
        this.balance = balance
    }

    getTransactions(){
        return this.transactions
    }

    setTransactions(transactions: []){
        this.transactions = transactions
    }

}
