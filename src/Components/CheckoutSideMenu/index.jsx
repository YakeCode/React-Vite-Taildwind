

import './style.css'
import { XCircleIcon } from "@heroicons/react/16/solid"
import { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import { OrderCard } from "../OrderCard/index"


function CheckoutSideMenu() {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id)=>{
        const filteredProducts =  
            context.cartProducts.filter((product)=> product.id != id)
            context.setCartProducts(filteredProducts)
    }

    return (
        <aside 
        
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden' } checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white `}
        >
            <div className='w-full h-full flex flex-col relative'>
                <div className="flex justify-between items-evenly px-4 pt-2">
                    <h2 className="font-medium text-2xl text-[#354A6F]/70"
                        >My Order
                    </h2>
                    <span className=" bg-white ">
                        <XCircleIcon className="size-5 cursor-pointer"
                        onClick={()=>context.closeCheckoutSideMenu()}
                        />
                    </span>
                </div>
                <div className='h-[76%] mt-5 overflow-x-hidden text-wrap whitespace-nowrap' >

                {
                    context.cartProducts.map((product, index)=>(
                        <OrderCard
                            key={`${product.id}+${index}`}
                            imageUrl={product.image}
                            title ={product.title}
                            price ={product.price}
                            handleDelete = {handleDelete}
                            id = {product.id}
                        />
                    ))
                }
                    
                </div>
                

                <button className="w-full flex justify-center h-[6%] items-center absolute bottom-0 m-4"
                >
                    <div className="flex justify-center items-center bg-[#59A0A2] w-3/5 h-full text-white rounded-md"
                    >
                        <p>Pay My Order</p>
                    </div>
                </button>
            </div>
            

        </aside>
    )
}


export { CheckoutSideMenu } 