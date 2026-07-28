import { useNavigate } from "react-router-dom"
import LessonLayout from "../../components/LessonLayout"

export default function TBody() {
  const navigate = useNavigate()

  return (
    <LessonLayout title="Etiqueta &lt;tbody&gt;">
      <div className="lesson-page-shell">
        <div className="lesson-content-panel bg-blanco w-full rounded-md shadow-md p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 min-w-0">
          <div className="flex flex-col text-lg sm:text-xl lg:text-2xl max-w-2xl">
            <p>
              La etiqueta <span className="font-bold text-amarillo">&lt;tbody&gt;</span> se usa
              para indicar el cuerpo de la tabla, es decir, el bloque que contiene las filas de datos. Al igual
              que <span className="font-bold text-amarillo">&lt;thead&gt;</span>, funciona como contenedor.
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
`}<span className="text-amarillo">{`<tbody>`}</span>{`
  <tr>
    <td>Celda A1</td>
    <td>Celda A2</td>
  </tr>
`}<span className="text-amarillo">{`</tbody>`}</span>{`
</table>`}</pre>
          </div>
          </div>
        </div>

        <div className="lesson-more-row">
          <button
            onClick={() => navigate("/lessons/lesson1/Tbody_more")}
            className="bg-azul hover:bg-guinda text-blanco font-bold py-2 px-8 rounded-md text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-all active:translate-y-1 active:shadow-none"
          >
            Visualizar más
          </button>
        </div>
      </div>
    </LessonLayout>
  )
}
