//import React from 'react'

import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../context"
import { LastOrder } from "../../Components/LastOrder"


function MyOrder() {

  const context = useContext(ShoppingCartContext)
  console.log('context order',context.order?.slice(-1)[0])
  const lastOrder = context.order.slice(-1)[0]
  return (
    <Layout>
      <div className='bg-red-600 mb-10'>MyOrder</div>
      <div className='h-[76%] mt-5 overflow-x-hidden text-wrap whitespace-nowrap' >

        {
          lastOrder && lastOrder.products.length > 0 ? 
          
          lastOrder.products.map((product, index)=>(
            <LastOrder
            key={`${product.id}+${index}+${product.title}`}
            id = {product.id}
            imageUrl={product.image}
            title ={product.title}
            quantity ={product.productQuantity}
            price ={product.price}
            />
          )
        )
          :
          <h2>
            No hay ordenes nuevas
          </h2>

        }
      </div>
      <div className="w-[450px] flex justify-between px-3 mt-7 items-center">
        <span className="font-medium text-xl">Purchase Amount</span>
        <span className="font-[600] text-xl text-[#354A6F]">{lastOrder.totalPrice}</span>
      </div>
    </Layout>
  )
}

export default MyOrder