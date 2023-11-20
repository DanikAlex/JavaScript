var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import rest from "../api/rest.js";
import HttpMethods from "../enums/http-methods.js";
import reduceProducts from "../reducers/products.js";
import { appendProductTable } from "../ui/product.js";
export default function productsFormListener(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const rating = document.getElementById('rating').value;
        const newProduct = yield rest(HttpMethods.POST, 'https://dummyjson.com/products/add', { title, description, price, rating });
        const html = reduceProducts([newProduct]);
        appendProductTable(html);
    });
}
