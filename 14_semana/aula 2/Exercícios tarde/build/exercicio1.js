const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function gerenciadorDeDadosDoArray(numbersArray) {
    let sum = 0;
    let oddNumbers = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 !== 0) {
            oddNumbers++;
        }
        sum += numbersArray[i];
    }
    const response = {
        arrayLength: numbersArray.length,
        oddNumbers: oddNumbers,
        sum: sum
    };
    return response;
}
const dadosDoGerenciadorDeArray = gerenciadorDeDadosDoArray(numbersArray);
console.log(dadosDoGerenciadorDeArray);
//# sourceMappingURL=exercicio1.js.map