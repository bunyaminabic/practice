"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var product_1 = require("./product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new product_1.product(1, "samsung S5", "Telefon", 1000), new product_1.product(2, "samsung S6", "Telefon", 2000), new product_1.product(3, "samsung S7", "Telefon", 3000), new product_1.product(4, "samsung S8", "Telefon", 4000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
