import { useNavigate } from "react-router-dom"
import LessonLayout from "../../components/LessonLayout"

export default function Table() {
  const navigate = useNavigate()

  return (
    <LessonLayout title="Etiqueta &lt;table&gt;">
      <div className="lesson-content-panel bg-blanco w-full min-h-[500px] rounded-md shadow-md p-6 sm:p-10 flex flex-col flex-1">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 flex-1 min-w-0">
          <div className="flex flex-col text-lg sm:text-xl lg:text-2xl max-w-2xl">
            <p>
              La etiqueta <span className="font-bold text-amarillo">&lt;table&gt;</span> nos permite
              crear una tabla en HTML. Dentro de ella colocamos las filas{" "}
              <span className="font-bold text-amarillo">&lt;tr&gt;</span> y las celdas, que pueden ser
              encabezados <span className="font-bold text-amarillo">&lt;th&gt;</span> o datos{" "}
              <span className="font-bold text-amarillo">&lt;td&gt;</span>. Con estas etiquetas organizamos
              la información en filas y columnas para visualizarla de forma clara y ordenada en una página web.
            </p>
          </div>

          <div className="bg-[#1E1E2E] text-gray-200 rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm w-full lg:max-w-lg overflow-x-auto">
            <pre className="whitespace-pre-wrap">
<span className="text-amarillo">{`<table>`}</span>{`
  <tbody>
  <tr>
    <td>Celda A1</td>
    <td>Celda A2</td>
  </tr>
  <tr>
    <td>Celda B1</td>
    <td>Celda B2</td>
  </tr>
</tbody>`}
<span className="text-amarillo">{`
</table>`}</span>{`
  `}</pre>
          </div>
        </div>

        <div className="flex justify-end mt-auto pt-4">
          <button
            onClick={() => navigate("/lessons/lesson1/Table_more")}
            className="bg-azul hover:bg-guinda text-blanco font-bold py-2 px-8 rounded-md text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-all active:translate-y-1 active:shadow-none"
          >
            Visualizar más
          </button>
        </div>
      </div>
    </LessonLayout>
  )
}
