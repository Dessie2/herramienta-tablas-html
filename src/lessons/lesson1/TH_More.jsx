import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function TH_More() {
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
                Etiqueta &lt;th&gt;
                </h1>
            <div className="bg-blanco w-full h-full rounded-md">
                <div className="flex flex-row">
                    <div className="ml-10 mt-10 flex flex-col text-xl p-3 gap-8 max-w-md">
                        <h1>
                            La etiqueta <span className="font-bold text-amarillo">&lt;th&gt;</span> es muy importante a la hora de crear tablas HTML, ya que este elemento sirve para indicar el título de la tabla. Es la celda de cabecera. <br />
                            Se declara comenzando con <br /> <span className="font-bold text-amarillo">&lt;th&gt;</span> <br />
                            Y cierra con <br /> <span className="font-bold text-amarillo">&lt;/th&gt;</span> <br />
                            Se distingue por formatear el texto de las celdas a las cuales de haya atribuido, resaltando y centrando el texto que vaya en las mismas.                       
                        </h1>
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

 