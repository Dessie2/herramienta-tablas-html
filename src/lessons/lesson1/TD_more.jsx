import LessonLayout from "../../components/LessonLayout"

export default function TD_more() {
  return (
    <LessonLayout title="Etiqueta &lt;td&gt;" showNav>
      <div className="lesson-content-panel bg-blanco w-full rounded-md shadow-md p-6 sm:p-10 flex flex-col flex-1">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 flex-1 min-w-0">
          <div className="flex flex-col text-base sm:text-lg lg:text-xl gap-4 max-w-md shrink-0">
            <p>
              La etiqueta <span className="font-bold text-amarillo">&lt;td&gt;</span> nos ayuda a insertar datos en la tabla.
            </p>
            <p>
              Se declara comenzando con <span className="font-bold text-amarillo">&lt;td&gt;</span> y cierra con{" "}
              <span className="font-bold text-amarillo">&lt;/td&gt;</span>.
            </p>
            <p>
              Es el componente básico para almacenar información dentro de la estructura de filas y columnas de una tabla.
              Por defecto el texto se alinea a la izquierda, pero se pueden aplicar estilos para modificar su apariencia.
              Aunque realmente no se considera como columna, poner una debajo de la otra, forma una columna.
            </p>
          </div>

          <div className="flex flex-col gap-8 flex-1 min-w-0">
            <div className="p-2 flex flex-col gap-4">
              <h2 className="text-center font-bold">Tabla ejemplo</h2>
              <table className="mx-auto">
                <tbody>
                  <tr>
                    <th className="border-2 px-2">Columna 1</th>
                    <th className="border-2 px-2">Columna 2</th>
                    <th className="border-2 px-2">Columna 3</th>
                  </tr>
                  <tr className="bg-red-500">
                    <td className="border-2 px-2">Celda 1(td)</td>
                    <td className="border-2 px-2">Celda 2(td)</td>
                    <td className="border-2 px-2">Celda 3(td)</td>
                  </tr>
                  <tr className="bg-red-500">
                    <td className="border-2 px-2">Celda 1-1(td)</td>
                    <td className="border-2 px-2">Celda 2-1(td)</td>
                    <td className="border-2 px-2">Celda 3-1(td)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-center">
              <iframe
                src="https://res.cloudinary.com/fci62b4m/video/upload/v1785006077/td_jfcagx.mp4"
                title="Video demostrativo td"
                className="w-full max-w-[600px] aspect-video rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
