/* eslint-disable react/prop-types */

import { useContext } from "react"
import { ShoppingCartContext } from "../../context/index"

const LastOrder = props => {
    const context = useContext(ShoppingCartContext);
    const { imageUrl, title, price, id, quantity, } = props;

    return (
        <div className="flex flex-col my-1">
            <div className="w-full flex justify-between items-center mb-3 px-3">
                <div className="flex items-center gap-3 h-[40%] w-[68%] justify-start">
                    <figure className="w-12 h-12">
                        <img
                            className="w-full h-full rounded-lg object-cover"
                            src={imageUrl}
                            alt={title}
                        />
                    </figure>
                    <p className="w-[70%] text-sm font-light overflow-hidden whitespace-nowrap">
                        {title}
                    </p>
                </div>
                <div className="w-[30%] flex items-center gap-6 justify-end">
                    <span className="text-sm font-semibold h-5 w-5 flex items-center justify-center bg-[#d1e9ce] text-[#4f9092] border-slate-300 rounded-md">
                        {quantity}
                    </span>
                    <span className="text-lg font-medium">
                        {price * quantity}
                    </span>
                </div>
            </div>
        </div>
    );
};

export { LastOrder }