import rest from "../api/rest.js";
import HttpMethods from "../enums/http-methods.js";
import reduceProducts from "../reducers/products.js";
import { appendProductTable, presentProductsTable } from "../ui/product.js";

export default async function productsFormListener(e: MouseEvent) {
    e.preventDefault();
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLInputElement).value;
    const price = (document.getElementById('price') as HTMLInputElement).value;
    const rating = (document.getElementById('rating') as HTMLInputElement).value;

    const newProduct = await rest(HttpMethods.POST, 'https://dummyjson.com/products/add', { title, description, price, rating });

    const html = reduceProducts([newProduct]);

    appendProductTable(html);
}