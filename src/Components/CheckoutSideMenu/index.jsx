import './style.css'
import { XCircleIcon } from "@heroicons/react/16/solid"
import { useContext } from "react"
import { ShoppingCartContext } from "../../context"

function CheckoutSideMenu() {
    const context = useContext(ShoppingCartContext)

    return (
        <aside 
        
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden' } checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white `}
        >
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

        </aside>
    )
}


export { CheckoutSideMenu } 