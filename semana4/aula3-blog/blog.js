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

    console.log(newPost)

    console.log(formTitulo)
    console.log(formAutor)
    console.log(formConteudo)
    console.log(formData)
    console.log(formDescricao)

}

function mostrarPost() {
    const espacoPostagens = document.getElementById("postagens")
    espacoPostagens.innerHTML = ""
    for (const postagens of arrayDeDados) {
        espacoPostagens.innerHTML += 
    }
}

function postagem(newPost) {
    return "<article class=\"container-da-post\">" + 
        "Titulo: "
}