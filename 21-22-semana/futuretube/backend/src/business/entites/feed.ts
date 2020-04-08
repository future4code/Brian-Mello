import { Video } from "./video";

export class Feed extends Video{
    constructor(
        id: string,
        title: string,
        link: string,
        description: string,
        creationDate: Date,
        user_id: string,
        private name: string,
        private photo: string
    ){
        super(id, title, link, description, creationDate, user_id)
    }

    public getName(): string{
        return this.name;
    };

    public setName(name: string): void{
        this.name = name;
    };

    public getPhoto(): string{
        return this.photo;
    }

    public setPhoto(photo: string): void{
        this.photo = photo;
    }
}