import express, { Request, Response } from "express";
import { CreateProductEndpoint } from "./endpoints/createProduct";
import { GetProductByIdEndpoint } from "./endpoints/getProductById";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post("/createProduct", CreateProductEndpoint);
app.get("/getProductById", GetProductByIdEndpoint);

export default app;
