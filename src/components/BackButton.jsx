import { useLocation, useNavigate } from "react-router-dom"
import { getBackRoute } from "../utils/lessonBackRoutes"

const HIDE_BACK_ON = ["/", "/concepts"]

export default function BackButton({ to, className = "" }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  if (HIDE_BACK_ON.includes(pathname)) return null

  const handleBack = () => {
    if (to) {
      navigate(to)
      return
    }

    const backRoute = getBackRoute(pathname)
    if (backRoute) navigate(backRoute)
    else navigate(-1)
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className={`lesson-nav-btn bg-azul text-white shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:bg-guinda/90 active:translate-y-0.5 active:shadow-none transition-all ${className}`}
    >
      &#8249; Regresar
    </button>
  )
}
