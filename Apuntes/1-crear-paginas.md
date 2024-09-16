# crear paginas

* instalamos npm install react-router-dom

* En el componente App.jsx importamos  { useRoutes, BrowserRouter } from 'react-router-dom'

* En la carpera src creamos una carpera llamada 'Pages'

* En la carpeta Pages creamos las carpetas con el nombre de las paginas que vamos a tener

    -Mkdir Home
    -cd Home
    touch index.jsx

* Dentro del index, creamos un componente el cual funciona como si fuera la pagina

    import React from 'react'

    function Home() {
        return (
            <div className='bg-yellow-500'>
                Home
            </div>
        )
    }

export default Home

* Mudamos el componente principal a la carpeta que creemos App y en esta ponemos en App.css y el App.jsx

* en main.jsx cuadramos la rur¡ta de nuestro componente principal App