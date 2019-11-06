import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const jogadorCarta1 = comprarCarta()
const jogadorCarta2 = comprarCarta()
let cartasJogador = [jogadorCarta1, jogadorCarta2]
const computadorCarta1 = comprarCarta()
const computadorCarta2 = comprarCarta()
let cartasComputador = [computadorCarta1, computadorCarta2]
let pontuacaoJogador = cartasJogador[0].valor + cartasJogador[1].valor
let pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor

if(confirm("Que iniciar um novo jogo?")){
  const nomeJogador = prompt("Digite seu nome: ")
  alert(nomeJogador + " - cartas: " + jogadorCarta1.texto + " e " + jogadorCarta2.texto + "\nPontuação: " + pontuacaoJogador + "\nComputador - cartas: " + computadorCarta1.texto + " e " + computadorCarta2.texto + "\nPontuação: " + pontuacaoComputador)
  
  console.log(nomeJogador + " - cartas: " + jogadorCarta1.texto + " - " + jogadorCarta2.texto + "\nPontuação: " + pontuacaoJogador)
  console.log("Computador - cartas: " + computadorCarta1.texto + " - " + computadorCarta2.texto + "\nPontuação: " + pontuacaoComputador) 
  if (pontuacaoJogador > pontuacaoComputador){
    alert(nomeJogador + " ganhou fazendo " + pontuacaoJogador + " pontos!")
    console.log("--------------------------------------")
    console.log(nomeJogador + " ganhou fazendo " + pontuacaoJogador + " pontos!")
  }else if (pontuacaoComputador > pontuacaoJogador) {
    alert("Computador ganhou fazendo " + pontuacaoComputador + " pontos!") 
    console.log("--------------------------------------")
    console.log("Computador ganhou fazendo " + pontuacaoComputador + " pontos!")   
  }else if (pontuacaoComputador === pontuacaoJogador){
    alert("Deu empate!")
    console.log("Deu empate!")
  }
}
