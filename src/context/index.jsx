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

  // get products by Title

  const [searchByTitle, setSearchByTitle] = useState(null)

  // Get Products By Category

  const initialCategory = localStorage.getItem("searchByCategory") || null;
  const [searchByCategory, setSearchByCategory] = useState(initialCategory);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        //console.log("Datos de productos:", data[0]); // Inspecciona el primer producto
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item =>
      item.category.toLowerCase().includes(searchByCategory.toLowerCase())
    )
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle)
    }
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory)
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter(item =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      )
    }
    if (!searchType) {
      return items
    }
  }

  // useEffect para guardar el valor de `searchByCategory` en `localStorage`
  useEffect(() => {
    if (searchByCategory) {
      localStorage.setItem("searchByCategory", searchByCategory);
    } else {
      localStorage.removeItem("searchByCategory");
    }
  }, [searchByCategory]);

  useEffect(() => {
    if (searchByTitle && searchByCategory) {
      setFilteredItems(filterBy("BY_TITLE_AND_CATEGORY", items, searchByTitle, searchByCategory));
    } else if (searchByTitle) {
      setFilteredItems(filterBy("BY_TITLE", items, searchByTitle, searchByCategory));
    } else if (searchByCategory) {
      setFilteredItems(filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory));
    } else {
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
    }
  }, [items, searchByTitle, searchByCategory]);

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
          filteredItems,
          searchByCategory,
          setSearchByCategory,
          filterBy,
        }
      }
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
