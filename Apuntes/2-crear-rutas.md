# Crear rutas en React

despues de definir cuales con las pagonas que vamos a tener en nuestra pagina-aplicacion

* importamos -import { useRoutes, BrowserRouter } from 'react-router-dom'-
* creamos una funcion para manejar las rutas, en el path se pone la ruta y en el elemento le indicamos de cual pagina

* Dentro de la etiqueta path ponemos la ruta va a utilizar, y dentro de el elemento, vamos a poner a que componente o pagina hace referencia

    const AppRoutes = ()=>{
  let routes = useRoutes (
    [
      { path : '/', element : <Home/> },
      { path : '/my-account', element : <MyAccount/> },
      { path : '/my-order', element : <MyOrder/> },
      { path : '/my-orders', element : <MyOrders/> },
      { path : '/not-found', element : <NotFound/>},
      { path : '/sign-in', element : <SignIn/>},
    ]
  )
  return routes
}

*  en el return del componente importamos BrowserRouter, y la funcion que retorna nuestras rutas

    function App() {
  return (
    
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    
  )
}

export default App