/*export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => {
        if (product && product.price) { // Verifica que el producto y su precio existan
            sum += product.price;
        }
    });
    return sum;
};*/

export const totalPrice = (products) => {
    return products.reduce((acc, product) => acc + (product.price * product.productQuantity), 0).toFixed(2);
};
