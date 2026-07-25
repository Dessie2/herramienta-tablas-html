import LessonLayout from "../../components/LessonLayout"

export default function TFoot_more() {
  return (
    <LessonLayout title="Etiqueta &lt;tfoot&gt;" showNav>
      <div className="lesson-content-panel bg-blanco w-full min-h-[600px] rounded-md shadow-md p-6 sm:p-10 flex flex-col flex-1">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 flex-1 min-w-0">
          <div className="flex flex-col text-base sm:text-lg lg:text-xl gap-4 max-w-md shrink-0">
            <p>
              La etiqueta <span className="font-bold text-amarillo">&lt;tfoot&gt;</span> nos sirve para indicar el pie de la tabla.
            </p>
            <p>
              Se declara comenzando con <span className="font-bold text-amarillo">&lt;tfoot&gt;</span> y cierra con{" "}
              <span className="font-bold text-amarillo">&lt;/tfoot&gt;</span>.
            </p>
            <p>
              Su función principal es agrupar filas que contienen resúmenes, totales o información final.
              Es especialmente útil para mostrar sumatorias o conclusiones de los datos presentados; además,
              al igual que el encabezado, ayuda a la accesibilidad y a que los datos de resumen se mantengan
              presentes incluso si la tabla se imprime en varias páginas.
            </p>
          </div>

          <div className="flex flex-col gap-8 flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
              <div className="p-2 flex flex-col gap-4 flex-1 min-w-[200px]">
                <table>
                  <caption className="font-bold mb-2">Tabla sin tfoot</caption>
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

              <div className="p-2 flex flex-col gap-4 flex-1 min-w-[200px]">
                <table>
                  <caption className="font-bold mb-2">Tabla con tfoot</caption>
                  <tbody>
                    <tr>
                      <th className="border-2 px-2">Columna 1</th>
                      <th className="border-2 px-2">Columna 2</th>
                      <th className="border-2 px-2">Columna 3</th>
                    </tr>
                    <tr>
                      <td className="border-2 px-2">Celda 1</td>
                      <td className="border-2 px-2">Celda 2</td>
                      <td className="border-2 px-2">Celda 3</td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2">Celda 1-1</td>
                      <td className="border-2 px-2">Celda 2-1</td>
                      <td className="border-2 px-2">Celda 3-1</td>
                    </tr>
                    <tfoot className="bg-blue-500">
                      <tr>
                        <td className="border-2 px-2 font-bold">Total</td>
                        <td className="border-2 px-2 font-bold">15</td>
                        <td className="border-2 px-2 font-bold">15</td>
                      </tr>
                    </tfoot>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-center">
              <iframe
                src="https://res.cloudinary.com/fci62b4m/video/upload/v1785006075/tfoot_hxnudw.mp4"
                title="Video demostrativo tfoot"
                className="w-full max-w-[600px] aspect-video rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
