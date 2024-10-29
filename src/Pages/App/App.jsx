import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'
import { Navbar } from '../../Components/Navbar'
import { ShoppingCartProvider } from '../../context'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu/index';

const AppRoutes = () => {
  let routes = useRoutes(
    [
      { path: '/', element: <Home /> },
      { path: '/clothes', element: <Home /> },
      { path: '/electronics', element: <Home /> },
      { path: '/jewelery', element: <Home /> },
      { path: '/mens', element: <Home /> },
      { path: '/womens', element: <Home /> },
      { path: '/my-account', element: <MyAccount /> },
      { path: '/my-order', element: <MyOrder /> },
      { path: '/my-orders', element: <MyOrders /> },
      { path: '/my-orders/last', element: <MyOrder /> },
      { path: '/my-orders/:id', element: <MyOrder /> },
      { path: '/not-found', element: <NotFound /> },
      { path: '/sign-in', element: <SignIn /> },
    ]
  )
  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App;