import LessonLayout from "../../components/lessonLayout"
import LessonVideo from "../../components/lessonVideo"

export default function Thead_more() {
  return (
    <LessonLayout title="Etiqueta &lt;thead&gt;" showNav>
      <div className="lesson-content-panel bg-blanco w-full rounded-md shadow-md p-6 sm:p-10 flex flex-col flex-1">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 flex-1 min-w-0">
          <div className="flex flex-col text-base sm:text-lg lg:text-xl gap-4 max-w-md shrink-0">
            <p>
              La etiqueta <span className="font-bold text-amarillo">&lt;thead&gt;</span> nos ayuda a agrupar filas que
              representan encabezados de columnas o información de encabezado en la parte superior de la tabla.
            </p>
            <p>
              Se declara comenzando con <span className="font-bold text-amarillo">&lt;thead&gt;</span> y cierra con{" "}
              <span className="font-bold text-amarillo">&lt;/thead&gt;</span>.
            </p>
            <p>
              Puede que la diferencia visual no sea notoria a primer vista, pero si aplicamos estilos como un fondo
              diferente, podemos notar la diferencia entre usar thead o no. Al actuar como contenedor, permite aplicar
              estilos a todo el bloque.
            </p>
          </div>

          <div className="flex flex-col gap-8 flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
              <div className="p-2 flex flex-col gap-4 flex-1 min-w-0 w-full">
                <h2 className="text-center font-bold">Tabla sin thead</h2>
                <table>
                  <tbody>
                    <tr>
                      <td className="border-2 px-2">Columna 1</td>
                      <td className="border-2 px-2">Columna 2</td>
                      <td className="border-2 px-2">Columna 3</td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2">Celda 1</td>
                      <td className="border-2 px-2">Celda 2</td>
                      <td className="border-2 px-2">Celda 3</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-2 flex flex-col gap-4 flex-1 min-w-0 w-full">
                <h2 className="text-center font-bold">Tabla con thead</h2>
                <table>
                  <thead className="bg-blue-500">
                    <tr>
                      <th className="border-2 px-2">Columna 1</th>
                      <th className="border-2 px-2">Columna 2</th>
                      <th className="border-2 px-2">Columna 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2 px-2">Celda 1</td>
                      <td className="border-2 px-2">Celda 2</td>
                      <td className="border-2 px-2">Celda 3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <LessonVideo
              src="https://res.cloudinary.com/fci62b4m/video/upload/v1785006075/thead_rcjzqe.mp4"
              title="Video demostrativo thead"
            />
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
