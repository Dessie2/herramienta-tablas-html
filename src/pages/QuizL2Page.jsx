import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"
import LessonNavRow from "../components/LessonNavRow"
import Quiz from "../components/QuizLesson2"

export default function QuizPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 overflow-x-hidden">
      <Header />

      <div className="flex flex-1 min-w-0">
        <Sidebar />

        <main className="flex-1 min-w-0 bg-grisbg p-4 sm:p-6 md:p-10 flex flex-col overflow-x-hidden">
          <div className="content-container flex flex-col flex-1 min-w-0 w-full">
            <div className="flex-1 flex items-center justify-center">
              <Quiz />
            </div>
            <LessonNavRow />
          </div>
        </main>
      </div>
    </div>
  )
}
