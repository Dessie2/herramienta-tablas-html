import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"
import LessonNavRow from "../components/LessonNavRow"
import HtmlPlayground from "../components/HtmlPlayground"

const attributes = [
  {
    id: "width",
    name: "<width>",
    gradient: "from-cyan-100 to-sky-50",
    border: "border-cyan-300",
    icon: "↔",
    description:
      "Modifica el ancho de la tabla, se maneja con números, porcentajes o píxeles.",
  },
  {
    id: "height",
    name: "<height>",
    gradient: "from-emerald-100 to-green-50",
    border: "border-emerald-300",
    icon: "↕",
    description:
      "Define la altura de una celda o fila, controlando el espacio vertical que ocupa.",
  },
  {
    id: "valign",
    name: "<Valign>",
    gradient: "from-cyan-100 to-sky-50",
    border: "border-cyan-300",
    icon: "⬍",
    description:
      "Controla la alineación vertical del contenido dentro de una celda (top, middle, bottom).",
  },
  {
    id: "bgcolor",
    name: "<bgcolor>",
    gradient: "from-emerald-100 to-green-50",
    border: "border-emerald-300",
    icon: "■",
    description:
      "Establece el color de fondo de una celda o fila específica de la tabla.",
  },
  {
    id: "background",
    name: "<background>",
    gradient: "from-cyan-100 to-sky-50",
    border: "border-cyan-300",
    icon: "🖼",
    description:
      "Permite colocar una imagen de fondo dentro de una celda para personalizar su apariencia.",
  },
  {
    id: "bordercolor",
    name: "<bordercolor>",
    gradient: "from-emerald-100 to-green-50",
    border: "border-emerald-300",
    icon: "▢",
    description:
      "Cambia el color del borde de las celdas seleccionadas dentro de la tabla.",
  },
]

const defaultCode = `<table border="1">
  <!-- Añadimos color al fondo del header -->
  <tr>
    <th bgcolor="#A7DDA6">Fila 1</th>
    <td>Celda 1</td>
    <td align="center">Centro</td>
  </tr>
  <tr>
    <th bgcolor="#D19800">Fila 2</th>
    <td bgcolor="#3224AA"><font color="yellow">Azul</font></td>
    <td>Dato</td>
  </tr>
  <tr>
    <th bgcolor="#D19800">Fila 3</th>
    <td>Dato</td>
    <td>Dato</td>
  </tr>
</table>`

export default function FilasColumas() {
  const navigate = useNavigate()
  const [openAttr, setOpenAttr] = useState(null)

  const toggleAttribute = (id) => {
    setOpenAttr((prev) => (prev === id ? null : id))
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 overflow-x-hidden">
      <Header />

      <div className="flex flex-1 min-w-0">
        <Sidebar />

        <main className="flex-1 min-w-0 bg-grisbg py-4 sm:py-8 px-4 sm:px-6 flex flex-col overflow-x-hidden">
          <div className="content-container flex flex-col flex-1 min-w-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-azul text-center mb-6 sm:mb-8">
              Atributos de la filas y columnas de la tabla
            </h1>

            <p className="text-center text-sm font-semibold text-azul/70 mb-4 tracking-wide uppercase">
              Toca una tarjeta para ver la información de cada atributo
            </p>

            {/* Acordeones de atributos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 w-full min-w-0 mb-8">
              {attributes.map((attr, i) => {
                const isOpen = openAttr === attr.id

                return (
                  <div
                    key={attr.id}
                    className="flex flex-col min-w-0 animate-fade-up"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAttribute(attr.id)}
                      aria-expanded={isOpen}
                      className={`
                        group relative w-full flex flex-col items-center justify-center gap-1
                        py-4 px-3 min-h-[7.5rem] sm:min-h-[8.5rem]
                        rounded-xl border-2 border-b-[5px] bg-gradient-to-br
                        ${attr.gradient} ${attr.border}
                        shadow-md transition-all duration-200
                        ${isOpen
                          ? "border-azul border-b-azul shadow-lg ring-2 ring-azul/20 rounded-b-none"
                          : "hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5"
                        }
                      `}
                    >
                      <span className="absolute top-2 left-2 w-7 h-7 rounded-full bg-azul text-white text-xs font-black flex items-center justify-center shadow-sm">
                        {i + 1}
                      </span>

                      <span
                        className={`text-2xl sm:text-3xl text-azul/80 transition-all duration-200 ${
                          isOpen ? "text-guinda scale-110" : "group-hover:text-guinda"
                        }`}
                      >
                        {attr.icon}
                      </span>

                      <span
                        className={`text-sm sm:text-lg font-black font-mono text-azul transition-colors ${
                          isOpen ? "text-guinda" : "group-hover:text-guinda"
                        }`}
                      >
                        {attr.name}
                      </span>

                      <span
                        className={`text-lg font-bold transition-all duration-200 ${
                          isOpen
                            ? "rotate-180 text-amarillo"
                            : "text-azul/30 group-hover:text-amarillo"
                        }`}
                      >
                        ⌄
                      </span>
                    </button>

                    {isOpen && (
                      <div className="bg-white/90 border-2 border-t-0 border-azul border-l-4 border-l-amarillo rounded-b-xl px-4 py-4 shadow-md animate-fade-up">
                        <p className="text-xs sm:text-sm text-slate-700 text-center leading-relaxed">
                          <span className="block font-black font-mono text-azul mb-1">{attr.name}</span>
                          {attr.description}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Practica */}
            <div className="bg-white/80 border-l-4 border-amarillo rounded-r-xl shadow-sm p-4 sm:p-5 mb-5">
              <p className="text-center text-base sm:text-lg font-semibold text-azul">
                Practica un poco del conocimiento teórico,{" "}
                <span className="text-amarillo">juega con lo que te imagines!</span>
              </p>
            </div>

            <div className="w-full min-w-0 mb-6">
              <HtmlPlayground initialHtml={defaultCode} />
            </div>
          </div>

          <LessonNavRow>
            <button
              onClick={() => navigate("/quiz3")}
              className="lesson-nav-btn bg-guinda text-white shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:bg-guinda/90 active:translate-y-0.5 active:shadow-none transition-all"
            >
              Siguiente Lección
            </button>
          </LessonNavRow>
        </main>
      </div>
    </div>
  )
}
