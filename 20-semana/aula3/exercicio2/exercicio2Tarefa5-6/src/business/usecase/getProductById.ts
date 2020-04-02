import { ProductGateway } from "../gateways/productGateway";

export class GetProductByIdUC {
    constructor(
        private productGateway: ProductGateway
    ){}

    public async execute(input: GetProductByIdUCInput): Promise<GetProductByIdUCOutput>{
        const product = await this.productGateway.getProductById(input.id)

        if(!product){
            throw new Error("Product not found!")
        }

        return{
            id: product.getId(),
            name: product.getName(),
            photo: product.getPhoto(),
            price: product.getPrice()
        }
    }
}

export interface GetProductByIdUCInput{
    id: string;
}

export interface GetProductByIdUCOutput{
    id: string;
    name: string;
    photo: string;
    price: number;
}