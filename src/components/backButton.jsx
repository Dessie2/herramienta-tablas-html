import { useLocation, useNavigate } from "react-router-dom"
import { getBackRoute } from "../utils/lessonBackRoutes"

const HIDE_BACK_ON = ["/", "/concepts"]

export default function BackButton({ to, className = "", variant = "default" }) {
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
      className={`lesson-nav-btn${
        variant === "edge" ? " lesson-nav-btn-back" : ""
      } ${className}`}
    >
      &#8249; Regresar
    </button>
  )
}
