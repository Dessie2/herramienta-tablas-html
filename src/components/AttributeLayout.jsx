import { Sidebar } from "./Sidebar"
import { Header } from "./Header"
import LessonNavRow from "./LessonNavRow"

/**
 * Layout compartido para las vistas de "Atributos" (lección 2).
 * Replica el mismo diseño usado en la imagen de muestra:
 * título centrado, texto explicativo a la izquierda, ejemplos de
 * tabla comparativos y un espacio reservado para el video a la derecha,
 * y el botón "Regresar al menú" al final.
 */
export default function AttributeLayout({
  tagLabel,
  paragraphs = [],
  codeSnippet,
  examples = [],
  videoNote,
  backTo = "/attributes",
}) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      {/* Header */}
      <Header />

      <div className="flex flex-1 min-w-0">
        {/* Sidebar */}
        <Sidebar />

        {/* Contenido principal */}
        <main className="flex-1 min-w-0 bg-grisbg flex flex-col p-4 sm:p-6 md:p-10 overflow-x-hidden">
          <div className="content-container flex flex-col flex-1 min-w-0">
            {/* Título Principal */}
            <h1 className="text-4xl mt-4 font-extrabold text-azul text-center mb-10">
              &lt;{tagLabel}&gt;
            </h1>

            {/* Contenedor principal */}
            <div className="bg-blanco w-full min-h-[600px] rounded-md shadow-md p-10 flex flex-col flex-1">
              <div className="flex flex-col lg:flex-row gap-10 flex-1">
                {/* Texto */}
                <div className="ml-2 mt-4 flex flex-col text-xl p-3 gap-6 max-w-md">
                  {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}

                  {codeSnippet && (
                    <div className="bg-griscroll text-gray-200 rounded-xl p-4 font-mono text-sm relative">
                      <pre className="whitespace-pre-wrap">{codeSnippet}</pre>
                    </div>
                  )}
                </div>

                {/* Ejemplos + Video */}
                <div className="flex flex-col gap-8 flex-1">
                  {/* Contenedor de tablas comparativas */}
                  <div className="flex flex-row flex-wrap gap-6 justify-center">
                    {examples.map((ex, i) => (
                      <div
                        key={i}
                        className="p-4 flex flex-col gap-3 items-center bg-grisbg/60 rounded-lg"
                      >
                        <h2 className="text-center font-bold text-azul">
                          {ex.label}
                        </h2>
                        {ex.table}
                      </div>
                    ))}
                  </div>

                  {/* Espacio reservado para el video */}
                  <div className="flex justify-center">
                    <div className="w-full max-w-[600px] aspect-video rounded-lg border-2 border-dashed border-azul/30 bg-griscroll/95 flex flex-col items-center justify-center gap-3 text-blanco">
                      <svg
                        className="w-14 h-14 fill-blanco/70"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                      >
                        <path d="M96 128C96 92.7 124.7 64 160 64L480 64C515.3 64 544 92.7 544 128L544 512C544 547.3 515.3 576 480 576L160 576C124.7 576 96 547.3 96 512L96 128zM280 216L280 424C280 437.7 292.5 448 306.9 448C312.2 448 317.4 446.6 322 443.8L482 347.8C491.1 342.3 496.6 332.5 496.6 322C496.6 311.5 491.1 301.7 482 296.2L322 200.2C317.4 197.4 312.2 196 306.9 196C292.5 196 280 206.3 280 220L280 216z" />
                      </svg>
                      <span className="text-sm text-blanco/70 px-6 text-center">
                        {videoNote ||
                          "Espacio reservado para el video demostrativo de este atributo."}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <LessonNavRow backTo={backTo} />
        </main>
      </div>
    </div>
  )
}
