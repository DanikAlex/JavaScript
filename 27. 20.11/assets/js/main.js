/*

get products list from api
list them on the screen
    be able to delete a product
    be able to update an existing product
be able to create a new product

*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import productsFormListener from "./event-listeners/product-form-listener.js";
import productsListener from "./event-listeners/products-table.js";
import reduceProducts, { reduceTotalPrice, reduceAverageRating } from "./reducers/products.js";
import { presentNumberOfProducts, presentProductsTable, presentTotalPrice, presentAverageRating } from "./ui/product.js";
(() => __awaiter(void 0, void 0, void 0, function* () {
    // initialization
    document.getElementById('products-table-body').addEventListener('click', productsListener);
    document.getElementById('add-product-form').addEventListener('submit', productsFormListener);
    // get data
    const response = yield fetch('https://dummyjson.com/products');
    const json = yield response.json();
    const products = json.products;
    // prepare data for presentation
    const productsHtml = reduceProducts(products);
    const numberOfRows = products.length;
    const totalPrice = reduceTotalPrice(products);
    const totalRating = reduceAverageRating(products);
    // present data (UI)
    presentProductsTable(productsHtml);
    presentNumberOfProducts(numberOfRows);
    presentTotalPrice(totalPrice);
    presentAverageRating(totalRating);
}))();
