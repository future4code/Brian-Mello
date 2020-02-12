import { readFile, readdir } from "fs";


const pastaDeTextos = "../textos"

const promiseReddirAction = new Promise <string[]> ((resolve , reject) => {
    readdir( pastaDeTextos, ( err: Error, files: string[] ) => {
        if(err) {
            reject(err)
        } else {
            resolve(files)
        }
    });
});

const archivesReader = async() => {
    try{
        const listaArquivos: string[] = (await promiseReddirAction);
        for(let i: number = 0; i < listaArquivos.length; i++) {
            let file: string = ""
            readFile(`../textos/${listaArquivos[i]}`, (err: Error, files: Buffer ) => {
                if(err){
                    console.error(err)
                } else {
                    file = files.toString()
                    console.log(file)
                }
            })
        }
    } catch(error){
        console.error("Promise Falhou", error) 
    }
}

archivesReader();