import { FeedGateway } from "../../gateways/feedGateway";

export class FeedOfPostsUC{
    constructor(
        private feedGateway: FeedGateway
    ){}

    public async execute(input: FeedOfPostsUCInput): Promise<FeedOfPostsUCOutput >{

        const posts = await this.feedGateway.getPostsForFeed(input.id);

        if(!posts){
            throw new Error("Feed is Empty!");
        };

        return {
            posts: posts.map(post => {
                return {
                    id: post.getId(),
                    photo: post.getPhoto(),
                    description: post.getDescription(),
                    creationDate: post.getCreationDate(),
                    type: post.getType(),
                    userId: post.getUserId(),
                    name: post.getName()
                };
            })
        };
    };
}

export interface FeedOfPostsUCInput{
    id: string;
}

export interface FeedOfPostsUCOutput{
    posts: FeedOfPostsUCOutputPost[];
}
export interface FeedOfPostsUCOutputPost{
    id: string;
    photo: string;
    description: string;
    creationDate: Date;
    type: string;
    userId: string;
    name: string;
}