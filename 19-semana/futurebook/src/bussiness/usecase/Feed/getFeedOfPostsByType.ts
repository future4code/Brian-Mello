import { FeedGateway } from "../../gateways/feedGateway";

export class FeedOfPostsByTypeUC{
    constructor(
        private feedGateway: FeedGateway
    ){}

    private POST_PET_PAGE = 10;

    public async execute(input: FeedOfPostsByTypeUCInput): Promise<FeedOfPostsByTypeUCOutput >{

        let orderBy = "p.creationDate";
        if(input.orderBy === "p.creationDate" || input.orderBy === "p.description") {
            orderBy = input.orderBy;
        } else if (input.orderBy !== undefined) {
            throw new Error("Invalid Order By!");
        }

        let orderType = FeedOrderType.ASC;
        if(input.orderType === "DESC"){
            orderType = FeedOrderType.DESC
        } else if( input.orderType === "ASC"){
            orderType = FeedOrderType.ASC
        } else if (input.orderType !== undefined){
            throw new Error("Invalid Order Type!")
        }

        let limit = input.limit >= 1 ? input.limit : 1;
        const offset = this.POST_PET_PAGE * (limit -1)

        const posts = await this.feedGateway.getPostsForFeedByType(input.id, input.type, orderBy, orderType, this.POST_PET_PAGE, offset);

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
    orderBy: string;
    orderType: string;
    limit: number;
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

export enum FeedOrderType {
    ASC = "ASC",
    DESC = "DESC"
}