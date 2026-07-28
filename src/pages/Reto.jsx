import { useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"
import HtmlPlayground from "../components/HtmlPlayground"
import LessonNavRow from "../components/LessonNavRow"
import { tableChallenges } from "../assets/Retos"

function pickRandomChallenge() {
  const index = Math.floor(Math.random() * tableChallenges.length)
  return tableChallenges[index]
}

export default function Reto() {
  const [challenge] = useState(pickRandomChallenge)
  const [showHelp, setShowHelp] = useState(false)

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 overflow-x-hidden">
      <Header />

      <div className="flex flex-1 min-w-0">
        <Sidebar />

        <main className="flex-1 min-w-0 bg-grisbg py-4 sm:py-8 px-4 sm:px-6 flex flex-col overflow-x-hidden">
          <div className="content-container flex flex-col flex-1 min-w-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-azul text-center mb-6 sm:mb-8">
              Reto!
            </h1>

            <div className="bg-[#D1F0E0] border-2 border-[#5cb88a] rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,0.1)] p-5 sm:p-6 mb-6 animate-fade-up">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <div className="flex-1 min-w-0">
                  <p className="text-base sm:text-lg font-bold text-azul mb-3 leading-snug">
                    Instrucción: {challenge.instruction}
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-slate-700 mb-2">
                    Tu tabla debe incluir:
                  </p>
                  <ul className="space-y-1.5">
                    {challenge.requirements.map((req) => (
                      <li
                        key={req}
                        className="text-sm sm:text-base text-slate-700 pl-1 before:content-['-'] before:mr-2 before:font-bold before:text-[#5cb88a]"
                      >
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setShowHelp((prev) => !prev)}
                  className="action-btn self-start sm:self-center shrink-0 px-5 py-2 rounded-lg text-sm"
                >
                  ¡Ayuda!
                </button>
              </div>

              {showHelp && (
                <div className="mt-4 pt-4 border-t-2 border-[#5cb88a]/40 animate-fade-up">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    <span className="font-bold text-azul">Reto: {challenge.title}.</span>{" "}
                    Usa etiquetas como{" "}
                    <span className="font-mono text-guinda">&lt;table&gt;</span>,{" "}
                    <span className="font-mono text-guinda">&lt;caption&gt;</span>,{" "}
                    <span className="font-mono text-guinda">&lt;thead&gt;</span>,{" "}
                    <span className="font-mono text-guinda">&lt;tbody&gt;</span>,{" "}
                    <span className="font-mono text-guinda">&lt;tfoot&gt;</span>,{" "}
                    <span className="font-mono text-guinda">&lt;tr&gt;</span>,{" "}
                    <span className="font-mono text-guinda">&lt;th&gt;</span> y{" "}
                    <span className="font-mono text-guinda">&lt;td&gt;</span>. Revisa que
                    cumplas cada punto de la lista antes de terminar.
                  </p>
                </div>
              )}
            </div>

            <div className="w-full min-w-0 mb-6">
              <HtmlPlayground />
            </div>
          </div>

          <LessonNavRow />
        </main>
      </div>
    </div>
  )
}
