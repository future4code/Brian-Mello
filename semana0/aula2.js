// const @ = "a"
// console.log(@)
/**
 * Comece seu exercício aqui! :D
 */

/*Interpretação
a. false
b. false
c. true
d. false
e. boolean

a) São maneiras de guardar e acessar  mais de um dado na memória ao mesmo tempo.
são declarados através do comando: let array = [1,2,3,'a']

b) O index inicial de um array é o [0]

c) Para determinar o tamanho de um array é necessário digitar o nome do array seguido do .length.
Ex: array.length

d)I.  undefined
  II.  null
  III.  11
  IV.  3  e  4
  V.  19  e  9
  VI.  3
  VII.  1

// Codando
// 1) Conversão de graus
*/

let kelvin
let fahrenheit 
let celsius 
let fahrenheitPKelvin
let celsiusPFahrenheit
let celsiusPKelvin

/*A. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.*/
console.log('-------------------------------------------------------------------------')
fahrenheit = 77
fahrenheitPKelvin = (fahrenheit - 32) * 5 / 9 + 273,15
console.log('77 graus fahrenheit é igual a: ' + fahrenheitPKelvin + ' graus Kelvin')

/*B. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.*/
console.log('-------------------------------------------------------------------------')
celsius = 80
celsiusPFahrenheit = (celsius * 9 / 5) + 32
console.log('80 graus celsius é igual a: ' + celsiusPFahrenheit + ' graus Fahrenheit')

//C. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
console.log('-------------------------------------------------------------------------')
celsius = 30
celsiusPFahrenheit = (celsius * 9 / 5) + 32
celsiusPKelvin = celsius + 273,15
console.log('30 graus celsius é igual a: '+ celsiusPFahrenheit + ' graus Fahrenheit')
console.log('-------------------------------------------------------------------------')
console.log('30 graus celsius é igual a: ' + celsiusPKelvin + ' graus Kelvin')

//D. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
console.log('-------------------------------------------------------------------------')
let celsiusUsu = prompt ("Digite os graus celsius: ")
celsiusPFahrenheit = (Number(celsiusUsu) * 9 / 5) + 32
kelvin = Number(celsiusUsu) + 273,15
console.log(celsiusUsu + ' graus celsius é igual a: ' + celsiusPFahrenheit + ' graus Fahrenheit ou ' + kelvin + ' graus Kelvin')
console.log('-------------------------------------------------------------------------')

// 2) Perguntas
console.log('---------------------')
const nome = prompt ("digite seu Nome: ")
console.log('Nome: ' + nome)
console.log('---------------------')
const sobrenome = prompt ("digite seu Sobrenome: ")
console.log('Sobrenome: ' + sobrenome)
console.log('---------------------')
const idade = prompt ("digite seu idade: ")
console.log('idade: ' + idade)
console.log('---------------------')
const altura = prompt ("digite seu Altura: ")
console.log('Altura: ' + altura)
console.log('---------------------')
const hobby = prompt ("digite seu Hobby: ")
console.log('Hobby: ' + hobby)
console.log('---------------------')


// 3)Conta de luz
// quantidade de watts do aparelho
let watts = prompt ("digite o quilowatt do aparelho: ")
// horas que a pessoa usou o aparelho
let horas = prompt("digite o tempo usado em horas: ")
// preço do watt
const precoQuilo = 17
const salarioMinimo = 1000
// conta que vai descobrir o numero de quilowatts/hr
const quilowattHora = Number(watts) * Number(horas) / 1000
// conta que vai pegar o quilowatt gasto por hora vezes o preço
const quilowattConta = quilowattHora * (precoQuilo)
// valor total de quilowatts gastos no mês
const quilowattMes = quilowattHora * 30
// desconto de 15% na conta mensal
const quilowattDescont = (quilowattConta / 100) * 15 
// conta que vai mostrar o salario do final do mes com a conta de luz paga
const salarioFinalMes = salarioMinimo - quilowattMes
// conta que vai mostrar a conta de luz com desconto
const valorContadescont = quilowattConta - quilowattDescont

// vai mostrar a quantidade de horas usadas pelo aparelho
console.log('========================================================')
console.log('Quantidade de quilowatts usados por hora: ' + quilowattHora)

// vai mostrar a o preço dos quilowatts usados no mês
console.log('========================================================')
console.log('Valor dos quilowatts usados no mês: ' + quilowattMes)

// vai mostrar o valor que foi descontado
console.log('========================================================')
console.log('valor do desconto de 15% é de R$ ' + quilowattDescont)

// vai mostrar o valor a ser pago com o desconto de 15%
console.log('========================================================')
console.log('O valor da conta com o desconto é de R$ ' + valorContadescont)

// vai mostrar o valor da conta de luz sem o desconto de 15%
console.log('========================================================')
console.log('o valor da conta sem o desconto é de R$ ' + quilowattConta)

// salario minimo menos o valor da conta de luz
console.log('========================================================')
console.log('Irá sobrar no final do mês R$' + salarioFinalMes)
console.log('========================================================')