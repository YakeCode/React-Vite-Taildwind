/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import { createContext } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0)

  // Product detail open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => { setIsProductDetailOpen(true) }
  const closeProductDetail = () => { setIsProductDetailOpen(false) }

  // Product detail show product
  const [productToShow, setProductToShow] = useState({});

  // checkoutSideMenu

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)


  // cart products

  const [cartProducts, setCartProducts] = useState([]);

  const [productQuantity, setProductQuantity] = useState(0);

  //shoping cart Order

  const [order, setOrder] = useState([]);

  // get products

  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // get products by Title

  const [searchByTitle, setSearchByTitle] = useState("")
  console.log(searchByTitle)

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle])

  console.log('filteredItems ', filteredItems)

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
          isCheckoutSideMenuOpen,
          productQuantity,
          setProductQuantity,
          order,
          setOrder,
          items,
          setItems,
          searchByTitle,
          setSearchByTitle,
          filteredItems
        }
      }
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}