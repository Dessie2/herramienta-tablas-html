import { useNavigate } from "react-router-dom"
import { Sidebar } from "../components/sidebar"
import { Header } from "../components/header"
import LessonNavRow from "../components/lessonNavRow"
import HtmlPlayground from "../components/htmlPlayground"
import CombinarCeldaBanner from "../components/combinarCeldaBanner"

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

            <CombinarCeldaBanner />

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
