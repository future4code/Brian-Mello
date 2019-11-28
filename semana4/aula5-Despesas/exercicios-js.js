// 1)
// const pessoas = [
// 	{ nome: "Darvas", idade: 20},
// 	{ nome: "Goli", idade: 10},
// 	{ nome: "Paulinha", idade: 12},
// 	{ nome: "Artur", idade: 89},
// 	{ nome: "Soter", idade: 55},
// 	{ nome: "Miau", idade: 1},
// 	{ nome: "Lu", idade: 32}
// ]

// a)
// const maiorDeIdade = pessoas.filter(
//     (pessoas) => {
//         return pessoas.idade >= 20
//     }
// )

// b)
// const menorDeIdade = pessoas.filter(
//     (pessoas) => {
//         return pessoas.idade < 20
//     }
// )

// console.log("Adultos: ", maiorDeIdade)
// console.log("Crianças: ", menorDeIdade)

// 2)
// // a)
// const array = [1,2,3,4,5]



// b)

// c)

// for(const item of array) {
// 	if (item % 2 === 0) {
// 		console.log("o número " + item + " é par")
// 	} else if (item % 2 === 1) {
// 		console.log("o número " + item + " é impar")
// 	}
// }

// 3)
// const pessoas = [
// 	{ nome: "Darvas", idade: 20, altura: 1.2},
// 	{ nome: "Goli", idade: 10, altura: 1.8 },
// 	{ nome: "Paulinha", idade: 12, altura: 2.0},
// 	{ nome: "Artur", idade: 89, altura: 1.3},
// 	{ nome: "Soter", idade: 55, altura: 1.0},
// 	{ nome: "Miau", idade: 1, altura: 2.3 },
// 	{ nome: "Lu", idade: 32, altura: 1.9 }
// ]
// // a)
// const permitida = pessoas.filter(
//     (pessoas) => {
//         return pessoas.idade >= 14 && pessoas.idade < 60 && pessoas.altura >= 1.5
//     }
// )

// console.log (permitida)
// // b)
// const negado = pessoas.filter(
//     (pessoas) => {
//         return  pessoas.idade !== 14 && pessoas.idade !== 60 && pessoas.altura !== 1.5 && pessoas.altura !== 1.9
//     }
// )

// console.log (negado)

// // 4)

// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// const consuCancelada = consultas.filter(
//     (consultas) => {
//         return  consultas.cancelada === true
//     }
// )

// console.log(consuCancelada)

// const naoCancelada = consultas.filter(
//     (consultas) => {
//         return  consultas.cancelada === false
//     }
// )
// console.log(naoCancelada)

// 5)

// const contas = [
// 	{ cliente: "Goli", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paulinha", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Darvas", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Lu", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }, 
// 	{ cliente: "Miau", saldoTotal: -300, compras: [800] }
// ]

// contas.forEach((clientes,index,array) => {
//     clientes.saldoTotal -= clientes.compras
// })

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama", vida: 0, vidaMaxima: 2000},
    { nome: "Charmander", tipo: "fogo", vida: 0, vidaMaxima: 6000},
    { nome: "Squirtle", tipo: "água", vida: 0, vidaMaxima: 10000},
]

const nomeDosPokemons = pokemons.map((pokemon,index,array) => {
    return pokemon.nome
})

console.log(nomeDosPokemons)

console.log(pokemons)

pokemons.forEach((pokemon,index,array) => {
    pokemon.vida = pokemon.vidaMaxima
})

console.log(pokemons)
