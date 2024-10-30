import "./index.css"
import { XCircleIcon } from "@heroicons/react/16/solid"
import { useContext, useEffect } from "react"
import { ShoppingCartContext } from "../../context"
import { ShoppingCartIcon } from "@heroicons/react/16/solid"

function ProductDetail() {

    const context = useContext(ShoppingCartContext)

    const product = context.productToShow

    const addProductsToCard = (productData) => {
        const productIndex = context.cartProducts.findIndex(product => product.id === productData.id);

        if (productIndex === -1) {
            // Producto no existe en el carrito, se agrega con cantidad inicial
            context.setCartProducts([...context.cartProducts, { ...productData, productQuantity: 1 }])
            context.setCount(context.count + 1);
        } else {
            // Producto ya existe, se actualiza la cantidad
            const updatedProducts = [...context.cartProducts];
            updatedProducts[productIndex].productQuantity += 1;
            context.setCartProducts(updatedProducts);
        }
        context.openCheckoutSideMenu();
        context.setProductQuantity(context.productQuantity + 1);
        context.closeProductDetail()

    };


    useEffect(() => {
        if (context.productToShow.id) {
            console.log('show', context.productToShow)
        }
    }, [context.productToShow])

    return (
        <aside

            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white `}
        >
            <div className="flex justify-between items-evenly px-4 pt-2">
                <h2 className="font-medium text-2xl text-[#354A6F]/70"
                >Detail
                </h2>
                <span className=" bg-white ">
                    <XCircleIcon className="size-5 cursor-pointer"
                        onClick={() => context.closeProductDetail()}
                    />
                </span>
            </div>

            <div className="flex flex-col justify-around h-[100%] border px-6">

                <div className="w-full h-[40%] flex flex-col">
                    <figure className="w-full h-[75%] flex  justify-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-10/12 h-full rounded-lg cover" />
                    </figure>

                    <div className="h-15%">
                        <h2 className="w-full text-center text-[#354A6F]/70 font-semibold text-xl mb-0 p-0 " >
                            {product.title}
                        </h2>

                        <h3 className="w-full text-center mt-0 mb-2 font-semibold p-0 h-[5%]">
                            {product.category}
                        </h3>
                    </div>



                </div>

                <div className="h-[55%] w-full flex flex-col">

                    <p className="w-full h-[60%] mt-3 overflow-x-hidden text-wrap whitespace-nowrap">
                        {product.description}
                    </p>

                    <span className="w-full h-[10%] flex justify-center align-center font-semibold text-xl text-[#354A6F]/70  ">
                        ${product.price}
                    </span>

                    {<button className="w-full flex justify-center h-[12%] items-center "
                        onClick={() => { addProductsToCard(context.productToShow) }}
                    >
                        <div className="flex justify-center items-center bg-[#59A0A2] w-3/5 h-full text-white rounded-md"
                        >
                            <p>Add To Cart</p>
                            <ShoppingCartIcon className=" size-7 " />
                        </div>
                    </button>}

                </div>
            </div>

        </aside>
    )
}

export { ProductDetail }