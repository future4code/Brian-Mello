// function onKey(e){
//     if (e.key === "Enter"){
//         aoClicarEnviar()
//     }
// }

// let cadastro = {
//     nome: " ",
//     idade: " ",
//     telefone: " ",
//     email: " ",
//     sexo: " ",
// }


function cadastrar() {
    const nome = document.getElementById("nomeAluno").value
    const idade = document.getElementById("idadeAluno").value
    const telefone = document.getElementById("telefoneAluno").value
    const email = document.getElementById("emailAluno").value
    const genero = document.getElementById("generoAluno").value
    const dados = document.getElementById("listaDeCadastro")
    
    if (document.getElementById("emailAluno").value==="" || document.getElementById("emailAluno").value.indexOf('@')===-1 || document.getElementById("emailAluno").value.indexOf(".")===-1) {
        alert("Email inválido");
        document.getElementById("email").focus();
        document.getElementById("nomeAluno").value = ""
        document.getElementById("idadeAluno").value = ""
        document.getElementById("telefoneAluno").value = ""
        document.getElementById("emailAluno").value = ""
        document.getElementById("generoAluno").value = ""
        return false;
    } else if (document.getElementById("telefoneAluno").value==="" || document.getElementById("telefoneAluno").value.indexOf('(')===-1 || document.getElementById("telefoneAluno").value.indexOf(')')===-1 || document.getElementById("telefoneAluno").value.indexOf("-")===-1) {
            alert("Telefone inválido");
            document.getElementById("telefoneAluno").focus();
            document.getElementById("nomeAluno").value = ""
            document.getElementById("idadeAluno").value = ""
            document.getElementById("telefoneAluno").value = ""
            document.getElementById("emailAluno").value = ""
            document.getElementById("generoAluno").value = ""
        return false;
    }else {
        dados.innerHTML += "<div id='cadastros'>" + "<p> Nome: " + nome + "</p>" + 
                        "<p> Idade: " + idade + "</p>" +
                        "<p> Telefone: " + telefone + "</p>" + 
                        "<p> Email: " + email + "</p>" + 
                        "<p> Gênero: " + genero + "</p>" + "</div>" 

        alert("O Aluno " + nome + " foi cadastrado com sucesso.") 

        document.getElementById("nomeAluno").value = ""
        document.getElementById("idadeAluno").value = ""
        document.getElementById("telefoneAluno").value = ""
        document.getElementById("emailAluno").value = ""
        document.getElementById("generoAluno").value = ""
    }
}


