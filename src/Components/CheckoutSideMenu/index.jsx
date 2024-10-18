import './style.css'
import { useContext } from "react"
import { Link } from 'react-router-dom'
import { XCircleIcon } from "@heroicons/react/16/solid"
import { ShoppingCartContext } from "../../context"
import { OrderCard } from "../OrderCard/index"
import { totalPrice } from "../../utils/index"


function CheckoutSideMenu() {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id)=>{
        const filteredProducts =  
            context.cartProducts.filter((product)=> product.id != id)
            context.setCartProducts(filteredProducts)
            context.setCount(context.count - 1)
    }

    const handleCheckout =()=>{
        const orderToAdd = {
            date : '01.02.24',
            products : context.cartProducts,
            totalProducts:  context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts),
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
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
                            key={`${product.id}+${index}+${product.title}`}
                            imageUrl={product.image}
                            title ={product.title}
                            price ={product.price}
                            handleDelete = {handleDelete}
                            id = {product.id}
                        />
                    ))
                }
                    
                </div>

                <div className='w-full flex justify-center items-center'>
                    <p className='w-3/5 text-center text-xl font-medium text-[#354A6F]/70'>
                        {`Total: ${totalPrice(context.cartProducts)}`}</p>

                </div>
                
                <Link to='/my-orders/last'>
                    <button className="w-full flex justify-center h-[7%] items-center absolute bottom-6 "
                    onClick={()=>handleCheckout()}
                    >
                        <div className="flex justify-center items-center bg-[#59A0A2] w-2/5 h-full text-white rounded-md"
                        >
                            <p className='text-xl font-[400]'>Checkout</p>
                        </div>
                    </button>
                </Link>


            </div>
            

        </aside>
    )
}


export { CheckoutSideMenu } 