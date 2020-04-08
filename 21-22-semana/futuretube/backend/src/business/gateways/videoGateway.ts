import { Video } from "../entites/video";
import { Feed } from "../entites/feed";

export interface VideoGateway{
    checkVideoByLink(link: string): Promise<Video | undefined>;
    createVideo(video: Video): Promise<void>;
    getVideos(orderBy: string, orderType: string, limit: number, offset: number): Promise<Feed[] | undefined>;
    getVideoById(id: string): Promise<Feed | undefined>;
    deleteVideo(id: string): Promise<void>;
    updateVideo(id: string, description: string, title: string): Promise<void>;
    getVideoByUser(id: string): Promise<Feed[] | undefined>;
}