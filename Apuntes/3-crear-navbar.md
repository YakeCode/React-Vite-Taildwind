# Navbar con NavLink

https://reactrouter.com/en/main/components/nav-link

* Creamos primero la carpeta componentes dentro de la carpeta src, luego dentro de la carpeta componentes creamos la carpeta nav y dentro creamos el componente.jsx

    src/components/nav/index.jsx

* creamos el componente navbar y dentro de este ingresamos la etiqueta nav con sus items

* incorporamos el nav dentro de el componente principal App

* importamos navlinck en el componente, y lo incorporamos dentro de los items del nav

    * import { NavLink } from "react-router-dom"

    *   definimos los estilos antes del return del componente  

        const activeStyle = 'underline underline-offset-4'

    * Incorporamos en la etiqueta navlink la ruta y una duncion actualizadora de los estilos
    
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

