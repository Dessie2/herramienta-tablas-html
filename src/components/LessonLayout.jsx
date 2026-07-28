import { Sidebar } from "./Sidebar"
import { Header } from "./Header"
import LessonNavRow from "./LessonNavRow"

export default function LessonLayout({
  title,
  backTo = "/concepts",
  showNav = false,
  backClassName = "",
  children,
}) {
  return (
    <div className="min-h-screen md:h-screen flex flex-col font-sans text-slate-800 overflow-hidden">
      <div className="shrink-0">
        <Header />
      </div>

      <div className="flex flex-1 min-w-0 min-h-0 overflow-hidden">
        <Sidebar />

        <main className="flex-1 min-w-0 min-h-0 bg-grisbg flex flex-col overflow-y-auto overflow-x-hidden">
          <div className="content-container flex flex-col flex-1 min-h-0 min-w-0 p-4 sm:p-6 md:p-10">
            <h1 className="text-3xl sm:text-4xl mt-2 font-extrabold text-azul text-center mb-6 sm:mb-10 shrink-0">
              {title}
            </h1>
            <div className="flex flex-col flex-1 min-h-0 w-full">{children}</div>
          </div>

          {showNav && (
            <div className="content-container shrink-0 px-4 sm:px-6 md:px-10 pb-4 sm:pb-6 md:pb-10 mt-auto">
              <LessonNavRow backTo={backTo} backVariant="edge" backClassName={backClassName} />
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
