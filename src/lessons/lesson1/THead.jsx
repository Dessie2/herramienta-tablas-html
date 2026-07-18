import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { useNavigate } from 'react-router-dom';
import LessonNavRow from "../../components/LessonNavRow";

export default function THead(){
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
            <div className="content-container flex flex-col flex-1">
            {/* Título Principal */}
            <h1 className="text-4xl font-extrabold text-azul text-center mb-4 -mt-16">
              Etiqueta &lt;thead&gt;
            </h1>

            {/*Contenedor blanco */}
            <div className="bg-blanco w-full h-full rounded-md">
                {/*Contenido de la lección */}
                <div className="flex flex-row">
                    {/*Texto */}
                    <div className="p-20 flex flex-col text-4xl max-w-2xl">
                        <h1>
                            La etiqueta <span className="font-bold text-amarillo">&lt;thead&gt;</span> podria ser confundida
                            o mal interpretada como una versión de th, pero sus funciones son diferentes.
                            <span className="font-bold text-amarillo">&lt;thead&gt;</span> nos ayuda a indicar el encabezado de la tabla,
                            actuando más como un contenedor.
                        </h1>
                    </div>
                     {/*Código */}
                    <div className="text-3xl bg-griscroll text-grisbg w-[500px] h-[500px] pl-10 m-12 rounded-lg">
                        <pre className="whitespace-pre-wrap">
                            {`                                                    
<table border="1">`}
<span className="text-amarillo">{`
<thead>`}</span>{`
  <tr>
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>
   </tr>
`}<span className="text-amarillo">{`</thead>`}</span>{`
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
                <button onClick={() => navigate("/lessons/lesson1/Thead_more")} 
                className="bg-azul hover:bg-guinda text-blanco font-bold py-2 px-8 rounded-md text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-all active:translate-y-1 active:shadow-none">
                  Visualizar más
                </button>
              </div>
            </div>

            <LessonNavRow backTo="/concepts" />
        </main>
       
         

        </div>
        
        
        </div>
        

    )
}