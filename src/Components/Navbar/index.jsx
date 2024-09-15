//import React from 'react'

import { NavLink } from "react-router-dom"

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'

    return (

        <nav className="w-full flex justify-around items-center fixed z-10 py-4 px-8 text-sm font-light">
        {/*left nav */}
            <ul className="flex items-center gap-5">
                <li className="font-semibold text-xl">
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

                <li>
                    🛒 0
                </li>
            </ul>
        </nav>

    )
}

export {Navbar}