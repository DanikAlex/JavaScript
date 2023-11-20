export function presentProductsTable(html) {
    document.getElementById('products-table-body').innerHTML = html;
}
export function presentNumberOfProducts(num) {
    document.getElementById('number-of-rows').innerHTML = num.toString();
}
export function presentTotalPrice(totalPrice) {
    document.getElementById('total-price').innerHTML = totalPrice.toString();
}
export function presentAverageRating(totalRating) {
    document.getElementById('total-rating').innerHTML = totalRating.toString();
}
export function appendProductTable(html) {
    document.getElementById('products-table-body').innerHTML += html;
}
