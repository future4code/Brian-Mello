import { VideoGateway } from "../../gateways/videoGateway";

export class FeedOfVideosUC {
    constructor(
        private videoGateway: VideoGateway
    ){}

    private POST_PER_PAGE = 10;

    public async execute(input: FeedOfVideosUCInput): Promise<FeedOfVideosUCOutput>{

        let orderBy = "v.creationDate";

        if(input.orderBy === "v.creationDate" || input.orderBy === "u.name") {
            orderBy = input.orderBy;
        } else if (input.orderBy !== undefined) {
            throw new Error("Invalid Order by!")
        }

        let orderType = FeedOrderType.ASC;

        if(input.orderType === "DESC"){
            orderType = FeedOrderType.DESC;
        } else if (input.orderType === "ASC"){
            orderType === FeedOrderType.ASC;
        } else if (input.orderType !== undefined) {
            throw new Error("Invalid Order type!")
        }

        let page = input.page >= 1 ? input.page : 1;

        const offset = this.POST_PER_PAGE * (page -1)

        const videos = await this.videoGateway.getVideos(orderBy, orderType, this.POST_PER_PAGE, offset)

        if(!videos){
            throw new Error("Feed of videos are Empty")
        }

        return{
            feed: videos.map(video =>{
                return {
                    id: video.getId(),
                    title: video.getTitle(),
                    link: video.getLink(),
                    description: video.getDescription(),
                    creationDate: video.getCreationDate(),
                    user_id: video.getUser_id(),
                    name: video.getName(),
                    photo: video.getPhoto()
                }
            })
        }
    }
}

export interface FeedOfVideosUCInput{
    orderBy: string;
    orderType: string;
    page: number;
}

export interface FeedOfVideosUCOutput {
    feed: FeedOfVideosUCOutputVideo[]
}

export interface FeedOfVideosUCOutputVideo{
    id: string;
    title: string;
    link: string;
    description: string;
    creationDate: Date;
    user_id: string;
    name: string;
    photo: string;
}

export enum FeedOrderType {
    ASC = "ASC",
    DESC = "DESC"
}