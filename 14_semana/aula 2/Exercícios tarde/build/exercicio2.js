const post1 = {
    autor: "Brian",
    texto: "BRABO"
};
const post2 = {
    autor: "Lucas",
    texto: "Muito legal"
};
const post3 = {
    autor: "Joao",
    texto: "Bem vindo"
};
const post4 = {
    autor: "Josefina",
    texto: "Que esquisito"
};
const post5 = {
    autor: "Leticia",
    texto: "me da uma bala"
};
const post6 = {
    autor: "Brian",
    texto: "Regras: não há regras"
};
const posts = [post1, post2, post3, post4, post5, post6];
const filtraPostsPeloAutor = (posts, autor) => {
    const filtroDePosts = posts.filter((post) => {
        return post.autor === autor;
    });
    return filtroDePosts;
};
const postsFiltrados = filtraPostsPeloAutor(posts, "Brian");
console.log(postsFiltrados);
//# sourceMappingURL=exercicio2.js.map