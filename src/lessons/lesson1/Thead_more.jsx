import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import LessonNavRow from "../../components/LessonNavRow"

export default function Thead_more() {
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
                Etiqueta &lt;thead&gt;
                </h1>
            <div className="bg-blanco w-full h-full rounded-md flex flex-col p-10">
                <div className="flex flex-row gap-10">
                    <div className="ml-10 mt-10 flex flex-col text-xl p-3 gap-8 max-w-md">
                        <h1>
                            La etiqueta <span className="font-bold text-amarillo">&lt;thead&gt;</span> nos ayuda a agrupar filas que
                            representan encabezados de columnas o informacion de encabezado en la parte superior de la tabla.<br />
                            Se declara comenzando con <br /> <span className="font-bold text-amarillo">&lt;thead&gt;</span> <br />
                            Y cierra con <br /> <span className="font-bold text-amarillo">&lt;/thead&gt;</span> <br />    
                            Puede que la diferencia visual no sea notoria a primer vista, pero si aplicamos estilos como un fondo
                            diferente, podemos notar la diferencia entre usar thead o no. Al actuar como contenedor, permite aplicar
                            estilos a todo el bloque.               
                        </h1>
                    </div>

            {/* Contenedor ejemplos*/}     
            <div className="flex flex-col gap-10 flex-1">
            {/* Contenedor de las dos tablas*/}
            <div className="flex flex-row gap-4">
                <div className="p-2 flex flex-col gap-4 flex-1">
                    <h1 className="text-center font-bold">Tabla sin thead</h1>
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
                    <h1 className="text-center font-bold">Tabla con thead</h1>
                    <table>
                        <thead className="bg-blue-500">
                            <tr>
                            <th className="border-2">Columna 1</th>
                            <th className="border-2">Columna 2</th>
                            <th className="border-2">Columna 3</th>
                            </tr>
                        </thead>      

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

 