import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SidebarIcon({ children, className = "" }) {
  return (
    <svg
      className={`w-6 h-6 shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

const sections = [
  {
    id: "lesson1",
    label: "Descripción y Estructura Básica",
    to: "/concepts",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 14h18" />
        <path d="M9 4v16" />
      </>
    ),
  },
  {
    id: "lesson2",
    label: "Atributos",
    to: "/attributes",
    icon: (
      <>
        <path d="M12 3 2 8.5 12 14l10-5.5L12 3z" />
        <path d="M2 12.5 12 18l10-5.5" />
        <path d="M2 16.5 12 22l10-5.5" />
      </>
    ),
  },
  {
    id: "lesson3",
    label: "Filas y Columnas",
    to: "/filas-columnas",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 15h18" />
        <path d="M9 3v18" />
        <path d="M15 3v18" />
      </>
    ),
  },
  {
    id: "lesson4",
    label: "Celdas Combinadas",
    to: "/combinar-celda",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 15h12" />
        <path d="M9 9v12" />
      </>
    ),
  },
  {
    id: "practice",
    label: "Retos",
    to: "/reto",
    icon: (
      <>
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10l1 4H6l1-4z" />
        <path d="M6 8v5a6 6 0 0 0 12 0V8" />
        <path d="M9 4V3a3 3 0 0 1 6 0v1" />
      </>
    ),
  },
]

export const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <aside
      className={`bg-azul shrink-0 self-stretch flex flex-col py-6 transition-[width,padding] duration-300 ease-in-out ${
        open
          ? "w-max px-4 gap-4 items-start"
          : "w-[4.75rem] px-2 gap-5 overflow-hidden items-center"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        className={`rounded-xl p-2 text-blanco/90 hover:bg-guinda hover:text-blanco hover:shadow-md transition-all duration-300 ease-out ${
          open ? "self-start" : "self-center"
        }`}
      >
        <SidebarIcon>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </SidebarIcon>
      </button>

      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          onClick={() => navigate(section.to)}
          title={section.label}
          className={`group flex w-full min-w-0 items-center rounded-xl border-l-4 border-transparent py-2.5 transition-all duration-300 ease-out cursor-pointer text-iconos/70 hover:border-amarillo hover:bg-guinda hover:text-blanco hover:shadow-lg ${
            open
              ? "gap-3 px-2 justify-start hover:translate-x-0.5"
              : "gap-0 px-1.5 justify-center"
          }`}
        >
          <SidebarIcon className="transition-transform duration-300 group-hover:scale-110 group-hover:text-blanco">
            {section.icon}
          </SidebarIcon>
          {open && (
            <span className="text-left text-sm font-medium leading-snug whitespace-nowrap pr-1 transition-colors duration-300 group-hover:text-blanco">
              {section.label}
            </span>
          )}
        </button>
      ))}
    </aside>
  )
}
