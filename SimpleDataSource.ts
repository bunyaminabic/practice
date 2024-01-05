import { product } from "./product";

export class SimpleDataSource {
    private products: Array<product>;


    constructor (){
        this.products = new Array<product>(
            new product(1,"samsung S5","Telefon",1000),
            new product(2,"samsung S6","Telefon",2000),
            new product(3,"samsung S7","Telefon",3000),
            new product(4,"samsung S8","Telefon",4000)
            
        );
    }
    getProducts(): product[] {
        return this.products;
    }
}