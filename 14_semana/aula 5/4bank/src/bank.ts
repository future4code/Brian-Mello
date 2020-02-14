import { readFile, writeFile } from "fs"
import * as moment from 'moment'

const accountsPath: string = "../usersAccounts.json"
const hourFormat: string = "DD/MM/YYYY"

const today: any = moment(hourFormat)
const userName: string = process.argv[2]
const userbirth: any = moment(process.argv[3], hourFormat)
const userCPF: string = process.argv[4] 
const userBalance: number = 0

type userAccount = {
    user: {
        name: string,
        birth: Date,
        CPF: string,
    },
    expenses: []
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

    accounts.usersAccountsList.push({
        user: {
            name: userName,
            birth: userbirth.format(hourFormat),
            CPF: userCPF,
        },
        expenses: [],
        balance: userBalance 
    });

    const data: string = JSON.stringify(accounts, null, 2)
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

// const createAccount = async () => {

//     accounts.usersAccountsList.push({
//         user: {
//             name: userName,
//             birth: userbirth.format("DD/MM/YYYY"),
//             CPF: userCPF,
//         },
//         expenses: [],
//         balance: userBalance 
//     });

//     const data: string = JSON.stringify(accounts, null, 2)
//     const creatingAccount: Promise<string> = new Promise((resolve, reject) => {
//         writeFile(accountsPath, data, (err) => {
//             if(err){
//                 reject(err)
//                 return
//             }

//             resolve(data.toString())
            
//             return creatingAccount
//         });
//     });
// }

// createAccount()

getAllAccounts().then((accounts: any) => console.log(accounts))