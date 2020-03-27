import { PostType, Post } from "../../entities/Post";
import { PostDB } from "../../../data/postDataBase";
import { v4 } from "uuid"

export class CreatePostUC {
    constructor(
        private postDB: PostDB
    ){}

    public async execute(input: CreatePostUCInput): Promise<CreatePostUCOutput>{
        const id = v4()

        let postType = PostType.normal;

        if(input.type === "event"){
            postType = PostType.event;
        } else if (input.type !== "normal"){
            throw new Error("Invalid Type!")
        }

        const post = new Post(
            id,
            input.photo,
            input.description,
            new Date(),
            postType,
            input.userId
        )

        await this.postDB.createPost(post)

        return{
            message: "Post Created Successfully"
        }
    }
}

export interface CreatePostUCInput {
    photo: string;
    description: string;
    type: PostType;
    userId: string;
}

export interface CreatePostUCOutput {
    message: string
}