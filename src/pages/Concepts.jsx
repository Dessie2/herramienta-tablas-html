import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"
import { useNavigate } from "react-router-dom"

const tags = [
  { name: "<table>", gradient: "from-cyan-100 to-sky-50", border: "border-cyan-300", icon: "▦" },
  { name: "<th>", gradient: "from-emerald-100 to-green-50", border: "border-emerald-300", icon: "◆" },
  { name: "<thead>", gradient: "from-cyan-100 to-sky-50", border: "border-cyan-300", icon: "▤" },
  { name: "<tbody>", gradient: "from-emerald-100 to-green-50", border: "border-emerald-300", icon: "▥" },
  { name: "<tr>", gradient: "from-emerald-100 to-green-50", border: "border-emerald-300", icon: "▬" },
  { name: "<td>", gradient: "from-cyan-100 to-sky-50", border: "border-cyan-300", icon: "▪" },
  { name: "<caption>", gradient: "from-emerald-100 to-green-50", border: "border-emerald-300", icon: "✦" },
  { name: "<tfoot>", gradient: "from-cyan-100 to-sky-50", border: "border-cyan-300", icon: "▧" },
]

export default function Concepts() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 overflow-x-hidden">
      <Header />

      <div className="flex flex-1 min-w-0">
        <Sidebar />

        <main className="flex-1 min-w-0 bg-grisbg p-4 sm:p-6 md:p-10 relative flex flex-col overflow-x-hidden">
          <div className="content-container flex flex-col flex-1 min-w-0">
            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl mt-2 font-extrabold text-azul text-center mb-8">
              Definición y estructura básica de las <br /> Tablas en HTML
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
              <div className="flex flex-col items-center cursor-pointer group">
                <span className="font-bold text-azul text-sm group-hover:text-guinda transition-colors">Ejemplo</span>
                <div className="w-10 h-10 rounded-full bg-azul text-white flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,0.2)] group-hover:bg-guinda transition-all">
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Indicador tipo juego */}
            <p className="text-center text-sm font-semibold text-azul/70 mb-3 tracking-wide uppercase">
              ★ Toca una tarjeta para descubrir cada etiqueta ★
            </p>

            {/* Cuadrícula de Tags */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full min-w-0 overflow-hidden">
              {tags.map((tag, i) => (
                <button
                  key={i}
                  onClick={() => navigate(`/lessons/lesson1/${tag.name.replace(/[<>]/g, "")}`)}
                  style={{ animationDelay: `${i * 70}ms` }}
                  className={`
                    group relative h-32 sm:h-40 flex flex-col items-center justify-center
                    rounded-xl border-2 border-b-[5px] bg-gradient-to-br ${tag.gradient} ${tag.border}
                    shadow-md hover:shadow-lg hover:-translate-y-1
                    active:translate-y-0.5 active:shadow-sm
                    transition-all duration-200 animate-fade-up
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
              ))}
            </div>
          </div>

          {/* Botón Siguiente Lección  */}
          <div className="lesson-nav-row justify-end">
            <button 
              onClick={() => navigate("/quiz")}
              className="lesson-nav-btn bg-azul text-white shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:bg-guinda hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] active:translate-y-0.5 active:shadow-none transition-all"
            >
              Siguiente Lección
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
