//import React from 'react'
import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail"

function Home() {

    const [items, setItems] = useState (null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response=>response.json())
            .then(data=>setItems(data))
            .catch((error)=>{
                console.log(error)
            })
    },[])

    return (
        <Layout>
            <div className="w-[65%] grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-7 my-12" >

            {
                items?.map( (item)=> (
                    <Card 
                        key = {item.id}
                        data = {item}
                    />
                ))
            }
            </div>
            <ProductDetail/>
        </Layout> 
        
    )
}

export default Home