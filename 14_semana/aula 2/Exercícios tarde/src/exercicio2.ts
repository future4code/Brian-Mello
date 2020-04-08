type post = {
    autor: string,
    texto: string
}

const post1: post = {
    autor: "Brian",
    texto: "BRABO"
}

const post2: post = {
    autor: "Lucas",
    texto: "Muito legal"
}

const post3: post = {
    autor: "Joao",
    texto: "Bem vindo"
}

const post4: post = {
    autor: "Josefina",
    texto: "Que esquisito"
}

const post5: post = {
    autor: "Leticia",
    texto: "me da uma bala"
}

const post6: post = {
    autor: "Brian",
    texto: "Regras: não há regras"
}

const posts: post[] = [ post1, post2, post3, post4, post5, post6 ]

const filtraPostsPeloAutor = (posts: post[], autor?: string) => {
    const filtroDePosts: post[] = posts.filter((post) => {
        return post.autor === autor
    })

    return filtroDePosts;
}

const postsFiltrados: post[] = filtraPostsPeloAutor(posts, "Brian")

console.log(postsFiltrados)