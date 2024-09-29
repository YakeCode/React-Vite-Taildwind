//import React from 'react'

import { ShoppingBagIcon} from "@heroicons/react/16/solid"

import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../context"

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'

    const context = useContext(ShoppingCartContext)

    return (

        <nav className="top-0 w-full flex justify-around items-center fixed z-10 py-4 px-8 text-sm font-light bg-white">
        {/*left nav */}
            <ul className="flex items-center gap-5">
                <li className="font-semibold text-2xl text-[#354A6F]/70">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/'
                        className = {({isActive})=> 
                            isActive ? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/clothes'
                        className = {({isActive})=> 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/electronics'
                        className = {({isActive})=> 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/furnitures'
                        className = {({isActive})=> 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Furnitures
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/toys'
                        className = {({isActive})=> 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Toys
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/others'
                        className = {({isActive})=> 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
        {/*right nav */}
            <ul className="flex items-center gap-5">

                <li className="text-black/70">
                    user@email.com
                </li>

                <li>
                    <NavLink 
                        to='/my-orders'
                        className = {({isActive})=> 
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Orders
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/my-account'
                        className = {({isActive})=> 
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Account
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/sign-in'
                        className = {({isActive})=> 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sign In
                    </NavLink>
                </li>

                <li className="flex  ">
                    <ShoppingBagIcon className="size-7 text-[#59A0A2] "/>    
                    <span className="text-xs font-semibold h-4 w-4 flex items-center justify-center bg-[#d1e9ce] text-[#4f9092] border-slate-300 rounded-md">
                        
                        {context.count}
                    </span>

                </li>
            </ul>
        </nav>

    )
}

export {Navbar}