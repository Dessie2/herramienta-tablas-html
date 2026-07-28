import BackButton from "./backButton"

export default function LessonNavRow({ backTo, children, backVariant = "default", backClassName = "" }) {
  return (
    <div className="lesson-nav-row">
      <BackButton to={backTo} variant={backVariant} className={backClassName} />
      {children ?? <span aria-hidden="true" />}
    </div>
  )
}
