import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"
import { useNavigate } from "react-router-dom"

const tags = [
  { name: "<table>", color: "bg-cyan-100" },
  { name: "<th>", color: "bg-green-100" },
  { name: "<thead>", color: "bg-cyan-100" },
  { name: "<tbody>", color: "bg-green-100" },
  { name: "<tr>", color: "bg-green-100" },
  { name: "<td>", color: "bg-cyan-100" },
  { name: "<caption>", color: "bg-green-100" },
  { name: "<tfoot>", color: "bg-cyan-100" }
]

export default function Concepts() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 bg-gray-100 p-10relative flex flex-col">
          {/* Título Principal */}
          <h1 className="text-4xl mt-2 font-extrabold text-blue-900 text-center mb-10">
            Definición y estructura básica de las <br /> Tablas en HTML
          </h1>

          {/* Texto Descriptivo */}
          <div className="max-w-4xl mx-auto text-lg leading-relaxed mb-5">
            <p className="mb-4">
              En este tema vamos a ver cómo trabajar con tablas dentro de una página web. Podemos insertar 
              <span className="text-yellow-600 font-semibold"> tablas, filas y columnas</span>, y modificar sus 
              <span className="text-yellow-600 font-semibold"> propiedades</span> para una mejor visualización.
            </p>
            <p>
              Las tablas están formadas por celdas, que son los recuadros que se obtienen como resultado de la 
              intersección entre una fila y una columna. Las filas y columnas de una tabla se van formando de 
              izquierda a derecha y de arriba hacia abajo respectivamente.
            </p>
          </div>

          {/* Botón Ejemplo */}
          <div className="flex justify-end max-w-5xl mx-auto w-full mb-2">
            <div className="flex flex-col items-center cursor-pointer">
              <span className="font-semibold">Ejemplo</span>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* Cuadrícula de Tags */}
          <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto w-full">
            {tags.map((tag, i) => (
              <button
                key={i}
                onClick={() => navigate(`/tag/${tag.name.replace(/[<>]/g, "")}`)}
                className={`${tag.color} h-40 flex flex-col items-center justify-center rounded-sm shadow-sm hover:brightness-95 transition-all`}
              >
                <span className="mb-10 text-2xl">⌄</span>
                <span className="text-2xl font-black text-slate-800">{tag.name}</span>
              </button>
            ))}
          </div>

          {/* Botón Siguiente Lección  */}
          <div className="-mt-0 flex justify-end mr-6  ">
            <button className="bg-[#1B396A] text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md hover:bg-red-900 transition-colors">
              Siguiente Lección
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}