import { readFile, writeFile } from "fs"
import * as moment from 'moment'

moment.locale('pt-br')
const accountsPath: string = "../usersAccounts.json"
const hourFormat: string = "DD/MM/YYYY"

const today = moment( new Date, hourFormat)
let op: number = Number(process.argv[2])
const userName: string = process.argv[3]
const userbirth = moment(process.argv[4], hourFormat)
const userCPF: string = process.argv[5] 
const userBalance: number = 0

const diference: number = today.utcOffset("-0300").diff(userbirth.utcOffset("-0300"), 'years')

type userAccount = {
    name: string,
    birth: string,
    CPF: string,
    expenses: [],
    balance: number 
}

type transaction = {
    value: number,
    transactionDay: Date,
    description: string
}

type usersAccountsFileData = {
    usersAccountsList: userAccount[]
}

switch(op){
    case 1:
        const createAccount = async () => {
            const readingAccountsFile: Promise<string> = new Promise((resolve, reject) => {
                readFile(accountsPath, (err: Error, data: Buffer) => {
                    if(err){
                        reject(err);
                        return
                    }
        
                    resolve(data.toString())
                });
            });
        
            const usersAccountJson: string = await readingAccountsFile
        
            const creatingAccounts: usersAccountsFileData = JSON.parse(usersAccountJson)
        
            if (diference < 18){
                console.log("não foi possível criar o cadastro por conta de sua idade")
            } else (creatingAccounts.usersAccountsList.findIndex((data) => { 
                for(let i: number = 0; i < creatingAccounts.usersAccountsList.length; i++) {
                    const contador = creatingAccounts.usersAccountsList[i].CPF
                    if (contador === userCPF) {
                        console.log("Não foi possível se cadastrar, uma conta já tem esse mesmo CPF")
                        return contador
                    } else {
                        creatingAccounts.usersAccountsList.push({
                            name: userName,
                            birth: userbirth.utcOffset("-0300").format(hourFormat),
                            CPF: userCPF,
                            expenses: [],
                            balance: userBalance 
                        });
                        console.log('Conta criada com sucesso')
                    }
                    
                }
            }))
            
            const data: string = JSON.stringify(creatingAccounts, null, 2)
            const creatingAccount: Promise<string> = new Promise((resolve, reject) => {
                writeFile(accountsPath, data, (err) => {
                    if(err){
                        reject(err)
                        return
                    }
        
                    resolve(data.toString())
                    
                    return creatingAccount
                });
            });
        
            return readingAccountsFile
        };

        createAccount()

        break;
    
    case 2:
        const getAllAccounts = async () => {
            const readingAccountsFile: Promise<string> = new Promise((resolve, reject) => {
                readFile(accountsPath, (err: Error, data: Buffer) => {
                    if(err){
                        reject(err);
                        return
                    }
        
                    resolve(data.toString())
                });
            });
        
            const usersAccountJson: string = await readingAccountsFile
        
            const accounts: usersAccountsFileData = JSON.parse(usersAccountJson)
        
            return readingAccountsFile
        }

        getAllAccounts().then((accounts: any) => console.log(accounts))

        break;
    
    default:
        console.log("opção não encontrada")
}
