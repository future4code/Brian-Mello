export class Post {
    constructor(
        protected author: string,
        protected postText: string,
        protected publishedDate: Date,
    ) {}
}