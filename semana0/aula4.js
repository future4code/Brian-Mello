// 1)
// Nesse código ele está fazendo um laço de repetição com o for que para ir do 0 ao 11 ele vai incrementar nele a soma que vai guardar o valor da soma + o valor do indice.
// Será impresso no console "55", porque com o código rodando geraria os valores: "0+0= 0, 0+1= 1, 1+2= 3, 3+3= 6, 6+4= 10, 10+5= 15, 15+6= 21, 21+7= 28, 28+8= 36, 36+9= 45, 45+10= 55"

// 2)
// A. O comando .push adiciona no array um novo valor no final dele.

// B. O valor impresso no console será: [ 10, 15, 20, 25, 30 ]

// C. Se o número fosse 3, seria impresso: [ 12, 15, 18, 27, 30 ]
// caso fosse o número 4, seria impresso: [ 12, 20 ]

// desafio.
// 3)
// De acordo com o que foi mostrado no código, seria impresso:
// 0
// 00
// 000
// 0000
// Isso será impresso porque ele esta adicionando um zero na linha 1, na linha 2 ele adiciona 1 zero + 1, na linha 3 ele adiciona 2 zeros + 1 e na linha 4 ele adiciona 3 zeros + 1.

// EXERCÍCIOS DE ESCRITA:
// 4)
const arrayOriginal = [207, 42, 70, 15, 110, 200, 121, 69, 90, 250, 37, 22, 11]
let maior = arrayOriginal[0]
let menor = arrayOriginal[0]
let impares = ""
let novoArray = ""
let stringArray = ""
// A.
for (let i = 0; i < arrayOriginal.length; i++){

  const elemento = arrayOriginal[i]
  if (elemento > maior) {
    maior = elemento
  } else if (elemento < menor){
    menor = elemento
  }
}
console.log("____________EXERCICIO 4______________")
console.log("                                     ")
console.log("------------------A------------------")
console.log("O maior número é o número: " + maior + " e o menor é: " + menor)
console.log("                                     ")
console.log("------------------B------------------")

// // B.
for (let i = 0; i < arrayOriginal.length; i++){
  novoArray += arrayOriginal[i] / 10 + ", "
}
console.log("[" + novoArray + "]")


// // C.
for (let i = 0; i < arrayOriginal.length; i++){
  const elemento = arrayOriginal[i]
  if (elemento % 2 === 1){
    impares += elemento + ","
  }
}
console.log("                                     ")
console.log("------------------C------------------")
console.log("[" + impares + "]")
console.log("------------------D------------------")

// // D.
for (let i = 0; i <= arrayOriginal.length - 1; i++){
  const elemento = arrayOriginal[i]
  stringArray += "'o elemento do index " + i + " é: " + arrayOriginal[i] + " ',\n" 
}
console.log("[" + stringArray + "]")
console.log("--------------Desafio_1--------------")

// Desafios.
// 5. 
const nome1 = prompt("Digite seu nome Jogador 1: ")
const jogador1 = Number(prompt("Escolha um número: " + nome1 ))
const nome2 = prompt("Digite seu nome Jogador 2: ")
let jogador2 
let jogadas = 0 
console.log("                                     ")
console.log("             vamos Jogar")
console.log("                                     ")
console.log("-------------------------------------")
alert ("Jogador 1: " + nome1 + "\n" + "jogador 2: " + nome2)
console.log("Jogador 1: " + nome1)
console.log("Jogador 2: " + nome2)
console.log("-------------------------------------")

while (jogador2 !== jogador1){
  jogador2 = Number(prompt("Escolha um número " + nome2))

  if (jogador2 < jogador1) {
    alert ("O número chutado foi: " + jogador2 + "\n" + "errrroooou. O número escolhido é maior.")     
    console.log("O número chutado foi:", jogador2)    
    console.log("errrroooou. O número escolhido é maior.") 
    console.log("-------------------------------------")
    jogadas += 1

  }else if (jogador2 > jogador1){  
    alert ("O número chutado foi: " + jogador2 + "\n" + "errrroooou. O número escolhido é menor.")      
    console.log("O número chutado foi:", jogador2)    
    console.log("errrroooou. O número escolhido é menor.") 
    console.log("-------------------------------------")
    jogadas += 1

  }else if (jogador2 === jogador1){
    jogadas += 1
  }
}

alert("ACERTOOOOOOOOOOOOOOOOOU! Número do " + nome1 + ": " + jogador1 + "\n" + "o número de tentativas de " + nome2 + ": " + jogadas) 
console.log("ACERTOOOOOOOOOOOOOOOOOU! Número do " + nome1 + ": "+ jogador1)
console.log("o número de tentativas de " + nome2 + ": " + jogadas) 

// 6.
console.log("--------------Desafio_3--------------")

// Desafios.
const computador = Math.floor((Math.random() * 100) + 1);
let jogador 
let jogadas = 0 
const nome = prompt ("Digite seu nome jogador")

console.log("                                     ")
console.log("             vamos Jogar")
console.log("                                     ")
console.log("-------------------------------------")

alert ("Jogador: " + nome)
console.log("Jogador: " + nome)
console.log("-------------------------------------")

while (jogador !== computador){
  jogador = Number(prompt("Digite um número " + nome))

  if (jogador < computador) {
    alert ("O número chutado foi: " + jogador + "\n" + "errrroooou. O número escolhido é maior.") 
    console.log("O número chutado foi: " + jogador )
    console.log("errrroooou. O número escolhido é maior.")
    console.log("-------------------------------------")
    jogadas += 1

  }else if (jogador > computador){   
    alert ("O número chutado foi: " + jogador + "\n" + "errrroooou. O número escolhido é menor.") 
    console.log("O número chutado foi: " + jogador )
    console.log("errrroooou. O número escolhido é menor.")
    console.log("-------------------------------------")
    jogadas += 1

  }else if (jogador === computador){
    jogadas += 1
  }
}
alert("ACERTOOOOOOOOOOOOOOOOOU! Número do Primeiro jogador: " + computador + "\n" + "o número de tentativas de " + nome + ": " + jogadas) 
console.log("ACERTOOOOOOOOOOOOOOOOOU! Número do Primeiro jogador: " + computador)
console.log("o número de tentativas de " + nome + ": " + jogadas)