import { Sidebar } from "./Sidebar"
import { Header } from "./Header"
import LessonNavRow from "./LessonNavRow"
import { getLesson2Video } from "../assets/videos/lesson2Videos"

/**
 * Layout compartido para las vistas de "Atributos" (lección 2).
 * Replica el mismo diseño usado en la imagen de muestra:
 * título centrado, texto explicativo a la izquierda, ejemplos de
 * tabla comparativos y video demostrativo a la derecha,
 * y el botón "Regresar al menú" al final.
 */
export default function AttributeLayout({
  tagLabel,
  paragraphs = [],
  codeSnippet,
  examples = [],
  videoSrc,
  backTo = "/attributes",
}) {
  const resolvedVideoSrc = videoSrc ?? getLesson2Video(tagLabel)
  const videoTitle = `Video demostrativo ${tagLabel}`
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
            <div className="lesson-content-panel bg-blanco w-full min-h-[600px] rounded-md shadow-md p-10 flex flex-col flex-1">
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

                  {resolvedVideoSrc && (
                    <div className="flex justify-center w-full">
                      <iframe
                        src={resolvedVideoSrc}
                        title={videoTitle}
                        className="w-full max-w-[600px] aspect-video rounded-lg"
                      />
                    </div>
                  )}
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
