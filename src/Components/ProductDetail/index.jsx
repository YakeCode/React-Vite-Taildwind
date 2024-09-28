import "./index.css"

import { XCircleIcon } from "@heroicons/react/16/solid"

function ProductDetail() {
    return (
        <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white "
        >
            <div className="flex justify-between items-center px-4 pt-2">
                <h2 className="font-medium text-2xl text-[#354A6F]/70"
                >Detail
                </h2>
                <span className=" bg-white ">
                    <XCircleIcon className="size-5"/>
                </span>
            </div>
        </aside>
    )
}

export {ProductDetail}