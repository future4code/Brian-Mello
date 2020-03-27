import { FeedGateway } from "../../gateways/feedGateway";

export class FeedOfPostsByTypeUC{
    constructor(
        private feedGateway: FeedGateway
    ){}

    public async execute(input: FeedOfPostsByTypeUCInput): Promise<FeedOfPostsByTypeUCOutput >{

        const posts = await this.feedGateway.getPostsForFeedByType(input.id, input.type);

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

export interface FeedOfPostsByTypeUCInput{
    id: string;
    type: string;
}

export interface FeedOfPostsByTypeUCOutput{
    posts: FeedOfPostsByTypeUCOutputPost[];
}
export interface FeedOfPostsByTypeUCOutputPost{
    id: string;
    photo: string;
    description: string;
    creationDate: Date;
    type: string;
    userId: string;
    name: string;
}