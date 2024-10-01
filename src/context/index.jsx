/* eslint-disable react/prop-types */
import { useState } from "react";

import {  createContext } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider  = ( {children} )=> {

  const [count, setCount] = useState (0)

  // Product detail open/close
  const [isProductDetailOpen, setIsProductDetailOpen ] = useState(false)
  const openProductDetail = ()=>{ setIsProductDetailOpen (true) }
  const closeProductDetail = ()=>{ setIsProductDetailOpen (false) }

  // Product detail show product
  const [productToShow, setProductToShow] = useState({});

  // checkoutSideMenu

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen ] = useState(false)
  const openCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(false)
  

  // cart products
  

  const [cartProducts, setCartProducts] = useState([]);


  return (
    <ShoppingCartContext.Provider
      value={
        {
          count,       
          setCount,
          isProductDetailOpen,
          setIsProductDetailOpen,
          openProductDetail,
          closeProductDetail,
          productToShow,
          setProductToShow,
          cartProducts,
          setCartProducts,
          closeCheckoutSideMenu,
          openCheckoutSideMenu,
          isCheckoutSideMenuOpen
        }
      }
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}