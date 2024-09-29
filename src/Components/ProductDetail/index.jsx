import "./index.css"
import { XCircleIcon } from "@heroicons/react/16/solid"
import { useContext, useEffect } from "react"
import { ShoppingCartContext } from "../../context"
import { ShoppingCartIcon } from "@heroicons/react/16/solid"

function ProductDetail() {

    const context = useContext(ShoppingCartContext)

    const product = context.productToShow

    useEffect(() => {
        if (context.productToShow.id) {
            console.log('show', context.productToShow)
        }
    }, [context.productToShow])

    return (
        <aside 
        
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden' } product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white `}
        >
            <div className="flex justify-between items-evenly px-4 pt-2">
                <h2 className="font-medium text-2xl text-[#354A6F]/70"
                >Detail
                </h2>
                <span className=" bg-white ">
                    <XCircleIcon className="size-5 cursor-pointer"
                    onClick={()=>context.closeProductDetail()}
                    />
                </span>
            </div>

            <div className="flex flex-col justify-evenly h-[100%] border ">
                <figure className="w-full h-2/5 flex justify-center ">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-4/5 rounded-lg cover"/>
                </figure>

                <h2 className="w-full text-center text-[#354A6F]/70 font-semibold text-xl mb-0 p-0 " >
                    {product.title}
                </h2>

                <h3 className="w-full text-center mt-0 mb-[3%] font-semibold p-0">
                    {product.category}
                </h3>

                <p className="w-full py-[2%] px-2">
                    {product.description}
                </p>

                <span className="w-full text-center font-semibold text-xl text-[#354A6F]/70 ">
                    ${product.price}
                </span>

                <button className="w-full flex justify-center h-[7%] my-[2%]"
                    onClick={()=>{context.setCount(context.count + 1)}}
                >
                    <div className="flex justify-center items-center bg-[#59A0A2] w-3/5 h-full text-white rounded-md"
                    >
                        <p>Add To Cart</p>
                        <ShoppingCartIcon className=" size-7 "/>
                    </div>
                </button>

            </div>

        </aside>
    )
}

export {ProductDetail}