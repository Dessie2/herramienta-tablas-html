import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function TH(){
  const navigate = useNavigate()
  const [zoom, setZoom] = useState(false);
    return(
        <div className="h-screen flex flex-col">
       <div>
        {/*Header*/}
        <Header/>
        </div>
        {/*Sidebar*/}
        <div className="flex flex-1">
        <Sidebar/>

        {/*Contenido principal*/}
        <main className="bg-grisbg flex-1 flex flex-col p-20">
            {/* Título Principal */}
            <h1 className="text-4xl font-extrabold text-azul text-center mb-4 -mt-16">
              Etiqueta &lt;th&gt;
            </h1>

            {/*Contenedor blanco */}
            <div className="bg-blanco w-full h-full rounded-md">
                {/*Contenido de la lección */}
                <div className="flex flex-row">
                    {/*Texto */}
                    <div className="p-20 flex flex-col text-4xl max-w-2xl">
                        <h1>
                            La etiqueta <span className="font-bold text-amarillo">&lt;th&gt;</span> nos permite indicar los títulos o encabezados de las celdas en las tablas HTML.
                            Es una gran ayuda visual ya que es más fácil identificar las partes de la tabla.
                        </h1>
                    </div>
                     {/*Código */}
                    <div className="text-3xl bg-griscroll text-grisbg w-[500px] h-[500px] p-10 m-12 rounded-lg">
                        <pre className="whitespace-pre-wrap">
                            {`                         
<table border="1">
  <tr>`} <span className="text-amarillo">{`
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>`}
    </span> {`
   </tr>
   <tr>
    <td>Celda A1</td>
    <td>Celda A2</td>
   </tr>
 </table>`}
                        </pre>
                        

                    </div>
                    


                </div>

            </div>
            {/*botón ver más */}
            <div className="flex justify-end mt-auto pt-2">
                <button onClick={() => navigate("/lessons/lesson1/TH_More")} 
                className="bg-azul hover:bg-guinda text-blanco font-bold py-2 px-8 rounded-md text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-all active:translate-y-1 active:shadow-none">
                  Visualizar más
                </button>
              </div>

        </main>
       
         

        </div>
        
        
        </div>
        

    )
}