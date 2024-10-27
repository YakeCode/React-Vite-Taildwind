//import React from 'react'
import { useContext } from "react"
import Card from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../context"
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"

function Home() {

    const context = useContext(ShoppingCartContext)


    return (
        <Layout>

            <div>
                <h1 className="text-center mb-2 font-medium text-lg">Exclusive Products</h1>
                <div className="flex items-center relative" >
                    <input type="text"
                        placeholder="Search a Product "
                        className="w-80 rounded-md px-4 py-4 border border-slate-500 focus:outline-[#354A6F]/40"
                        onChange={(event) => context.setSearchByTitle(event.target.value)}
                    />
                    <MagnifyingGlassIcon className="w-6 h-6 absolute right-2 opacity-50" />

                </div>
            </div>

            <div className="w-[65%] grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-7 my-8" >

                {
                    context.items?.map((item) => (
                        <Card
                            key={item.id}
                            data={item}
                        />
                    ))
                }
            </div>
            <ProductDetail />
        </Layout>

    )
}

export default Home