import { BaseDatabase } from "./baseDatabase";
import { ProductGateway } from "../business/gateways/productGateway";
import { Product } from "../business/entites/Product";

export class ProductDB extends BaseDatabase implements ProductGateway{
    private productTableName = "products";

    private mapDBProductToProduct(input?: any): Product | undefined{
        return(
            input &&
            new Product(
                input.id,
                input.name,
                input.photo,
                input.price
            )
        )
    }

    public async createProduct(product: Product): Promise<void>{
        await this.connection.raw(`
            INSERT INTO ${this.productTableName}(id, name, photo, price)
            VALUES(
                '${product.getId()}',
                '${product.getName()}',
                '${product.getPhoto()}',
                '${product.getPrice()}'
            )
        `);
    }

    public async getProductById(id: string): Promise<Product | undefined>{
        const result = await this.connection.raw(`
            SELECT * 
            FROM ${this.productTableName}
            WHERE id = '${id}';
        `)

        if(!result[0][0]){
            return undefined;
        }

        return await this.mapDBProductToProduct(result[0][0]);

    }
}