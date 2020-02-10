const arrayDeDespesas = []

function onKey(ev) {
    if (ev.key === "Enter") {
        cadastrarPost()
    }
}

class Despesas {
    constructor (valor, despesa, descricao) {
        this.valor = valor
        this.despesa = despesa
        this.descricao = descricao
    }
}

function cadastrarDespes() {
    const valorDesp = document.getElementById("valorDespesa").value
    const tipoDespesa = document.getElementById("tipoDeDespesa").value
    const descricaoDesp = document.getElementById("descricaoDespesa").value

    let despesaCadastrada = new Despesas (valorDesp, tipoDespesa, descricaoDesp)

    arrayDeDespesas.push(despesaCadastrada)
    document.getElementById("valorDespesa").value = ""
    document.getElementById("tipoDeDespesa").value = ""
    document.getElementById("descricaoDespesa").value = ""
    mostrarDespesas()
    console.log(despesaCadastrada)
}

function mostrarDespesas() {
    const espacoDespesas = document.getElementById("mostrarDespesas")
    espacoDespesas.innerHTML = ""
    for (const desp of arrayDeDespesas) {
        espacoDespesas.innerHTML += despesa(desp)
    }
}

function despesa(despesaCadastrada) {
    return "<article class=\"container-do-Despesa\">" + 
    "Valor: " + despesaCadastrada.valor + "<br><br>" +
    "Despesa: " + despesaCadastrada.despesa + "<br><br>" +
    "Descrição: " + despesaCadastrada.descricao + "<br><br><br>" +
    "<button class=\"botao-de-deletar\" onclick=\"aoDeletar(\'" + despesaCadastrada + "\')\">" + "Deletar" + "</button>" +
    "</article>"
}

// function validacaoInputs(texto) {
//     return texto.includes("") ||
//         texto.includes(".jpeg") ||
//         texto.includes("http") ||
//         texto.includes("data") ||
//         texto.includes(".mpeg")
// }

// if (document.getElementById("em").value==="" || document.getElementById("em").value.indexOf('@')===-1 || document.getElementById("em").value.indexOf(".")===-1) {
//     alert("Email inválido");
//     document.getElementById("em").focus();
//     return false;
// }
// else{
//     alert('o email ' + emailf + ' foi enviado');
//     alert('Bem vindo ' + emailf + '!');
//     return true;
// }  