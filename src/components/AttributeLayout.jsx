import { Sidebar } from "./Sidebar"
import { Header } from "./Header"
import LessonNavRow from "./LessonNavRow"
import { getLesson2Video } from "../assets/videos/lesson2Videos"

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
    <div className="min-h-screen flex flex-col font-sans text-slate-800 overflow-x-hidden">
      <Header />

      <div className="flex flex-1 min-w-0">
        <Sidebar />

        <main className="flex-1 min-w-0 bg-grisbg flex flex-col p-4 sm:p-6 md:p-10 overflow-x-hidden">
          <div className="content-container flex flex-col flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-4 font-extrabold text-azul text-center mb-6 sm:mb-10">
              &lt;{tagLabel}&gt;
            </h1>

            <div className="lesson-content-panel bg-blanco w-full rounded-md shadow-md p-4 sm:p-6 md:p-10 flex flex-col flex-1">
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 flex-1 min-w-0">
                <div className="flex flex-col text-base sm:text-lg md:text-xl p-1 sm:p-3 gap-4 sm:gap-6 max-w-md min-w-0">
                  {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}

                  {codeSnippet && (
                    <div className="bg-griscroll text-gray-200 rounded-xl p-4 font-mono text-sm relative">
                      <pre className="whitespace-pre-wrap">{codeSnippet}</pre>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-8 flex-1">
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center min-w-0">
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
