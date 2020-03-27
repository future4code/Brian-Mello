import { Feed } from "../entities/feed";

export interface FeedGateway {
    getPostsForFeed(id: string): Promise<Feed[] | undefined>;
    getPostsForFeedByType(id: string, type: string): Promise<Feed[] | undefined>;
}