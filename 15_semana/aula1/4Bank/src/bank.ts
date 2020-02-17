import { readFile, writeFile } from "fs"
import userAccount from './userAccount'

const accountsPath: string = "../usersAccounts.json"
const newUser: userAccount = new userAccount(process.argv[3], process.argv[4], Number(process.argv[5]))
const op: number = Number(process.argv[2])

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
        
            if ( newUser.getAge() < 18){
                console.log("não foi possível criar o cadastro por conta de sua idade")
            } else {
                creatingAccounts.usersAccountsList.push(
                    newUser
                );
        
                console.log('Conta criada com sucesso')
            }
        
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
        console.log('opção inválida')
}