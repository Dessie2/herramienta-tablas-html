import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { useNavigate } from 'react-router-dom';

export default function Thead_more() {
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
                Etiqueta &lt;tr&gt;
                </h1>
            <div className="bg-blanco w-full h-full rounded-md flex flex-col p-10">
                <div className="flex flex-row gap-10">
                    <div className="ml-10 mt-10 flex flex-col text-xl p-3 gap-8 max-w-md">
                        <h1>
                            La etiqueta <span className="font-bold text-amarillo">&lt;tr&gt;</span> nos sirve para crear las filas de la tabla<br />
                            Se declara comenzando con <br /> <span className="font-bold text-amarillo">&lt;tr&gt;</span> <br />
                            Y cierra con <br /> <span className="font-bold text-amarillo">&lt;/tr&gt;</span> <br />    
                            Estas filas pueden contener tanto celdas de encabezado, usando <span className="font-bold text-amarillo">&lt;th&gt;</span>, 
                            como celdas de datos, usando <span className="font-bold text-amarillo">&lt;td&gt;</span>. 
                            Es importante destacar que cada fila debe estar correctamente cerrada para mantener la estructura de la tabla.              
                        </h1>
                    </div>

            {/* Contenedor ejemplos*/}     
            <div className="flex flex-col gap-10 flex-1">
            {/* Contenedor tabla*/}
                <div className="p-2 flex flex-col gap-4 flex-1">
                    <h1 className="text-center font-bold">Tabla ejemplo</h1>
                    <table>
                        <tr className="bg-blue-500">
                            <th className="border-2">Columna 1(th)</th>
                            <th className="border-2">Columna 2(th)</th>
                            <th className="border-2">Columna 3(th)</th>
                        </tr>      

                        <tr className="bg-red-500">
                            <td className="border-2">Celda 1(td)</td>
                            <td className="border-2">Celda 2(td)</td>
                            <td className="border-2">Celda 3(td)</td>
                        </tr>
                    </table>
                    <p className="text-center ">No se nota a primera vista, es en el código donde se entiende la jerarquía</p>
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

 