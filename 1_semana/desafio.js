let nomeJogador 
let jogadorCarta1 = comprarCarta()
let jogadorCarta2 = comprarCarta()
let cartasJogador = [jogadorCarta1, jogadorCarta2]
const computadorCarta1 = comprarCarta()
const computadorCarta2 = comprarCarta()
let cartasComputador = [computadorCarta1, computadorCarta2]
let pontuacaoJogador = 0
let pontuacaoComputador = 0

if (jogadorCarta1.texto === "A" && jogadorCarta2.texto === "A"){
  jogadorCarta1 = comprarCarta()
  jogadorCarta2 = comprarCarta()
} 

if (computadorCarta1.texto === "A" && computadorCarta2.texto === "A"){
  computadorCarta1 = comprarCarta()
  computadorCarta2 = comprarCarta()
} 

for (let i = 0; i < cartasJogador.length; i++){
  pontuacaoJogador += cartasJogador[i].valor
}

for (let i = 0; i < cartasComputador.length; i++){
  pontuacaoComputador += cartasComputador[i].valor
}

if(confirm("Que iniciar um novo jogo?")){
  nomeJogador = prompt("Digite seu nome: ")

  alert(nomeJogador + " - cartas: " + jogadorCarta1.texto + " e " + jogadorCarta2.texto + "\nPontuação: " + pontuacaoJogador + "\nComputador - cartas: " + computadorCarta1.texto + " e " + computadorCarta2.texto + "\nPontuação: " + pontuacaoComputador)
  
  console.log(nomeJogador + " - cartas: " + jogadorCarta1.texto + " - " + jogadorCarta2.texto + "\nPontuação: " + pontuacaoJogador)
  console.log("Computador - cartas: " + computadorCarta1.texto + " - " + computadorCarta2.texto + "\nPontuação: " + pontuacaoComputador)

  while(pontuacaoJogador <= 21 && pontuacaoJogador !== pontuacaoComputador || pontuacaoJogador === pontuacaoComputador){
    if (confirm("Suas cartas são " + jogadorCarta1.texto + jogadorCarta2.texto + ". A carta revelada do computador é " + computadorCarta1.texto + "\nQuer mais uma carta?")){
      cartasJogador.push(comprarCarta())
      console.log(pontuacaoJogador)

      for (let i = 0; i < cartasJogador.length; i++){
        pontuacaoJogador += cartasJogador[i].valor
      }

    }else{
      break
    }
    break
  }

  if (pontuacaoJogador > pontuacaoComputador && pontuacaoJogador <= 21){
    alert(nomeJogador + " ganhou fazendo " + pontuacaoJogador + " pontos!")
    console.log("--------------------------------------")
    console.log(nomeJogador + " ganhou fazendo " + pontuacaoJogador + " pontos!")

  }else if (pontuacaoComputador > pontuacaoJogador && pontuacaoComputador <= 21) {
    alert("Computador ganhou fazendo " + pontuacaoComputador + " pontos!") 
    console.log("--------------------------------------")
    console.log("Computador ganhou fazendo " + pontuacaoComputador + " pontos!")  

  }else if (pontuacaoComputador === pontuacaoJogador){
    alert("Deu empate!")
    console.log("Deu empate!")
  }    
}