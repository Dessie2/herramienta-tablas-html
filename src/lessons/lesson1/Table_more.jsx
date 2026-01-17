import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { useNavigate } from 'react-router-dom';
import tabla from "../../assets/images/leccion_1/table_border.svg";

export default function Table_more(){
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
            &lt;table&gt;
          </h1>
          {/*Contenedor principal */}
           <div className="w-[full-20] h-[600px] bg-white ml-20 mr-20">

            {/*Contenido de la lección */}
            <div className="flex flex-row">
                {/*Texto */}
                <div className="ml-10 mt-10 flex flex-col text-xl p-3 gap-8 max-w-md">
                    <h1>
                        La etiqueta table es el pilar para crear la tabla, dentro de ella definiremos
                        filas, columnas, estilos y atributos
                        Se declara comenzando con 
                        <span className="font-bold text-[#D15700]">&lt;table&gt;</span> y cierra con 
                        <span className="font-bold text-[#D19800]">&lt;/table&gt;</span>. <br />
                        Es importante que las característicasde nuestra tabla estén dentro de todo
                        el bloque, de lo contrario, solo aparecerá como texto simple
                        En el video adjunto podemos observar la creación de una tabla. <br />
                        Sin embargo, pareciera no haber nada, pero al
                        usar el atributo <span className="font-bold text-[#D19800]">border</span> se genera un pequeño punto, ya que hacemos el borde mas ancho.
                        Esto sucede porque la tabla ya existe como un elemento, ocupando un espacio, pero al no tener 
                        filas ni columnas es difícil apreciarlo.
                    </h1>
                </div>

                {/*Imagen */}
                <div className="flex flex-col -mt-20 ml-20">
                    {/*Imagen de tabla */}
                    <div>
                        <img src={tabla} alt="Table_border" 
                        className="w-[400px] h-[300px] ml-[200px] object-contain"/>
                    </div>
                    {/*Video de ejemplo */}
                    <div>
                        <iframe src="https://www.youtube.com/embed/kT6UCsMssck"
                        className="w-[600px] h-[400px] -mt-10 ml-20 mb-10 object-contain">

                        </iframe>
                    </div>

                </div>
            </div>

            </div>

        {/*Boton inicio */}
            <div className="-mt-0 flex justify-end mr-6">
            <button  onClick={() => navigate("/concepts")} 
            className="bg-[#1B396A] text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md hover:bg-red-900 transition-colors">
                Volver al menú
            </button>
            </div>

           </main>

        
        </div>
        </div>

    )
}