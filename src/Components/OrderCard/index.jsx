/* eslint-disable react/prop-types */

import { TrashIcon } from "@heroicons/react/16/solid"

const OrderCard =  props => {
  const { imageUrl, title, price } =props
  
  return (
    
    <div className="flex flex-col my-1">

      <div className="w-full flex justify-between  items-center mb-3 px-3">

        <div className="flex items-center gap-3 h-[40%] w-[75%] justify-start">
          <figure className="w-12 h-12">
            <img 
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl} 
            alt={title} />
          </figure>
          <p className=" w-[65%] text-sm font-light overflow-hidden  whitespace-nowrap ">
            {title}
          </p>
        </div>
        <div className="w-[25%] flex  items-center  gap-2 justify-end">
          <span className="text-lg font-medium">
            {price}
          </span>
          
          <span>
            <TrashIcon className="w-6 h-6 cursor-pointer" />
          </span>
        </div>

      </div>
    </div>
  )
}


export { OrderCard } 