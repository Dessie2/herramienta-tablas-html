import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { useNavigate } from 'react-router-dom';

export default function TD(){
  const navigate = useNavigate()
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
              Etiqueta &lt;td&gt;
            </h1>

            {/*Contenedor blanco */}
            <div className="bg-blanco w-full h-full rounded-md">
                {/*Contenido de la lección */}
                <div className="flex flex-row">
                    {/*Texto */}
                    <div className="p-20 flex flex-col text-4xl max-w-2xl">
                        <h1>
                            La etiqueta <span className="font-bold text-amarillo">&lt;td&gt;</span> es importante para la creación de tablas,
                            ya que representa las celdas de datos en una fila, al poner varias seguidas se forman las columnas. Es diminutivo de Table Data.
                        </h1>
                    </div>
                     {/*Código */}
                    <div className="text-2xl bg-griscroll text-grisbg w-[500px] h-[500px] pl-10 m-12 rounded-lg">
                        <pre className="whitespace-pre-wrap">
                            {`                                                    
<table border="1">
<thead>
  <tr>
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>
   </tr>
</thead>
<tbody>
   <tr>
    `}<span className="text-amarillo">{`<td>`}</span>{`Celda A1`}<span className="text-amarillo">{`</td>`}</span>{`
    `}<span className="text-amarillo">{`<td>`}</span>{`Celda A2`}<span className="text-amarillo">{`</td>`}</span>{`
  </tr>
</tbody>
 </table>`}
                        </pre>
                    </div>
                </div>

            </div>
            {/*botón ver más */}
            <div className="flex justify-end mt-auto pt-2">
                <button onClick={() => navigate("/lessons/lesson1/TD_more")} 
                className="bg-azul hover:bg-guinda text-blanco font-bold py-2 px-8 rounded-md text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-all active:translate-y-1 active:shadow-none">
                  Visualizar más
                </button>
              </div>

        </main>
       
         

        </div>
        
        
        </div>
        

    )
}