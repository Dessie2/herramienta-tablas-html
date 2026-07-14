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
                <h1 className="text-4xl font-extrabold text-azul text-center mb-4 -mt-16">
                Etiqueta &lt;caption&gt;
                </h1>
            <div className="bg-blanco w-full h-full rounded-md flex flex-col p-10">
                <div className="flex flex-row gap-10">
                    <div className="ml-10 mt-10 flex flex-col text-xl p-3 gap-8 max-w-md">
                        <h1>
                            La etiqueta <span className="font-bold text-amarillo">&lt;caption&gt;</span> nos sirve para indicar el título de la tabla<br />
                            Se declara comenzando con <br /> <span className="font-bold text-amarillo">&lt;caption&gt;</span> <br />
                            Y cierra con <br /> <span className="font-bold text-amarillo">&lt;/caption&gt;</span> <br />    
                            Funciona como el titular oficial de la tabla, situándose normalmente encima de esta para explicar el propósito de los datos presentados.
                            Siempre y exclusivamente debe ir dentro de la etiqueta <span className="font-bold text-amarillo">&lt;table&gt;</span> como primer hijo
                            solo puede existir una, y no es obligatorio, 
                            pero recomendado para mejorar la accesibilidad y comprensión de la tabla.
                        </h1>
                    </div>

            {/* Contenedor ejemplos*/}     
            <div className="flex flex-col gap-10 flex-1">
            {/* Contenedor de las dos tablas*/}
                <div className="flex flex-row gap-4">
                <div className="p-2 flex flex-col gap-4 flex-1">
                    <h1 className="text-center font-bold">Tabla sin caption</h1>
                       <table>
                            <tr>
                                <td className="border-2">Columna 1</td>
                                <td className="border-2">Columna 2</td>
                                <td className="border-2">Columna 3</td>
                            </tr>

                            <tr>
                                <td className="border-2">Celda 1</td>
                                <td className="border-2">Celda 2</td>
                                <td className="border-2">Celda 3</td>
                            </tr>
                        </table>
                </div>

                <div className="p-2 flex flex-col gap-4 flex-1">
                    
                    <h1 className="text-center font-bold">Tabla con caption</h1>
                    <table>
                        <caption>Ejemplo de tablas HTML</caption>
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

            </main>
        </div>


        
    </div>
  )
}

 