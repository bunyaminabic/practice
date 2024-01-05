import { IProductService } from "./IProductService";
import { SimpleDataSource } from "./SimpleDataSource";
import { product } from "./product";

export class ProductService implements IProductService{ 

private dataSource : SimpleDataSource;
private products : Array<product> ;

constructor() {
    this.dataSource = new SimpleDataSource();
    this.products = new Array<product> ();
    this.dataSource.getProducts().forEach(p=> this.products.push(p));
}

    getById(id: number): product {
        return this.products.filter(p=>p.id === id)[0];
    }
    getProducts(): product[] {
        return this.products
    }
    saveProduct(product: product): void {
        if(product.id == 0 || product.id ==null){
            product.id = this.generateId()
            this.products.push(product);
        }else{
            let index = this.products.indexOf(product);
            this.products.splice(index,1,product);
            
        }
    }
    deletProduct(product: product): void {
        let index = this.products.indexOf(product);
        if(index>0){
            this.products.splice(index,1);
        }
    }

    private generateId():number{
        let key = 1;

        while(this.getById(key) !=null){
            key++;
        }
return key;
    }
}