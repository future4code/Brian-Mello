import { PostDB } from "../../../data/postDataBase";
import { Post, PostType } from "../../entities/post";
import { InvalidParameterError } from "../../error/InvalidParameterError";
import { v4 } from "uuid";

export class CreatePostUC {
  constructor(private db: PostDB) {}

  public async execute(input: CreatePostUCInput): Promise<CreatePostUCOutput> {
    const id = v4();
    let type = PostType.normal;
    if (input.type === "event") {
      type = PostType.event;
    } else if (input.type !== "normal") {
      throw new InvalidParameterError("Invalid type");
    }

    const post = new Post(
      id,
      input.title,
      input.content,
      type,
      input.userId,
      input.image
    );

    await this.db.createPost(post);

    return {
      message: "Post created successfully"
    };
  }
}

export interface CreatePostUCInput {
  title: string;
  content: string;
  type: string;
  userId: string;
  image?: string;
}

export interface CreatePostUCOutput {
  message: string;
}

// 1 - podemos criar um post normal e um evento, ele são represetandos pelo enum postType que armazena o tipo normal e o de evento.

// 2 - ele valida se o post é um evento ou se ele for diferente de um post normal, ele fala que o tipo é inválido.

// 3 - ela é uma classe abstrata porque ela serve de modelo para outras classes. Ela guarda de importante os arquivos necessários para conexão a com o knex e o banco de dados.

// 4 - ela recebe o banco de dados PostDB para que consiga receber as informações do banco de dados.

// 5 - Isso é necessário pois ela funciona como um esqueleto dos dados que serão passados no body da requisição para a criação de um post.

// 6 - eles vem da interface CreatePostUCInput.

// 7 - o Post passado na função de criar o post vem da classe Post dentro das entidades.

// 8 - o ternário no createPost permite que caso o post tenha imagem a pessoa pode criar um post com imagem, caso não tenha, ele pode criar um post sem imagem.