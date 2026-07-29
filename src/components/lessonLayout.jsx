import { Sidebar } from "./sidebar"
import { Header } from "./header"
import LessonNavRow from "./lessonNavRow"

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

        <main className="flex-1 min-w-0 min-h-0 bg-grisbg overflow-y-auto overflow-x-hidden">
          <div className="content-container flex flex-col min-w-0 px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-10 pb-4">
            <h1 className="text-3xl sm:text-4xl mt-2 font-extrabold text-azul text-center mb-4 sm:mb-6 shrink-0">
              {title}
            </h1>
            <div className="flex flex-col w-full shrink-0">{children}</div>
            {showNav && (
              <LessonNavRow backTo={backTo} backVariant="edge" backClassName={backClassName} />
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
