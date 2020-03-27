import { BaseDB } from "./baseDataBase";
import { Post } from "../bussiness/entities/Post";
import { PostGateway } from "../bussiness/gateways/postGateway";

export class PostDB extends BaseDB implements PostGateway{
    private postTableName = "post"

    private mapDBPostToPost(input?:any): Post | undefined{
        return(
            input &&
            new Post(
                input.id,
                input.photo,
                input.description,
                input.creationDate,
                input.type,
                input.userId
            )
        );
    };

    private mapDateToDbDate(input: Date): string {
        const year = input.getFullYear();
        const month = input.getMonth() + 1;
        const date = input.getDate();
        const hour = input.getHours();
        const minute = input.getMinutes();
        const second = input.getSeconds();
        return `${year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second}`;
    }

    public async createPost(post: Post): Promise <void> {
        await this.connection.raw(`
            INSERT INTO ${this.postTableName}(id, photo, description, creationDate, type, userId)
            VALUES(
                '${post.getId()}',
                '${post.getPhoto()}',
                '${post.getDescription()}',
                STR_TO_DATE('${this.mapDateToDbDate(post.getCreationDate())}', '%Y-%m-%d %H:%i:%s'),
                '${post.getType()}',
                '${post.getUserId()}'
            )
        `);
    };

}