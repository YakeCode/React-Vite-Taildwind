# context

Crea un estado global el cual se deja compartir con todos los componentes

* Se crea una carpeta en src con el nombre contex y un archivo dentro de la carpeta .jsx

* Se importa CreateContext

    import {  createContext } from "react";

* Se declara el contexto y se invocan sus metodos provider 

    const ShoppingCartContext = createContext()

    export const ShoppingCartProvider  = ( {children} )=> {
    return (
        <ShoppingCartContext.Provider>
        {children}
        </ShoppingCartContext.Provider>
    )
    }

*   En nuestro punto de entrada principal App.jsx
*   Incorporamos los elementos a lños cuales les vamos a dar contexto

        function App() {
            return (
                <ShoppingCartProvider>
                <BrowserRouter>
                <AppRoutes/>
                <Navbar/>
                </BrowserRouter>
                </ShoppingCartProvider>
            )
        }

            export default App