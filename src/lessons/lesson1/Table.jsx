import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { useNavigate } from 'react-router-dom';
import LessonNavRow from "../../components/LessonNavRow";

export default function Table(){
  const navigate = useNavigate()
    return(
        <div className="min-h-screen flex flex-col font-sans text-slate-800">
        {/*Header*/}
        <Header/>

        {/*Sidebar*/}
        <div className="flex flex-1">
        <Sidebar/>
         {/*Contenido principal*/}
          <main className="flex-1 bg-grisbg flex flex-col p-10">
            <div className="content-container flex flex-col flex-1">
            {/* Título Principal */}
          <h1 className="text-4xl mt-4 font-extrabold text-azul text-center mb-10">
            Etiqueta &lt;table&gt;
          </h1>

           {/*Contenedor principal */}
            <div className="bg-blanco w-full min-h-[600px] rounded-md shadow-md p-10 flex flex-col">

            {/*Contenido de la lección */}
            <div className="flex gap-10">
              {/*Texto */}
              <div className="ml-10 mt-10 flex flex-col text-3xl p-3 gap-8 max-w-md">
              <h1>
                La etiqueta <span className="font-bold text-amarillo">&lt;table&gt;</span> nos permite 
                crear una tabla en HTML. Dentro 
                de ella colocamos las filas <span className="font-bold text-amarillo">&lt;tr&gt;</span> y
                las celdas, que pueden ser 
                encabezados <span className="font-bold text-amarillo">&lt;th&gt;</span> o datos <span className="font-bold text-amarillo">&lt;td&gt;</span>.
                Con estas etiquetas organizamos 
                la información en filas y columnas
                para visualizarla de forma clara 
                y ordenada en una página web.
              </h1>
              </div>

              {/* CÓDIGO */}
            <div className="bg-[#1E1E2E] text-gray-200 rounded-xl p-6 font-mono text-sm col-span-2 relative">
              <pre className="whitespace-pre-wrap">
                {`

  <table>                  
  <tbody>
  <tr>
    <td>Celda A1</td>
    <td>Celda A2</td>
  </tr>
  <tr>
    <td>Celda B1</td>
    <td>Celda B2</td>
  </tr>
</tbody>
</table>
  `}
              </pre>
            </div>

            </div>
             {/*Boton Ver más*/}
              <div className="flex justify-end mt-auto pt-2">
                <button onClick={() => navigate("/lessons/lesson1/Table_more")} 
                className="bg-azul hover:bg-guinda text-blanco font-bold py-2 px-8 rounded-md text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-all active:translate-y-1 active:shadow-none">
                  Visualizar más
                </button>
              </div>
           </div>
           </div>
           <LessonNavRow backTo="/concepts" />
          </main>

        </div>
        
        </div>

    )
}