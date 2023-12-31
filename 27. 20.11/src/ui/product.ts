export function presentProductsTable(html: string): void {
    document.getElementById('products-table-body').innerHTML = html;
}

export function presentNumberOfProducts(num: number): void {
    document.getElementById('number-of-rows').innerHTML = num.toString();
}

export function presentTotalPrice(totalPrice: number): void {
    document.getElementById('total-price').innerHTML = totalPrice.toString();
}

export function presentAverageRating(totalRating: number): void {
    document.getElementById('total-rating').innerHTML = totalRating.toString();
}

export function appendProductTable(html: string): void {
    document.getElementById('products-table-body').innerHTML += html;
}