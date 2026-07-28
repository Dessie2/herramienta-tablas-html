import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"
import LessonNavRow from "../components/LessonNavRow"
import HtmlPlayground from "../components/HtmlPlayground"

const BANNER_INTERVAL_MS = 16000

function IntroDiagram() {
  return (
    <svg viewBox="0 0 220 130" className="w-44 sm:w-52 h-auto shrink-0 drop-shadow-sm" aria-hidden="true">
      <rect x="10" y="20" width="60" height="35" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="70" y="20" width="60" height="35" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="130" y="20" width="60" height="35" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="10" y="55" width="60" height="35" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="70" y="55" width="120" height="35" fill="#fde68a" stroke="#333" strokeWidth="1.5" />
      <rect x="10" y="90" width="60" height="35" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="70" y="90" width="60" height="70" fill="#fde68a" stroke="#333" strokeWidth="1.5" />
      <rect x="130" y="90" width="60" height="35" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="10" y="125" width="60" height="35" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="130" y="125" width="60" height="35" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="100" y="14" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">Colspan</text>
      <text x="200" y="78" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">Rowspan</text>
    </svg>
  )
}

function ColspanDiagram() {
  return (
    <svg viewBox="0 0 200 90" className="w-44 sm:w-52 h-auto shrink-0 drop-shadow-sm" aria-hidden="true">
      <rect x="10" y="20" width="55" height="30" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="65" y="20" width="55" height="30" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="120" y="20" width="55" height="30" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="10" y="50" width="55" height="30" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="65" y="50" width="110" height="30" fill="#fde68a" stroke="#333" strokeWidth="1.5" />
      <text x="120" y="12" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">Colspan</text>
      <text x="120" y="68" textAnchor="middle" fill="#333" fontSize="9" fontWeight="bold">colspan="2"</text>
    </svg>
  )
}

function RowspanDiagram() {
  return (
    <svg viewBox="0 0 200 100" className="w-44 sm:w-52 h-auto shrink-0 drop-shadow-sm" aria-hidden="true">
      <rect x="10" y="20" width="55" height="30" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="65" y="20" width="55" height="30" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="120" y="20" width="55" height="30" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="10" y="50" width="55" height="30" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="65" y="50" width="55" height="30" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="120" y="50" width="55" height="30" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="10" y="80" width="55" height="30" fill="white" stroke="#333" strokeWidth="1.5" />
      <rect x="65" y="50" width="55" height="60" fill="#fde68a" stroke="#333" strokeWidth="1.5" />
      <rect x="120" y="80" width="55" height="30" fill="white" stroke="#333" strokeWidth="1.5" />
      <text x="175" y="55" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">Rowspan</text>
      <text x="92" y="82" textAnchor="middle" fill="#333" fontSize="9" fontWeight="bold">rowspan="2"</text>
    </svg>
  )
}

const bannerSlides = [
  {
    id: "intro",
    content: (
      <p className="flex-1 text-white text-base sm:text-lg leading-relaxed text-center md:text-left">
        Para{" "}
        <span className="font-mono font-bold text-amarillo">&lt;td&gt;</span>
        {" "}(columnas) y{" "}
        <span className="font-mono font-bold text-amarillo">&lt;th&gt;</span>
        {" "}(filas) existen{" "}
        <span className="font-bold text-amarillo">colspan</span> y{" "}
        <span className="font-bold text-amarillo">rowspan</span>, los cuales se
        utilizan para combinar celdas.
      </p>
    ),
    diagram: <IntroDiagram />,
  },
  {
    id: "colspan",
    content: (
      <p className="flex-1 text-white text-base sm:text-lg leading-relaxed text-center md:text-left">
        El atributo{" "}
        <span className="font-bold text-amarillo">colspan</span> permite que una
        celda ocupe varias{" "}
        <span className="font-bold text-amarillo">columnas</span> de forma horizontal,
        fusionando celdas en la misma fila.
      </p>
    ),
    diagram: <ColspanDiagram />,
  },
  {
    id: "rowspan",
    content: (
      <p className="flex-1 text-white text-base sm:text-lg leading-relaxed text-center md:text-left">
        El atributo{" "}
        <span className="font-bold text-amarillo">rowspan</span> permite que una
        celda ocupe varias{" "}
        <span className="font-bold text-amarillo">filas</span> de forma vertical,
        extendiéndose hacia abajo en la tabla.
      </p>
    ),
    diagram: <RowspanDiagram />,
  },
]

function RotatingBanner() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerSlides.length)
    }, BANNER_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => setActiveSlide(index)

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % bannerSlides.length)
  }

  const slide = bannerSlides[activeSlide]

  return (
    <div className="relative mb-8 animate-fade-up mx-2 sm:mx-6 md:mx-10">
      <div className="bg-azul rounded-xl shadow-[6px_6px_0px_rgba(0,0,0,0.15)] p-5 sm:p-6 min-h-[11rem] sm:min-h-[10rem] overflow-hidden">
        <div
          key={slide.id}
          className="flex flex-col md:flex-row items-center gap-5 md:gap-8 animate-fade-up"
        >
          {slide.content}
          {slide.diagram}
        </div>
      </div>

      <button
        type="button"
        onClick={prevSlide}
        aria-label="Banner anterior"
        className="absolute left-1 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 text-azul font-bold shadow-md hover:bg-amarillo hover:text-azul transition-colors z-10"
      >
        &#8249;
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Banner siguiente"
        className="absolute right-1 sm:-right-6 md:-right-8 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 text-azul font-bold shadow-md hover:bg-amarillo hover:text-azul transition-colors z-10"
      >
        &#8250;
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {bannerSlides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Ver banner ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "w-8 bg-azul"
                : "w-2.5 bg-azul/30 hover:bg-azul/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function CombinarCelda() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 overflow-x-hidden">
      <Header />

      <div className="flex flex-1 min-w-0">
        <Sidebar />

        <main className="flex-1 min-w-0 bg-grisbg py-4 sm:py-8 px-4 sm:px-6 flex flex-col overflow-x-hidden">
          <div className="content-container flex flex-col flex-1 min-w-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-azul text-center mb-6 sm:mb-8">
              Combinar las celdas
            </h1>

            <RotatingBanner />

            <div className="bg-white/80 border-l-4 border-amarillo rounded-r-xl shadow-sm p-4 sm:p-5 mb-5">
              <p className="text-center text-base sm:text-lg font-semibold text-azul">
                Practica un poco del conocimiento teórico,{" "}
                <span className="text-amarillo">juega con lo que te imagines!</span>
              </p>
            </div>

            <div className="w-full min-w-0 mb-6">
              <HtmlPlayground />
            </div>
          </div>

          <LessonNavRow>
            <button
              onClick={() => navigate("/quiz4")}
              className="lesson-nav-btn"
            >
              Siguiente Lección
            </button>
          </LessonNavRow>
        </main>
      </div>
    </div>
  )
}
