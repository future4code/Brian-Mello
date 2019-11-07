// 1)
// No código mostrado ele pega a resposta do usuário e transforma em número com o "Number", podia ter agilizado isso por usar um "Number(prompt("blablablablabla"))", em seguida ele cria uma condicional que caso o número seja divisivel por "2" e o resto da divisão de "0" ele imprime "passou no teste", caso isso não aconteça ele imprime "não passou no teste". Para que apareça "passou no teste" o número tem que ser "Par", caso seja "impar" ele não passará porque restará sempre "1".

// 2)
// A. O código serve para que a pessoa escolha a fruta e nisso o comando switch vai retornar o nome da fruta e o preço dela.

// B. Quando escolherem no console a fruta "maçã" será impresso: "O preço da fruta maçã é R$ 2.25"

// C. O valor que eu pagaria seria de R$24,55.

// D. Aparecerá "O preço da fruta  Pêra  é  R$  5".( ele vai pegar o preço do próximo elemento, que no caso é o default)

// 3)
// 1.
// O terminal não vai exibir nenhuma mensagem porque o "if" da "false", e nesse caso não tem nenhum else pro "if pai", com isso ele não manda nada do "if filho" pois tudo está dentro do "if pai".

// EXERCICIOS DE ESCRITA:
// a. vai acontecer nada se os 2 números forem igual porque não tem condicional nenhuma falando pra eles fazer algo quando forem iguais.
// b. caso os 3 sejam iguais, não vai acontecer nada porque não tem condicional nenhuma falando pra eles fazer algo quando forem iguais.
const num1 = prompt ("digite o primeiro número: ")
const num2 = prompt ("digite o segundo número: ")
if (num1 > num2) {
  console.log("_____________________________________")
  console.log(num1, ", ", num2)
  console.log("_____________________________________")
}else if (num2 > num1){
  console.log("_____________________________________")
  console.log(num2, ", ", num1)
  console.log("_____________________________________")
}else {
  const num3 = prompt("digite um terceiro numero")
  if (num3 > num2 && num3 > num1) {
  console.log("_____________________________________")
  console.log(num3, ", ", num2, ", ", num1)
  console.log("_____________________________________")  
  }else if (num3 < num2 && num3 < num1) {
    console.log("_____________________________________")
    console.log(num1, ", ", num2, ", ", num3)
    console.log("_____________________________________")    
  }else if (num3 === num2 && num3 === num1) {
    console.log("Digite um número diferente por favor")
    console.log("_____________________________________")
  }
}


// 2)a.https://onedrive.live.com/?cid=95BA2756377E1959&id=95BA2756377E1959%213284&parId=root&o=OneUp
// b)
const ossos = prompt("possui ossos? [S/N]")

if (ossos === "S"){
    console.log("possui ossos")
    console.log("--------------------")
    const pelos = prompt ("ele possui pelos? [S/N]")
  if (pelos === "S"){
    console.log("possui pelos")
    console.log("--------------------")
    const mamifero = prompt ("é racional? [S/N]")
    if (mamifero === "S"){
      console.log("é um humano")
      console.log("_____________________________________")    
    }else {
      console.log("é um mamifero não humano")
      console.log("_____________________________________")    
    }
  }else{
    const penas = prompt("possui penas? [S/N]")
    if (penas === "S"){
      console.log("é um passáro")
      console.log("_____________________________________")    
    }else{
      const animalTerrestre = prompt ("é um animal terrestre?  [S/N]")
      if (animalTerrestre === "S"){
        console.log("é um animal terrestre")
        console.log("---------------------")
        const anfibio = prompt ("viveu na agua parte da vida?")
        if (anfibio === "S"){
          console.log("é um anfíbio")
          console.log("_____________________________________")    
        }else{
          console.log("é um réptil")
          console.log("_____________________________________")    
        } 
      }else{
        console.log("é um peixe")
        console.log("_____________________________________")    
      }
    }  
  }
}else{
  console.log("é um invertebrado") 
    console.log("_____________________________________")
}



// 3)
let nome = prompt ("Digite seu nome: ")
let tipoJogo = prompt ("Digite o tipo de jogo. [IN - DO]")
let etapaJogo = prompt ("Digite a etapa do jogo. [SF - DT - FI]")
let categoria = prompt ("Digite a categoria do jogo: [1, 2, 3, 4]")
let quantidadeIngresso = Number(prompt("Digite a quantidade de ingresso"))
let valor

if (tipoJogo === "IN"){
  if (etapaJogo === "SF") {
    if (categoria === "1") {
      valor = 1320 * 4.10
    }else if (categoria === "2"){
      valor = 880 * 4.10
    }else if (categoria === "3"){
      valor = 550 * 4.10
    }else if (categoria === "4"){  
      valor = 220 * 4.10
    }
  }else if (etapaJogo === "DT"){
    if (categoria === "1") {
      valor = 660 * 4.10
    }else if (categoria === "2"){
      valor = 440 * 4.10
    }else if (categoria === "3"){
      valor = 330 * 4.10
    }else if (categoria === "4"){  
      valor = 170  * 4.10
    }
  }else if (etapaJogo === "FI"){
    if (categoria === "1") {
      valor = 1980 * 4.10
    }else if (categoria === "2"){
      valor = 1320 * 4.10
    }else if (categoria === "3"){
      valor = 880 * 4.10
    }else if (categoria === "4"){  
      valor = 330 * 4.10
    }
  }
}else if (tipoJogo === "DO"){
  if (etapaJogo === "SF") {
    if (categoria === "1") {
      valor = 1320
    }else if (categoria === "2"){
      valor = 880
    }else if (categoria === "3"){
      valor = 550
    }else if (categoria === 4){  
      valor = 220
    }
  }else if (etapaJogo === "DT"){
    if (categoria === "1") {
      valor = 660
    }else if (categoria === "2"){
      valor = 440
    }else if (categoria === "3"){
      valor = 330
    }else if (categoria === "4"){  
      valor = 170
    }
  }else if (etapaJogo === "FI"){
    if (categoria === "1") {
      valor = 1980
    }else if (categoria === "2"){
      valor = 1320
    }else if (categoria === "3"){
      valor = 880
    }else if (categoria === "4"){  
      valor = 330
    }
  }
} 

if (tipoJogo === "IN"){
  tipoJogo = "Internacional"
}else if (tipoJogo === "DO"){
  tipoJogo = "Nacional"
}

if (etapaJogo === "SF") {
  etapaJogo = "Semi-Final"
}else if (etapaJogo === "DT") {
  etapaJogo = "Disputa de terceiro"
}else if(etapaJogo === "FI") {
  etapaJogo = "Final"
}

const valorFinal = valor * quantidadeIngresso

console.log("_____________________________________")
console.log("|----------Dados da compra----------|")
console.log("|Nome: ", nome, "                      |")
console.log("|Tipo de jogo: ", tipoJogo, "           |")
console.log("|Etapa do jogo: ", etapaJogo, "             |")
console.log("|Categoria: ", categoria, "                     |")
console.log("|Quantidade de ingressos: ", quantidadeIngresso, "      |")
console.log("|--------------Valores--------------|")
console.log("|Valor do ingresso: R$", valor.toFixed(2), "     |")
console.log("|Valor Total: R$", valorFinal.toFixed(2), "          |")
console.log("_____________________________________")