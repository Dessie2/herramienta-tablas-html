import LessonLayout from "../../components/lessonLayout"

export default function TR_more() {
  return (
    <LessonLayout title="Etiqueta &lt;tr&gt;" showNav>
      <div className="lesson-content-panel bg-blanco w-full rounded-md shadow-md p-6 sm:p-10">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 min-w-0">
          <div className="flex flex-col text-base sm:text-lg lg:text-xl gap-4 w-full xl:max-w-md xl:shrink-0">
            <p>
              La etiqueta <span className="font-bold text-amarillo">&lt;tr&gt;</span> nos sirve para crear las filas de la tabla.
            </p>
            <p>
              Se declara comenzando con <span className="font-bold text-amarillo">&lt;tr&gt;</span> y cierra con{" "}
              <span className="font-bold text-amarillo">&lt;/tr&gt;</span>.
            </p>
            <p>
              Estas filas pueden contener tanto celdas de encabezado, usando{" "}
              <span className="font-bold text-amarillo">&lt;th&gt;</span>, como celdas de datos, usando{" "}
              <span className="font-bold text-amarillo">&lt;td&gt;</span>. Es importante destacar que cada fila debe estar
              correctamente cerrada para mantener la estructura de la tabla.
            </p>
          </div>

          <div className="flex flex-col gap-8 flex-1 min-w-0 w-full">
            <div className="p-2 flex flex-col gap-4 w-full overflow-x-auto">
              <h2 className="text-center font-bold">Tabla ejemplo</h2>
              <table className="mx-auto w-full max-w-md">
                <tbody>
                  <tr className="bg-blue-500">
                    <th className="border-2 px-2 py-1 text-sm sm:text-base">Columna 1(th)</th>
                    <th className="border-2 px-2 py-1 text-sm sm:text-base">Columna 2(th)</th>
                    <th className="border-2 px-2 py-1 text-sm sm:text-base">Columna 3(th)</th>
                  </tr>
                  <tr className="bg-red-500">
                    <td className="border-2 px-2 py-1 text-sm sm:text-base">Celda 1(td)</td>
                    <td className="border-2 px-2 py-1 text-sm sm:text-base">Celda 2(td)</td>
                    <td className="border-2 px-2 py-1 text-sm sm:text-base">Celda 3(td)</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center text-sm sm:text-base">
                No se nota a primera vista, es en el código donde se entiende la jerarquía
              </p>
            </div>

            <div className="flex justify-center w-full">
              <iframe
                src="https://res.cloudinary.com/fci62b4m/video/upload/v1785006079/tr_dmo0mf.mp4"
                title="Video demostrativo tr"
                className="w-full max-w-[600px] aspect-video rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
