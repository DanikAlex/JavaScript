export default function reduceProducts(products) {
    return products
        .map(product => `
            <tr id="tr-${product.id}">
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>${product.rating}</td>
                <td><button id="delete-${product.id}" class="red-button">Delete</button></td>
                <td><button id="update-${product.id}" class="green-button">Update Description</button></td>
            </tr>
        `)
        .reduce((acc, curr) => acc + curr, '');
}
export function reduceTotalPrice(products) {
    return products.reduce((acc, curr) => acc + curr.price, 0);
}
export function reduceAverageRating(products) {
    return products.reduce((acc, curr) => acc + curr.rating, 0) / products.length;
}
