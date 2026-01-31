import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"
import Quiz from "../components/Quiz"

export default function QuizPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 bg-gray-100 p-10 flex items-center justify-center">
          <Quiz />
        </main>
      </div>
    </div>
  )
}
