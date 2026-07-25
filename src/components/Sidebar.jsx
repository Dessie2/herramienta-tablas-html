import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SidebarIcon({ children, className = "" }) {
  return (
    <svg
      className={`w-6 h-6 shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

const sections = [
  {
    id: "lesson1",
    label: "Descripci?n y Estructura B?sica",
    to: "/concepts",
    icon: (
      <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.6V272h-96v183.9c0 11.5 11.6 19.4 22.4 15.6l104-36.4zM384 272V128H128v144H32V128C32 83.8 67.8 48 112 48H400c44.2 0 80 35.8 80 80v144H384z" />
    ),
  },
  {
    id: "lesson2",
    label: "Atributos",
    to: "/attributes",
    icon: (
      <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM0 240a32 32 0 1 1 64 0 32 32 0 1 1-64 0zM96 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM448 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H448zM448 256c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H448zM448 448c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H448z" />
    ),
  },
  {
    id: "lesson3",
    label: "Filas y Columnas",
    to: "/filas-columnas",
    icon: (
      <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64v64H256V160H96zm160 0v64H448V160H256zM96 288v64H256V288H96zm160 0v64H448V288H256zM96 416v64H256V416H96zm160 0v64H448V416H256z" />
    ),
  },
  {
    id: "lesson4",
    label: "Celdas Combinadas",
    to: "/combinar-celda",
    icon: (
      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM224 384V160H416v224H224zM96 160v224H192V160H96z" />
    ),
  },
  {
    id: "practice",
    label: "Retos",
    to: "/reto",
    icon: (
      <path d="M80.2 70.8C86.5 66.6 94.5 67.5 100 72.9L128 96.5V64c0-35.3 28.7-64 64-64s64 28.7 64 64V96.5l28-23.6c5.5-5.4 13.5-6.3 19.8-2.1C309.1 76.2 320 94 320 112.6V176h16c44.2 0 80 35.8 80 80v16c0 53-43 96-96 96H320v48c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V368H96c-53 0-96-43-96-96V256c0-44.2 35.8-80 80-80h16V112.6c0-18.6 10.9-36.4 27.8-41.8zM144 448V384H368v64H144z" />
    ),
  },
]

export const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <aside
      className={`bg-azul shrink-0 self-stretch flex flex-col items-start py-6 transition-[width,padding] duration-300 ease-in-out ${
        open ? "w-max px-4 gap-4" : "w-12 px-3 gap-6 overflow-hidden"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar men?" : "Abrir men?"}
        aria-expanded={open}
        className="text-blanco hover:text-black transition-colors"
      >
        <SidebarIcon>
          <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64s-28.7 64-64 64H64c-35.3 0-64-28.7-64-64s28.7-64 64-64zm0 160c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64s-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm0 160c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64s-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
        </SidebarIcon>
      </button>

      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          onClick={() => navigate(section.to)}
          title={section.label}
          className="group flex w-full min-w-0 items-center gap-2 rounded-lg py-2 px-1 transition-colors cursor-pointer hover:bg-guinda text-iconos/60 hover:text-blanco"
        >
          <SidebarIcon className="group-hover:text-blanco">{section.icon}</SidebarIcon>
          {open && (
            <span className="text-left text-sm leading-snug whitespace-nowrap pr-1">
              {section.label}
            </span>
          )}
        </button>
      ))}
    </aside>
  )
}
