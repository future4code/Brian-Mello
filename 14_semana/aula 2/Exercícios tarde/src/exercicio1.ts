const numbersArray: number[] = [1,2,3,4,5,6,7,8,9,10]

type infoArray = {
    arrayLength: number,
    oddNumbers: number,
    sum: number,
}

function gerenciadorDeDadosDoArray (numbersArray: number[]): infoArray {

    let sum: number = 0

    let oddNumbers: number = 0

    for (let i: number = 0; i < numbersArray.length; i++) {
        if(numbersArray[i] % 2 !== 0){
            oddNumbers ++ 
        }
    sum += numbersArray[i]
    }

    const response: infoArray = {
        arrayLength: numbersArray.length,
        oddNumbers: oddNumbers,
        sum: sum
    }

    return response
}

const dadosDoGerenciadorDeArray = gerenciadorDeDadosDoArray(numbersArray)

console.log(dadosDoGerenciadorDeArray)