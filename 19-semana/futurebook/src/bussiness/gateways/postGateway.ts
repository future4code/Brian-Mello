import { Post } from "../entities/Post";
import { Feed } from "../entities/feed";

export interface PostGateway {
    createPost(post: Post): Promise<void>;
    getPostsForFeed(id: string): Promise<Feed[] | undefined>;
    getPostsForFeedByType(id: string, type: string): Promise<Feed[] | undefined>;
}