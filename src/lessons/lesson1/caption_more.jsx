import LessonLayout from "../../components/lessonLayout"

export default function Caption_more() {
  return (
    <LessonLayout title="Etiqueta &lt;caption&gt;" showNav backClassName="-ml-5">
      <div className="lesson-content-panel bg-blanco w-full rounded-md shadow-md p-6 sm:p-10">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 min-w-0">
          <div className="flex flex-col text-base sm:text-lg lg:text-xl gap-4 w-full xl:max-w-md xl:shrink-0">
            <p>
              La etiqueta <span className="font-bold text-amarillo">&lt;caption&gt;</span> nos sirve para indicar el título de la tabla.
            </p>
            <p>
              Se declara comenzando con <span className="font-bold text-amarillo">&lt;caption&gt;</span> y cierra con{" "}
              <span className="font-bold text-amarillo">&lt;/caption&gt;</span>.
            </p>
            <p>
              Funciona como el titular oficial de la tabla, situándose normalmente encima de esta para explicar el propósito de los datos presentados.
              Siempre y exclusivamente debe ir dentro de la etiqueta{" "}
              <span className="font-bold text-amarillo">&lt;table&gt;</span> como primer hijo.
              Solo puede existir una, y no es obligatorio, pero recomendado para mejorar la accesibilidad y comprensión de la tabla.
            </p>
          </div>

          <div className="flex flex-col gap-8 flex-1 min-w-0 w-full">
            <div className="flex flex-col lg:flex-row gap-6 w-full">
              <div className="p-2 flex flex-col gap-4 flex-1 min-w-0 overflow-x-auto">
                <h2 className="text-center font-bold">Tabla sin caption</h2>
                <table className="mx-auto w-full max-w-xs">
                  <tbody>
                    <tr>
                      <td className="border-2 px-2 py-1 text-sm">Columna 1</td>
                      <td className="border-2 px-2 py-1 text-sm">Columna 2</td>
                      <td className="border-2 px-2 py-1 text-sm">Columna 3</td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-1 text-sm">Celda 1</td>
                      <td className="border-2 px-2 py-1 text-sm">Celda 2</td>
                      <td className="border-2 px-2 py-1 text-sm">Celda 3</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-2 flex flex-col gap-4 flex-1 min-w-0 overflow-x-auto">
                <h2 className="text-center font-bold">Tabla con caption</h2>
                <table className="mx-auto w-full max-w-xs">
                  <caption className="caption-bottom mb-2 text-sm font-semibold">
                    Ejemplo de tablas HTML
                  </caption>
                  <tbody>
                    <tr>
                      <th className="border-2 px-2 py-1 text-sm">Columna 1</th>
                      <th className="border-2 px-2 py-1 text-sm">Columna 2</th>
                      <th className="border-2 px-2 py-1 text-sm">Columna 3</th>
                    </tr>
                    <tr className="bg-red-500">
                      <td className="border-2 px-2 py-1 text-sm">Celda 1(td)</td>
                      <td className="border-2 px-2 py-1 text-sm">Celda 2(td)</td>
                      <td className="border-2 px-2 py-1 text-sm">Celda 3(td)</td>
                    </tr>
                    <tr className="bg-red-500">
                      <td className="border-2 px-2 py-1 text-sm">Celda 1-1(td)</td>
                      <td className="border-2 px-2 py-1 text-sm">Celda 2-1(td)</td>
                      <td className="border-2 px-2 py-1 text-sm">Celda 3-1(td)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-center w-full">
              <iframe
                src="https://res.cloudinary.com/fci62b4m/video/upload/v1785006074/caption_njbnsw.mp4"
                title="Video demostrativo caption"
                className="w-full max-w-[600px] aspect-video rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
