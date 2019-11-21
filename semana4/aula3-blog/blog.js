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
    const formPostagem = document.getElementById("postagens")
    const newPost = new Post (formTitulo, formAutor, formConteudo, formData, formDescricao )

    arrayDeDados.push(newPost)
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
        "Titulo: " + Post.titulo + "<br><br>" +
        "Autor: " + Post.autor + "<br><br>" +
        "Conteúdo: " + Post.conteudo + "<br><br>" +
        "Data: " + Post.data + "<br><br>" +
        "Descrição: " + Post.descricao + "<br><br>" +
        "<button class=\"botao-de-deletar\" onclick=\"aoDeletar(\'" + newPost + "\')\">" + "Deletar" + "</button>" +
        "</article>"
        
}

function aoDeletar(newPost) {
    for (const postagens of arrayDeDados) {
        if (postagens === newPost) {
            arrayDeDados.splice(arrayDeDados.indexOf(postagens), 1)
        }
    }
    mostraTodasAsImagens()
}