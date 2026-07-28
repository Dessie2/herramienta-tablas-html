import { useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"
import { useNavigate } from "react-router-dom"
import tableL1 from "../assets/images/leccion_1/tableL1.svg"

const tags = [
  { name: "<table>", gradient: "from-cyan-100 to-sky-50", border: "border-cyan-300", icon: "▦" },
  { name: "<caption>", gradient: "from-emerald-100 to-green-50", border: "border-emerald-300", icon: "✦" },
  { name: "<thead>", gradient: "from-cyan-100 to-sky-50", border: "border-cyan-300", icon: "▤" },
  { name: "<tbody>", gradient: "from-emerald-100 to-green-50", border: "border-emerald-300", icon: "▥" },
  { name: "<tfoot>", gradient: "from-cyan-100 to-sky-50", border: "border-cyan-300", icon: "▧" },
  { name: "<th>", gradient: "from-emerald-100 to-green-50", border: "border-emerald-300", icon: "◆" },
  { name: "<tr>", gradient: "from-emerald-100 to-green-50", border: "border-emerald-300", icon: "▬" },
  { name: "<td>", gradient: "from-cyan-100 to-sky-50", border: "border-cyan-300", icon: "▪" },
]

export default function Concepts() {
  const navigate = useNavigate()
  const [showExample, setShowExample] = useState(false)

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 overflow-x-hidden">
      <Header />

      <div className="flex flex-1 min-w-0">
        <Sidebar />

        <main className="flex-1 min-w-0 bg-grisbg p-4 sm:p-6 md:p-10 relative flex flex-col overflow-x-hidden">
          <div className="content-container flex flex-col min-w-0">
            {/* Título Principal */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl mt-2 font-extrabold text-azul text-center mb-6 sm:mb-8">
              Definición y estructura básica de las{" "}
              <span className="sm:hidden"> </span>
              <br className="hidden sm:block" />
              Tablas en HTML
            </h1>

            {/* Texto Descriptivo */}
            <div className="bg-white/80 border-l-4 border-amarillo rounded-r-xl shadow-sm p-5 sm:p-6 text-lg leading-relaxed mb-6">
              <p className="mb-4">
                En este tema vamos a ver cómo trabajar con tablas dentro de una página web. Podemos insertar
                <span className="text-amarillo font-semibold"> tablas, filas y columnas</span>, y modificar sus
                <span className="text-amarillo font-semibold"> propiedades</span> para una mejor visualización.
              </p>
              <p>
                Las tablas están formadas por celdas, que son los recuadros que se obtienen como resultado de la
                intersección entre una fila y una columna. Las filas y columnas de una tabla se van formando de
                izquierda a derecha y de arriba hacia abajo respectivamente.
              </p>
            </div>

            {/* Botón Ejemplo */}
            <div className="flex justify-end w-full mb-4">
              <button
                type="button"
                onClick={() => setShowExample(true)}
                aria-label="Ver ejemplo de estructura de tabla"
                className="lesson-nav-btn"
              >
                Ejemplo
              </button>
            </div>

            {/* Indicador tipo juego */}
            <p className="text-center text-sm font-semibold text-azul/70 mb-3 tracking-wide uppercase">
              ★ Toca una tarjeta para descubrir cada etiqueta ★
            </p>

            {/* Cuadrícula de Tags */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full min-w-0 p-1">
              {tags.map((tag, i) => (
                <div
                  key={i}
                  className="animate-fade-up"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                <button
                  type="button"
                  onClick={() => navigate(`/lessons/lesson1/${tag.name.replace(/[<>]/g, "")}`)}
                  className={`
                    group relative h-32 sm:h-40 w-full flex flex-col items-center justify-center
                    rounded-xl border-2 border-b-[5px] bg-gradient-to-br ${tag.gradient} ${tag.border}
                    shadow-md transition-transform duration-300 ease-out
                    hover:scale-110 hover:-translate-y-2 hover:shadow-xl hover:z-10
                    active:scale-105 active:translate-y-0 active:shadow-md
                  `}
                >
                  <span className="absolute top-2 left-2 w-7 h-7 rounded-full bg-azul text-white text-xs font-black flex items-center justify-center shadow-sm">
                    {i + 1}
                  </span>

                  <span className="text-2xl sm:text-3xl mb-2 text-azul/80 group-hover:text-guinda transition-colors duration-200">
                    {tag.icon}
                  </span>

                  <span className="text-sm sm:text-lg font-black text-azul font-mono group-hover:text-guinda transition-colors px-1">
                    {tag.name}
                  </span>

                  <span className="absolute bottom-2 text-azul/30 text-lg font-bold group-hover:text-amarillo transition-colors">
                    ⌄
                  </span>
                </button>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-10 sm:bottom-14 right-4 sm:right-6 md:right-10">
            <button
              onClick={() => navigate("/quiz")}
              className="lesson-nav-btn"
            >
              Siguiente Lección
            </button>
          </div>
        </main>
      </div>

      {showExample && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-up"
          onClick={() => setShowExample(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="example-modal-title"
        >
          <div
            className="relative bg-blanco rounded-xl shadow-2xl border-2 border-azul/20 p-4 sm:p-6 max-w-4xl w-full max-h-[90vh] overflow-auto animate-pop"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 gap-4">
              <h2 id="example-modal-title" className="text-xl sm:text-2xl font-extrabold text-azul">
                Ejemplo de estructura de tabla
              </h2>
              <button
                type="button"
                onClick={() => setShowExample(false)}
                aria-label="Cerrar ventana de ejemplo"
                className="shrink-0 w-9 h-9 rounded-full bg-azul text-blanco font-bold hover:bg-guinda transition-colors"
              >
                ✕
              </button>
            </div>

            <img
              src={tableL1}
              alt="Diagrama de estructura de una tabla HTML con sus etiquetas"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
