import { useNavigate } from "react-router-dom"
import LessonLayout from "../../components/LessonLayout"

export default function TFoot() {
  const navigate = useNavigate()

  return (
    <LessonLayout title="Etiqueta &lt;tfoot&gt;">
      <div className="lesson-content-panel bg-blanco w-full min-h-[500px] rounded-md shadow-md p-6 sm:p-10 flex flex-col flex-1">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 flex-1 min-w-0">
          <div className="flex flex-col text-lg sm:text-xl lg:text-2xl max-w-2xl">
            <p>
              La etiqueta <span className="font-bold text-amarillo">&lt;tfoot&gt;</span> sirve como indicador
              del pie de tabla, un bloque que contiene filas agrupadas al final de la tabla para resultados.
            </p>
          </div>

          <div className="lesson-code-block text-xs sm:text-sm">
            <pre className="whitespace-pre-wrap">{`
<table border="1">
<thead>
<caption>Titulo de tabla</caption>
  <tr>
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Celda A1</td>
    <td>Celda A2</td>
  </tr>
</tbody>
`}<span className="text-amarillo">{`<tfoot>`}</span>{`
  <tr>
    <td>Total</td>
    <td>15</td>
  </tr>
`}<span className="text-amarillo">{`</tfoot>`}</span>{`
</table>`}</pre>
          </div>
        </div>

        <div className="flex justify-end mt-auto pt-4">
          <button
            onClick={() => navigate("/lessons/lesson1/TFoot_more")}
            className="bg-azul hover:bg-guinda text-blanco font-bold py-2 px-8 rounded-md text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-all active:translate-y-1 active:shadow-none"
          >
            Visualizar más
          </button>
        </div>
      </div>
    </LessonLayout>
  )
}
