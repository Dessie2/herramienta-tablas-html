import LessonLayout from "../../components/LessonLayout"

export default function TH_More() {
  return (
    <LessonLayout title="Etiqueta &lt;th&gt;" showNav>
      <div className="lesson-content-panel bg-blanco w-full rounded-md shadow-md p-6 sm:p-10 flex flex-col flex-1">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 flex-1 min-w-0">
          <div className="flex flex-col text-base sm:text-lg lg:text-xl gap-4 max-w-md shrink-0">
            <p>
              La etiqueta <span className="font-bold text-amarillo">&lt;th&gt;</span> es muy importante a la hora de crear tablas HTML, ya que este elemento sirve para indicar el título de la tabla. Es la celda de cabecera.
            </p>
            <p>
              Se declara comenzando con <span className="font-bold text-amarillo">&lt;th&gt;</span> y cierra con{" "}
              <span className="font-bold text-amarillo">&lt;/th&gt;</span>.
            </p>
            <p>
              Se distingue por formatear el texto de las celdas a las cuales se haya atribuido, resaltando y centrando el texto que vaya en las mismas.
            </p>
          </div>

          <div className="flex flex-col gap-8 flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
              <div className="p-2 flex flex-col gap-4 flex-1 min-w-0 w-full">
                <h2 className="text-center font-bold">Tabla sin TH</h2>
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
                <h2 className="text-center font-bold">Tabla con TH</h2>
                <table>
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
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-center">
              <iframe
                src="https://res.cloudinary.com/fci62b4m/video/upload/v1785006069/th_rgjsab.mp4"
                title="Video demostrativo th"
                className="w-full max-w-[600px] aspect-video rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
