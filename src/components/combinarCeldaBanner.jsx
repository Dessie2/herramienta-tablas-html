import { useEffect, useState } from "react"

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

function BannerNavButton({ direction, onClick, ariaLabel, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 text-azul shadow-md hover:bg-amarillo hover:text-azul transition-colors z-10 ${className}`}
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={direction === "prev" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
      </svg>
    </button>
  )
}

export default function CombinarCeldaBanner() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerSlides.length)
    }, BANNER_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [])

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

      <BannerNavButton
        direction="prev"
        ariaLabel="Banner anterior"
        onClick={() => setActiveSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1))}
        className="left-1 sm:-left-6 md:-left-8"
      />

      <BannerNavButton
        direction="next"
        ariaLabel="Banner siguiente"
        onClick={() => setActiveSlide((prev) => (prev + 1) % bannerSlides.length)}
        className="right-1 sm:-right-6 md:-right-8"
      />

      <div className="flex justify-center gap-2 mt-4">
        {bannerSlides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveSlide(index)}
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
