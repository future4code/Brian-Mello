import { ProductGateway } from "../gateways/productGateway";
import { v4 } from "uuid"
import { Product } from "../entites/Product";

export class CreateProductUC{
    constructor(
        private productGateway: ProductGateway
    ){}

    public async execute(input: CreateProductUCInput): Promise<CreateProductUCOutput>{
        const id = v4()

        const product = new Product(
            id,
            input.name,
            input.photo,
            input.price
        )

        await this.productGateway.createProduct(product)

        return{
            message: "Product Created Successfully"
        }
    }
}

export interface CreateProductUCInput{
    name: string;
    photo: string;
    price: number;
}

export interface CreateProductUCOutput{
    message: string;
}