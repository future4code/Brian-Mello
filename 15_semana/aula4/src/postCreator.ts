export interface PostCreator {
    createPost(author: string, postText: string): void;
}