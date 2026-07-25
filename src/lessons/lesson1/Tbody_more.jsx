import LessonLayout from "../../components/LessonLayout"

export default function Tbody_more() {
  return (
    <LessonLayout title="Etiqueta &lt;tbody&gt;" showNav>
      <div className="lesson-content-panel bg-blanco w-full min-h-[600px] rounded-md shadow-md p-6 sm:p-10 flex flex-col flex-1">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 flex-1 min-w-0">
          <div className="flex flex-col text-base sm:text-lg lg:text-xl gap-4 max-w-md shrink-0">
            <p>
              La etiqueta <span className="font-bold text-amarillo">&lt;tbody&gt;</span> nos ayuda a agrupar filas y columnas de información en las tablas.
            </p>
            <p>
              Se declara comenzando con <span className="font-bold text-amarillo">&lt;tbody&gt;</span> y cierra con{" "}
              <span className="font-bold text-amarillo">&lt;/tbody&gt;</span>.
            </p>
            <p>
              Es etiqueta hermana de <span className="font-bold text-amarillo">&lt;thead&gt;</span>, ya que cumple con la misma función de contenedor, pero
              en este caso para el bloque de filas de contenido. Su uso no es obligatorio, pero
              recomendado para mejor estructura y diferenciar información principal de encabezados o pies de página.
            </p>
          </div>

          <div className="flex flex-col gap-8 flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
              <div className="p-2 flex flex-col gap-4 flex-1 min-w-[200px]">
                <h2 className="text-center font-bold">Tabla sin tbody</h2>
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
                    <tr>
                      <td className="border-2 px-2">Celda 1</td>
                      <td className="border-2 px-2">Celda 2</td>
                      <td className="border-2 px-2">Celda 3</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-2 flex flex-col gap-4 flex-1 min-w-[200px]">
                <h2 className="text-center font-bold">Tabla con tbody</h2>
                <table>
                  <thead>
                    <tr>
                      <th className="border-2 px-2">Columna 1</th>
                      <th className="border-2 px-2">Columna 2</th>
                      <th className="border-2 px-2">Columna 3</th>
                    </tr>
                  </thead>
                  <tbody className="bg-blue-500">
                    <tr>
                      <td className="border-2 px-2">Celda 1</td>
                      <td className="border-2 px-2">Celda 2</td>
                      <td className="border-2 px-2">Celda 3</td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2">Celda 1</td>
                      <td className="border-2 px-2">Celda 2</td>
                      <td className="border-2 px-2">Celda 3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-center">
              <iframe
                src="https://res.cloudinary.com/fci62b4m/video/upload/v1785006071/tbody_v0xdgr.mp4"
                title="Video demostrativo tbody"
                className="w-full max-w-[600px] aspect-video rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
