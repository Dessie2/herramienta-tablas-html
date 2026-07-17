import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { useNavigate } from 'react-router-dom';

export default function TFoot_more() {
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
                Etiqueta &lt;tfoot&gt;
                </h1>
            <div className="bg-blanco w-full h-full rounded-md flex flex-col p-10">
                <div className="flex flex-row gap-10">
                    <div className="ml-10 mt-10 flex flex-col text-xl p-3 gap-8 max-w-md">
                        <h1>
                            La etiqueta <span className="font-bold text-amarillo">&lt;tfoot&gt;</span> nos sirve para indicar el pie de la tabla<br />
                            Se declara comenzando con <br /> <span className="font-bold text-amarillo">&lt;tfoot&gt;</span> <br />
                            Y cierra con <br /> <span className="font-bold text-amarillo">&lt;/tfoot&gt;</span> <br />    
                            Su función principal es agrupar filas que contienen resúmenes, totales o información final. 
                            Es especialmente útil para mostrar sumatorias o conclusiones de los datos presentados; además, 
                            al igual que el encabezado, ayuda a la accesibilidad y a que los datos de resumen se mantengan
                            presentes incluso si la tabla se imprime en varias páginas."
                        </h1>
                    </div>

            {/* Contenedor ejemplos*/}     
            <div className="flex flex-col gap-10 flex-1">
            {/* Contenedor de las dos tablas*/}
                <div className="flex flex-row gap-4">
                <div className="p-2 flex flex-col gap-4 flex-1">
                       <table>
                        <caption className="font-bold mb-2">Tabla sin tfoot</caption>
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
                    <table>
                        <caption className="font-bold mb-2">Tabla con tfoot</caption>
                        <tr>
                            <th className="border-2">Columna 1</th>
                            <th className="border-2">Columna 2</th>
                            <th className="border-2">Columna 3</th>
                        </tr>      

                        <tr>
                            <td className="border-2">Celda 1</td>
                            <td className="border-2">Celda 2</td>
                            <td className="border-2">Celda 3</td>
                        </tr>
                        <tr>
                            <td className="border-2">Celda 1-1</td>
                            <td className="border-2">Celda 2-1</td>
                            <td className="border-2">Celda 3-1</td>
                        </tr>

                        <tfoot className="bg-blue-500">
                            <tr>
                                <td className="border-2 font-bold">Total</td>
                                <td className="border-2 font-bold">15</td>
                                <td className="border-2 font-bold">15</td>
                            </tr>
                        </tfoot>
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
            </div>

            </main>
        </div>


        
    </div>
  )
}

 