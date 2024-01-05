import { ProductService } from "./ProductService";
import { product } from "./product";

let _productService = new ProductService();

let result;


result = _productService.getById(2);

let p = new product();
p.name = "Ipone 6";
p.price = 4000;
p.category = "telefon";

// _productService.saveProduct(p);
_productService.deletProduct(result)
result = _productService.getProducts();
console.log(result);