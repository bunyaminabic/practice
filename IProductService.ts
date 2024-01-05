import { product } from "./product";


export interface IProductService {
    getById(id: number):product;
    getProducts(): Array<product>;
    saveProduct(product: product):void;
    deletProduct(product: product):void;
}