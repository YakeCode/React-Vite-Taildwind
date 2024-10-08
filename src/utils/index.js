export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => {
        if (product && product.price) { // Verifica que el producto y su precio existan
            sum += product.price;
        }
    });
    return sum;
};
