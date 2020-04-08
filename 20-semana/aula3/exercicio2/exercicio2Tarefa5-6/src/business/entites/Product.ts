export class Product{
    constructor(
        private id: string,
        private name: string,
        private photo: string,
        private price: number
    ){}
    
    public getId(): string{
        return this.id
    }

    public setId(id: string): void{
        this.id = id
    }

    public getName(): string{
        return this.name
    }

    public setName(name: string): void{
        this.name = name
    }

    public getPhoto(): string{
        return this.photo
    }

    public setPhoto(photo: string): void{
        this.photo = photo
    }

    public getPrice(): number{
        return this.price
    }

    public setPrice(price: number): void{
        this.price = price
    }
}