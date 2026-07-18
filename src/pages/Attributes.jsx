import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"
import LessonNavRow from "../components/LessonNavRow"

const categories = [
  { id: "relation", label: "Atributos Relación-Aspecto" },
  { id: "global", label: "Atributos Globales" },
  { id: "style", label: "Atributos de Estilo" },
]

const categoryUrlMapping = {
  relation: "relAspc",
  global: "global",
  style: "estilo", 
}

const attributesByCategory = {
  relation: [
    {
      id: "cellspacing",
      name: "cellspacing",
      tableAttrs: 'border="1" cellspacing="10"',
      description:
        "La propiedad cellspacing en HTML define el espacio entre las celdas de una tabla, separando visualmente cada celda del resto.",
      showDiagram: false,
    },
        {
      id: "cellpadding",
      name: "cellpadding",
      tableAttrs: 'border="1" cellpadding="12"',
      description:
        "El atributo cellpadding controla el espacio interno entre el contenido de una celda y su borde.",
      showDiagram: false,
    },
    {
      id: "border",
      name: "border",
      tableAttrs: 'border="1"',
      description:
        "La propiedad border en HTML establece el grosor del borde de la tabla y sus celdas, permitiendo visualizar la estructura de filas y columnas.",
      showDiagram: false,
    },
    {
      id: "width",
      name: "width",
      tableAttrs: 'border="1" width="500px"',
      description:
        "La propiedad width en HTML se usa para definir el ancho de una tabla, controlando cuánto espacio ocupará en la página.",
      showDiagram: true,
    },
    {
      id: "height",
      name: "height",
      tableAttrs: 'border="1" height="200px"',
      description:
        "La propiedad height en HTML define la altura de una tabla, controlando el espacio vertical que ocupa en la página.",
      showDiagram: true,
    },
    {
      id: "align",
      name: "align",
      tableAttrs: 'border="1" align="center"',
      description:
        "La propiedad align en HTML indica la alineación horizontal de la tabla dentro de su contenedor, como izquierda, centro o derecha.",
      showDiagram: false,
    },
  ],
  global: [
    {
      id: "id",
      name: "id",
      tableAttrs: 'border="1" id="tabla-ejemplo"',
      description:
        "El atributo id asigna un identificador único a la tabla, útil para referenciarla desde CSS o JavaScript.",
      showDiagram: false,
    },
    {
      id: "class",
      name: "class",
      tableAttrs: 'border="1" class="tabla-estilo"',
      description:
        "El atributo class permite agrupar la tabla con estilos CSS compartidos mediante clases reutilizables.",
      showDiagram: false,
    },
    {
      id: "style",
      name: "style",
      tableAttrs: 'style="border: 2px solid #3498db; border-collapse: collapse;"',
      description:
        "El atributo style te permite aplicar propiedades modernas de CSS directamente en la etiqueta de la tabla, siendo la alternativa recomendada para controlar bordes, fondos y márgenes avanzados.",
      showDiagram: false,
    },
    {
      id: "title",
      name: "title",
      tableAttrs: 'border="1" title="Tabla informativa"',
      description:
        "El atributo title muestra un texto emergente al pasar el cursor sobre la tabla, ofreciendo información adicional.",
      showDiagram: false,
    },
  ],
  style: [
    {
      id: "bgcolor",
      name: "bgcolor",
      tableAttrs: 'border="1" bgcolor="#ecf0f5"',
      description:
        "El atributo bgcolor define el color de fondo de la tabla. Aunque está obsoleto, sigue siendo un auxiliar sencillo para estilizar.",
      showDiagram: false,
    },
    {
      id: "background",
      name: "background",
      tableAttrs: 'border="1" background="fondo.png"',
      description:
        "El atributo background permite colocar una imagen de fondo dentro de la tabla para personalizar su apariencia.",
      showDiagram: false,
    },
    {
      id: "bordercolor",
      name: "bordercolor",
      tableAttrs: 'border="1" bordercolor="#e74c3c"',
      description:
        "El atributo bordercolor cambia el color de todos los bordes de la tabla, permitiendo personalizarlos para que coincidan con la paleta de tu diseño.",
      showDiagram: false,
    },
  ],
}

function TableDiagram() {
  return (
    <svg
      viewBox="0 0 220 160"
      className="w-52 h-36 drop-shadow-md"
      aria-hidden="true"
    >
      {/* Flecha horizontal — ancho */}
      <line x1="20" y1="18" x2="200" y2="18" stroke="#e74c3c" strokeWidth="2" />
      <polygon points="20,18 28,14 28,22" fill="#e74c3c" />
      <polygon points="200,18 192,14 192,22" fill="#e74c3c" />
      <text x="110" y="12" textAnchor="middle" fill="#e74c3c" fontSize="11" fontWeight="bold">
        200px
      </text>

      {/* Tabla 2x2 */}
      <rect x="20" y="30" width="180" height="100" fill="white" stroke="#333" strokeWidth="1.5" />
      <line x1="110" y1="30" x2="110" y2="130" stroke="#333" strokeWidth="1" />
      <line x1="20" y1="80" x2="200" y2="80" stroke="#333" strokeWidth="1" />
      <text x="65" y="62" textAnchor="middle" fill="#333" fontSize="10">Texto 1</text>
      <text x="155" y="62" textAnchor="middle" fill="#333" fontSize="10">Texto 2</text>
      <text x="65" y="112" textAnchor="middle" fill="#333" fontSize="10">Texto 3</text>
      <text x="155" y="112" textAnchor="middle" fill="#333" fontSize="10">Texto 4</text>

      {/* Flecha vertical — alto */}
      <line x1="210" y1="30" x2="210" y2="130" stroke="#3498db" strokeWidth="2" />
      <polygon points="210,30 206,38 214,38" fill="#3498db" />
      <polygon points="210,130 206,122 214,122" fill="#3498db" />
      <text x="218" y="84" textAnchor="middle" fill="#3498db" fontSize="11" fontWeight="bold" transform="rotate(90 218 84)">
        100px
      </text>
    </svg>
  )
}

function CodeBlock({ tableAttrs, attributeName }) {
  const highlightAttr = (line) => {
    if (!attributeName || !line.includes(attributeName)) return line

    const parts = line.split(new RegExp(`(${attributeName})`))
    return parts.map((part, i) =>
      part === attributeName ? (
        <span key={i} className="text-amarillo font-semibold">{part}</span>
      ) : (
        part
      )
    )
  }

  const openTag = `<table ${tableAttrs}>`

  return (
    <pre className="font-mono text-sm leading-relaxed text-[#7dbe6c] whitespace-pre-wrap">
      <code>
        {highlightAttr(openTag)}
        {"\n"}
        {"  "}&lt;caption&gt;Tabla de Muestra&lt;/caption&gt;{"\n"}
        {"  "}&lt;tbody&gt;{"\n"}
        {"    "}&lt;tr&gt;{"\n"}
        {"      "}&lt;td&gt;Celda A1&lt;/td&gt;{"\n"}
        {"      "}&lt;td&gt;Celda A2&lt;/td&gt;{"\n"}
        {"      "}&lt;td&gt;Celda A3&lt;/td&gt;{"\n"}
        {"    "}&lt;/tr&gt;{"\n"}
        {"    "}&lt;tr&gt;{"\n"}
        {"      "}&lt;td&gt;Celda B1&lt;/td&gt;{"\n"}
        {"      "}&lt;td&gt;Celda B2&lt;/td&gt;{"\n"}
        {"      "}&lt;td&gt;Celda B3&lt;/td&gt;{"\n"}
        {"    "}&lt;/tr&gt;{"\n"}
        {"  "}&lt;/tbody&gt;{"\n"}
        &lt;/table&gt;
      </code>
    </pre>
  )
}

export default function Attributes() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState("relation")
  const [activeIndex, setActiveIndex] = useState(null)

  const attributes = attributesByCategory[activeCategory]
  const current = activeIndex !== null ? attributes[activeIndex] : null

  const selectAttribute = (index) => setActiveIndex(index)

  const prevAttribute = () => {
    setActiveIndex((i) => {
      if (i === null) return attributes.length - 1
      return i === 0 ? attributes.length - 1 : i - 1
    })
  }

  const nextAttribute = () => {
    setActiveIndex((i) => {
      if (i === null) return 0
      return i === attributes.length - 1 ? 0 : i + 1
    })
  }

  const changeCategory = (id) => {
    setActiveCategory(id)
    setActiveIndex(null)
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 overflow-x-hidden">
      <Header />

      <div className="flex flex-1 min-w-0">
        <Sidebar />

        <main className="flex-1 min-w-0 bg-grisbg py-4 sm:py-8 px-4 sm:px-6 flex flex-col overflow-x-hidden">
          <div className="content-container flex flex-col flex-1 min-w-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-azul text-center mb-6">
              Atributos de la tabla
            </h1>

            <div className="bg-white/80 border-l-4 border-amarillo rounded-r-xl shadow-sm p-5 sm:p-6 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl mx-auto w-full">
              <p className="text-center text-gray-700">
                Las tablas pueden tener diferentes{" "}
                <span className="text-amarillo font-semibold">atributos</span>{" "}
                para mejorar su estilización, tales como colores, formas,
                contenido y distribución. Aunque la mayoría están obsoletas
                por la estandarización de HTML5 y el uso de CSS, siguen
                sirviendo de auxiliares y son menos complejas.
              </p>
            </div>

            {/* Pestañas de categoría */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 sm:mb-10 w-full min-w-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => changeCategory(cat.id)}
                  className={`flex-1 py-3 rounded-xl font-bold text-white text-xs sm:text-sm transition-all ${
                    activeCategory === cat.id
                      ? "bg-guinda shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:bg-guinda/90"
                      : "bg-azul shadow-md hover:bg-azul/90 hover:-translate-y-0.5 active:translate-y-0.5"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <p className="text-center text-sm font-semibold text-azul/70 mb-4 tracking-wide uppercase">
              Explora cada atributo con el selector de abajo
            </p>

            {/* Contenido principal: código + descripción */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1.15fr] gap-8 lg:gap-14 xl:gap-20 items-start w-full animate-fade-up">
              <div className="flex flex-col">
                <div className="bg-griscroll rounded-xl p-4 sm:p-5 relative min-h-[300px] overflow-hidden border-2 border-azul/10 shadow-[6px_6px_0px_rgba(0,0,0,0.12)]">
                  <div className="max-w-full md:max-w-[52%]">
                    <CodeBlock
                      tableAttrs={current?.tableAttrs ?? 'border="1"'}
                      attributeName={current?.name ?? null}
                    />
                  </div>

                  {current?.showDiagram && (
                    <div className="hidden md:block absolute right-4 lg:right-8 top-1/2 -translate-y-1/2">
                      <TableDiagram />
                    </div>
                  )}
                </div>

                {/* Selector de atributos */}
                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-8 min-w-0">
                  <button
                    onClick={prevAttribute}
                    aria-label="Atributo anterior"
                    className="w-9 h-9 rounded-full bg-azul text-white font-bold shadow-md hover:bg-guinda transition-colors flex items-center justify-center shrink-0"
                  >
                    &#8249;
                  </button>

                  <div className="flex flex-wrap gap-3 sm:gap-4 justify-center min-w-0">
                    {attributes.map((attr, index) => (
                      <button
                        key={attr.id}
                        onClick={() => selectAttribute(index)}
                        className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold font-mono transition-all min-w-0 sm:min-w-[90px] ${
                          activeIndex === index
                            ? "bg-[#D1F0E0] border-2 border-[#5cb88a] text-slate-800 shadow-md scale-105"
                            : "bg-white border-2 border-[#b8d4ea] text-slate-700 hover:bg-[#D6E8F5] hover:border-azul hover:-translate-y-0.5 shadow-sm"
                        }`}
                      >
                        {attr.name}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={nextAttribute}
                    aria-label="Atributo siguiente"
                    className="w-9 h-9 rounded-full bg-azul text-white font-bold shadow-md hover:bg-guinda transition-colors flex items-center justify-center shrink-0"
                  >
                    &#8250;
                  </button>
                </div>
              </div>

              <div className="bg-white/80 border-l-4 border-amarillo rounded-r-xl shadow-sm p-6 sm:p-8 md:p-10 flex flex-col items-center text-center gap-8 lg:gap-10 md:mt-12 lg:mt-16 w-full">
                {current ? (
                  <>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-xs">
                      {current.description.split(current.name).map((part, i, arr) =>
                        i < arr.length - 1 ? (
                          <span key={i}>
                            {part}
                            <span className="font-semibold text-amarillo">{current.name}</span>
                          </span>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                    </p>
                    <button
                      onClick={() => {
                        const folderName = categoryUrlMapping[activeCategory] || activeCategory
                        navigate(`/lessons/lesson2/${folderName}/${current.id}`)
                      }}
                      className="bg-azul text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-[3px_3px_0px_rgba(0,0,0,0.2)] hover:bg-guinda active:translate-y-0.5 active:shadow-none transition-all"
                    >
                      Ver más
                    </button>
                  </>
                ) : (
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xs italic">
                    Selecciona un atributo para ver su descripción y ejemplo de código.
                  </p>
                )}
              </div>
            </div>
          </div>

          <LessonNavRow>
            <button
              onClick={() => navigate("/quiz2")}
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
