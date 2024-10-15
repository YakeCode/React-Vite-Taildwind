export const totalPrice = (products) => {
    return products.reduce((acc, product) => acc + (product.price * product.productQuantity), 0).toFixed(2);
};
