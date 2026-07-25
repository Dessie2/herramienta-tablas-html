import { useNavigate } from "react-router-dom"
import LessonLayout from "../../components/LessonLayout"

export default function TD() {
  const navigate = useNavigate()

  return (
    <LessonLayout title="Etiqueta &lt;td&gt;">
      <div className="lesson-content-panel bg-blanco w-full min-h-[500px] rounded-md shadow-md p-6 sm:p-10 flex flex-col flex-1">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 flex-1 min-w-0">
          <div className="flex flex-col text-lg sm:text-xl lg:text-2xl max-w-2xl">
            <p>
              La etiqueta <span className="font-bold text-amarillo">&lt;td&gt;</span> es importante para la creación de tablas,
              ya que representa las celdas de datos en una fila, al poner varias seguidas se forman las columnas. Es diminutivo de Table Data.
            </p>
          </div>

          <div className="lesson-code-block">
            <pre className="whitespace-pre-wrap">{`
<table border="1">
<thead>
  <tr>
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>
  </tr>
</thead>
<tbody>
  <tr>
    `}<span className="text-amarillo">{`<td>`}</span>{`Celda A1`}<span className="text-amarillo">{`</td>`}</span>{`
    `}<span className="text-amarillo">{`<td>`}</span>{`Celda A2`}<span className="text-amarillo">{`</td>`}</span>{`
  </tr>
</tbody>
</table>`}</pre>
          </div>
        </div>

        <div className="flex justify-end mt-auto pt-4">
          <button
            onClick={() => navigate("/lessons/lesson1/TD_more")}
            className="bg-azul hover:bg-guinda text-blanco font-bold py-2 px-8 rounded-md text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-all active:translate-y-1 active:shadow-none"
          >
            Visualizar más
          </button>
        </div>
      </div>
    </LessonLayout>
  )
}
