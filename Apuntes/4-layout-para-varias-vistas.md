# Layout

* se crean una carpeta dentro de src con el nombre Layout y se crea un nuevo componente con los estilos que tendra cada pagina

    /* eslint-disable react/prop-types */

    const Layout = ({ children } )=> {
        return(
            <div className="flex flex-col items-center mt-20">
                {children}
            </div>
        )
    }

    export {Layout}

* se exporta y y se le añade para cada una de las paginas que seguiran estas vistas

* se incorpora como etiqueta padre

    import { Layout } from "../../Components/Layout"

    function Home() {
        return (
            <Layout>
                <div className='bg-yellow-500'>
                    Home
                </div>
            </Layout>
        )
    }

    export default Home
