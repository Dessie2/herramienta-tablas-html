import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import LessonNavRow from "../../components/LessonNavRow"

export default function TH_More() {
  return (
    <div className="h-screen flex flex-col">
        <div>
        <Header/>
        </div> 
        <div className="flex flex-1">
            <Sidebar/>
            
        <main className="bg-grisbg flex-1 min-w-0 flex flex-col p-4 sm:p-6 md:p-10 overflow-x-hidden">
            <div className="content-container flex flex-col flex-1">
                <h1 className="text-4xl font-extrabold text-azul text-center mb-4 -mt-16">
                Etiqueta &lt;th&gt;
                </h1>
            <div className="bg-blanco w-full h-full rounded-md flex flex-col p-10">
                <div className="flex flex-row gap-10">
                    <div className="ml-10 mt-10 flex flex-col text-xl p-3 gap-8 max-w-md">
                        <h1>
                            La etiqueta <span className="font-bold text-amarillo">&lt;th&gt;</span> es muy importante a la hora de crear tablas HTML, ya que este elemento sirve para indicar el título de la tabla. Es la celda de cabecera. <br />
                            Se declara comenzando con <br /> <span className="font-bold text-amarillo">&lt;th&gt;</span> <br />
                            Y cierra con <br /> <span className="font-bold text-amarillo">&lt;/th&gt;</span> <br />
                            Se distingue por formatear el texto de las celdas a las cuales de haya atribuido, resaltando y centrando el texto que vaya en las mismas.                       
                        </h1>
                    </div>

            {/* Contenedor ejemplos*/}     
            <div className="flex flex-col gap-10 flex-1">
            {/* Contenedor de las dos tablas*/}
            <div className="flex flex-row gap-4">
                <div className="p-2 flex flex-col gap-4 flex-1">
                    <h1 className="text-center font-bold">Tabla sin TH</h1>
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
                    <h1 className="text-center font-bold">Tabla con TH</h1>
                    <table>
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

            </div>

            {/*Boton inicio */}
            <LessonNavRow backTo="/concepts" />

            </main>
        </div>


        
    </div>
  )
}

 