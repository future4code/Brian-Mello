const arrayDeDados = []

function onKey(ev) {
    if (ev.key === "Enter") {
        cadastrarPost()
    }
}

class Post {
    constructor (titulo, autor, conteudo, data, descricao) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
        this.data = data
        this.descricao = descricao
    }  
}

function cadastrarPost(){
    const formTitulo = document.getElementById("titulo").value
    const formAutor = document.getElementById("autor").value
    const formConteudo = document.getElementById("conteudo").value
    const formData = document.getElementById("data").value
    const formDescricao = document.getElementById("descricao").value
    const newPost = new Post (formTitulo, formAutor, formConteudo, formData, formDescricao )

    arrayDeDados.push(newPost)
    document.getElementById("titulo").value = ""
    document.getElementById("autor").value = ""
    document.getElementById("conteudo").value = ""
    document.getElementById("data").value = ""
    document.getElementById("descricao").value = ""
    mostrarPost()

}

function mostrarPost() {
    const espacoPostagens = document.getElementById("postagens")
    espacoPostagens.innerHTML = ""
    for (const postagens of arrayDeDados) {
        espacoPostagens.innerHTML += postagem(postagens)
    }
}

function postagem(newPost) {
    return "<article class=\"container-da-post\">" + 
        "Titulo: " + newPost.titulo + "<br><br>" +
        "Autor: " + newPost.autor + "<br><br>" +
        "Conteúdo: " + newPost.conteudo + "<br><br>" +
        "Data: " + newPost.data + "<br><br>" +
        "Descrição: " + newPost.descricao + "<br><br>" +
        "<button class=\"botao-de-deletar\" onclick=\"aoDeletar(\'" + newPost + "\')\">" + "Deletar" + "</button>" +
        "</article>"
        
}

function aoDeletar(newPost) {
    for (const postagens of arrayDeDados) {
        if (postagens === newPost) {
            arrayDeDados.splice(arrayDeDados.indexOf(postagens), 1)
        }
    }
    mostrarPost()
}