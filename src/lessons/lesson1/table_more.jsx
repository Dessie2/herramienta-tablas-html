import LessonLayout from "../../components/LessonLayout"
import tabla from "../../assets/images/leccion_1/table_border.svg"

export default function Table_more() {
  return (
    <LessonLayout title="Etiqueta&lt;table&gt;" showNav>
      <div className="lesson-content-panel bg-blanco w-full rounded-md shadow-md p-6 sm:p-10 flex flex-col flex-1">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 flex-1 min-w-0">
          <div className="flex flex-col text-base sm:text-lg lg:text-xl gap-4 max-w-md shrink-0">
            <p>
              La etiqueta table es el pilar para crear la tabla, dentro de ella definiremos
              filas, columnas, estilos y atributos. Se declara comenzando con{" "}
              <span className="font-bold text-amarillo">&lt;table&gt;</span> y cierra con{" "}
              <span className="font-bold text-amarillo">&lt;/table&gt;</span>.
            </p>
            <p>
              Es importante que las características de nuestra tabla estén dentro de todo
              el bloque, de lo contrario, solo aparecerá como texto simple.
              En el video adjunto podemos observar la creación de una tabla.
            </p>
            <p>
              Sin embargo, pareciera no haber nada, pero al usar el atributo{" "}
              <span className="font-bold text-amarillo">border</span> se genera un pequeño punto, ya que hacemos el borde más ancho.
              Esto sucede porque la tabla ya existe como un elemento, ocupando un espacio, pero al no tener
              filas ni columnas es difícil apreciarlo.
            </p>
          </div>

          <div className="flex flex-col gap-8 flex-1 min-w-0 items-center">
            <img
              src={tabla}
              alt="Table border"
              className="w-full max-w-[400px] h-auto object-contain"
            />

            <div className="flex justify-center w-full">
              <iframe
                src="https://res.cloudinary.com/fci62b4m/video/upload/v1785006068/table_oludmj.mp4"
                title="Video demostrativo table"
                className="w-full max-w-[600px] aspect-video rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
