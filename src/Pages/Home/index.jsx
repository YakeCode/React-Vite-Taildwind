//import React from 'react'
import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import { Layout } from "../../Components/Layout"

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
            <div className=" w-full grid gap-5 grid-cols-3 max-w-screen-lg" >

            {
                items?.map( (item)=> (
                    <Card 
                        key = {item.id}
                        data = {item}
                    />
                ))
            }
            </div>
        </Layout> 
        
    )
}

export default Home