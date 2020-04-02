import { Product } from "../entites/Product";

export interface ProductGateway{
    createProduct(product: Product): Promise<void>;
    getProductById(id: string): Promise<Product | undefined>;
}