import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import LessonNavRow from "../../components/LessonNavRow"
import tabla from "../../assets/images/leccion_1/table_border.svg";

export default function Table_more(){
    return(
        <div>
        {/*Header*/}
        <Header/>

        {/*Sidebar*/}
        <div className="flex flex-1 min-w-0">
        <Sidebar/>
         {/*Contenido principal*/}
          <main className="flex-1 min-w-0 bg-grisbg p-4 sm:p-6 md:p-10 flex flex-col overflow-x-hidden">
            <div className="content-container flex flex-col">
            {/* Título Principal */}
          <h1 className="text-4xl mt-4 font-extrabold text-azul text-center mb-10">
            &lt;table&gt;
          </h1>
          {/*Contenedor principal */}
           <div className="bg-blanco w-full min-h-[600px] rounded-md p-10">

            {/*Contenido de la lección */}
            <div className="flex flex-row">
                {/*Texto */}
                <div className="ml-10 mt-10 flex flex-col text-xl p-3 gap-8 max-w-md">
                    <h1>
                        La etiqueta table es el pilar para crear la tabla, dentro de ella definiremos
                        filas, columnas, estilos y atributos
                        Se declara comenzando con 
                        <span className="font-bold text-amarillo">&lt;table&gt;</span> y cierra con 
                        <span className="font-bold text-amarillo">&lt;/table&gt;</span>. <br />
                        Es importante que las característicasde nuestra tabla estén dentro de todo
                        el bloque, de lo contrario, solo aparecerá como texto simple
                        En el video adjunto podemos observar la creación de una tabla. <br />
                        Sin embargo, pareciera no haber nada, pero al
                        usar el atributo <span className="font-bold text-amarillo">border</span> se genera un pequeño punto, ya que hacemos el borde mas ancho.
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
                    <div className="flex justify-center">
                        <iframe src="https://www.youtube.com/embed/kT6UCsMssck"
                        className="w-[600px] h-[400px] -mt-10 mb-10">

                        </iframe>
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
