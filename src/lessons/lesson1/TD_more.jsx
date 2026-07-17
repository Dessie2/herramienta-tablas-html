import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { useNavigate } from 'react-router-dom';

export default function TD_more() {
  const navigate = useNavigate()
  return (
    <div className="h-screen flex flex-col">
        <div>
        <Header/>
        </div> 
        <div className="flex flex-1">
            <Sidebar/>
            
        <main className="bg-grisbg flex-1 flex flex-col p-20">
            <div className="content-container flex flex-col flex-1">
                <h1 className="text-4xl font-extrabold text-azul text-center mb-4 -mt-16">
                Etiqueta &lt;td&gt;
                </h1>
            <div className="bg-blanco w-full h-full rounded-md flex flex-col p-10">
                <div className="flex flex-row gap-10">
                    <div className="ml-10 mt-10 flex flex-col text-xl p-3 gap-8 max-w-md">
                        <h1>
                            La etiqueta <span className="font-bold text-amarillo">&lt;td&gt;</span> nos ayuda a insertar datos en la tabla.<br />
                            Se declara comenzando con <br /> <span className="font-bold text-amarillo">&lt;td&gt;</span> <br />
                            Y cierra con <br /> <span className="font-bold text-amarillo">&lt;/td&gt;</span> <br />    
                            Es el componente básico para almacenar información dentro de la estructura de filas y columnas de una tabla. 
                            Por defecto el texto se alinea a la izquierda, pero se pueden aplicar estilos para modificar su apariencia. 
                            Aunque realmente no se considera como columna, poner una debajo de la otra, forma una columna. 
                        </h1>
                    </div>

            {/* Contenedor ejemplos*/}     
            <div className="flex flex-col gap-10 flex-1">
            {/* Contenedor tabla*/}
                <div className="p-2 flex flex-col gap-4 flex-1">
                    <h1 className="text-center font-bold">Tabla ejemplo</h1>
                    <table>
                        <tr>
                            <th className="border-2">Columna 1</th>
                            <th className="border-2">Columna 2</th>
                            <th className="border-2">Columna 3</th>
                        </tr>      

                        <tr className="bg-red-500">
                            <td className="border-2">Celda 1(td)</td>
                            <td className="border-2">Celda 2(td)</td>
                            <td className="border-2">Celda 3(td)</td>
                        </tr>
                        <tr className="bg-red-500">
                            <td className="border-2">Celda 1-1(td)</td>
                            <td className="border-2">Celda 2-1(td)</td>
                            <td className="border-2">Celda 3-1(td)</td>
                        </tr>
                    </table>
                </div>

            {/* Video*/}
            <div className="flex justify-center">
                <iframe 
                    src="https://www.youtube.com/embed/kT6UCsMssck"
                    className="w-full max-w-[600px] aspect-video"
                ></iframe>
            </div>
        </div>

    </div>
                
            </div>

            {/*Boton inicio */}
            <div className="flex justify-end mr-6 m-6">
            <button  onClick={() => navigate("/concepts")} 
            className="bg-azul text-blanco px-6 py-2 rounded-lg font-bold text-sm shadow-md hover:bg-guinda transition-colors">
                Volver al menú
            </button>
            </div>
            </div>

            </main>
        </div>


        
    </div>
  )
}

 