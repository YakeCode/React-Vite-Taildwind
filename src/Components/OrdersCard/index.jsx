import { useContext } from "react"
import { ShoppingCartContext } from "../../context/index"

const OrdersCard = props => {
    const context = useContext(ShoppingCartContext);
    const { date, totalPrice, totalProducts } = props

    console.log(props)
    return (
        <div className=" w-[400px] flex justify-start mb-2 ">
            <div className=" flex flex-col  px-5">
                <p><span className="font-medium">Date : </span> {date}</p>
                <p><span className="font-medium">Total Products : </span>{totalProducts}</p>
                <p className="border-t border-black"><span className="font-medium ">Total Paid : </span>{totalPrice}</p>
            </div>
        </div>
    );
};

export { OrdersCard } 