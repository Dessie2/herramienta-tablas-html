import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import tabla from "../../assets/images/leccion_1/Ejemplo_table.svg";
import { useNavigate } from 'react-router-dom';

export default function Table(){
  const navigate = useNavigate()
    return(
        <div>
        {/*Header*/}
        <Header/>

        {/*Sidebar*/}
        <div className="flex flex-1">
        <Sidebar/>
         {/*Contenido principal*/}
          <main className="flex-1 bg-gray-100">
            {/* Título Principal */}
          <h1 className="text-4xl mt-2 font-extrabold text-blue-900 text-center mb-10">
            Definición y estructura básica de las <br /> Tablas en HTML
          </h1>

           {/*Contenedor principal */}
           <div className="w-[full-20] h-[600px] bg-white ml-20 mr-20">

            {/*Contenido de la lección */}
            <div className="flex flex-row">
              {/*Texto */}
              <div className="ml-10 mt-10 flex flex-col text-3xl p-3 gap-8 max-w-md">
              <h1>
                La etiqueta <span className="font-bold text-yellow-600 ">&lt;table&gt;</span> nos permite 
                crear una tabla en HTML. Dentro 
                de ella colocamos las filas <span className="font-bold text-yellow-600 ">&lt;tr&gt;</span> y
                las celdas, que pueden ser 
                encabezados <span className="font-bold text-yellow-600 ">&lt;th&gt;</span> o datos <span className="font-bold text-yellow-600 ">&lt;td&gt;</span>.
                Con estas etiquetas organizamos 
                la información en filas y columnas
                para visualizarla de forma clara 
                y ordenada en una página web.
              </h1>
              </div>

              {/*Imagen */}
              <div>
                <img src={tabla} alt="Ejemplo_Table"  className="w-[800px] h-[530px] mt-10 ml-10 object-contain"/>
              </div>

               {/*Boton Ver más*/}
              <div className="justify-end items-end mr-[10px] mt-[500px]">
                <button onClick={() => navigate("/lessons/lesson1/Table_more")} 
                className="bg-[#1B396A] hover:bg-[#611232] text-white font-bold py-3 px-10 rounded-md text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-all active:translate-y-1 active:shadow-none">
                  Visualizar más
                </button>
              </div>

            </div>

            {/*Boton inicio */}
              <div className="justify-start mt-[-50px] ml-10 mb-10">
                <button  onClick={() => navigate("/concepts")} 
                className="bg-[#1B396A] hover:bg-[#611232] text-white font-bold py-3 px-10 rounded-md text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-all active:translate-y-1 active:shadow-none">
                  Volver al inicio
                </button>
              </div>

           
           </div>

          </main>

        </div>
        
        </div>

    )
}