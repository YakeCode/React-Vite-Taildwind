/* eslint-disable react/prop-types */


import { PlusIcon } from "@heroicons/react/16/solid"
import { useContext } from "react"
import { ShoppingCartContext } from "../../context"


const Card = ({ data })=> {

    const { id, category, image, title, price } = data;

    //console.log ('esta es la data que llega a la card', data)

    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail)=>{
        context.openProductDetail()
        context.setProductToShow(productDetail)
        context.closeCheckoutSideMenu()
        console.log(`show product : ${showProduct}`)
        console.log('product detail', productDetail)
    }



    const addProductsToCard = (productData) => {
        const productIndex = context.cartProducts.findIndex(product => product.id === productData.id);
    
        if (productIndex === -1) {
            // Producto no existe en el carrito, se agrega con cantidad inicial
            context.setCartProducts([...context.cartProducts, { ...productData, productQuantity : 1 }]);
        } else {
            // Producto ya existe, se actualiza la cantidad
            const updatedProducts = [...context.cartProducts];
            updatedProducts[productIndex].productQuantity += 1;
            context.setCartProducts(updatedProducts);
        }
    
        context.setCount(context.count + 1);
        context.openCheckoutSideMenu();
        context.setProductQuantity(context.productQuantity + 1);
    };
    

    const noClickInPlus = ()=>{

        return (
            <button className="absolute top-0 right-0 flex justify-center items-center rounded-md bg-[#59A0A2] text-[#C0D7BD] w-6 h-6 m-2 p-1 font-semibold text-md " 
                
                onClick={(noDetailOpen)=>{
                    noDetailOpen.stopPropagation()
                    addProductsToCard(data)
                }}
                >
                    <PlusIcon className="size-8"
                />
            </button>
        )
    }

    const clickInPlus = () =>{

        return (
            <button className="absolute top-0 right-0 flex justify-center items-center rounded-xl bg-black text-[#C0D7BD] w-6 h-6 m-2 p-1 font-semibold text-md border border-white" 
                
                onClick={(noDetailOpen)=>{
                    noDetailOpen.stopPropagation()
                    addProductsToCard(data)
                }}
                >
                    <PlusIcon className="size-8"
                />
            </button>
        )

    }


    const renderIcon = ()=>{
        const isInCart =  context.cartProducts.some(product=>product.id === id)

        if (isInCart) {

        return clickInPlus()

        } else {

        return noClickInPlus()
        }

    }


    return (

        <div  id={id} className="bg-white cursor-pointer w-60 h-64 rounded-lg mb-4 shadow-lg shadow-[#b0bccd] transition-transform transform hover:scale-[102%]" 

        onClick={()=>{showProduct(data)}}
        >

            <figure className="relative mb-2 w-full h-4/5 ">

                <span className="absolute left-0 bottom-0 bg-white/60 rounded-md text-xs px-3 py-0.5 text-black m-2 "
                >
                    {category}
                </span>

                <img className="w-full h-full object-fill rounded-lg"
                src={image} alt={title + 'img'}  />

                {renderIcon(id)}

            </figure>
            <p className="flex justify-evenly items-center w-full px-2">
                <span className="text-sm font-light w-3/5 overflow-hidden text-ellipsis whitespace-nowrap font-sans">
                    {title}
                </span>

                <span className="font-semibold text-lg w-1/5  text-slate-500">
                    ${price}
                </span>
            </p>
        </div>
    )
}

export default Card