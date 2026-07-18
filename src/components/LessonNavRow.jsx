import BackButton from "./BackButton"

export default function LessonNavRow({ backTo, children }) {
  return (
    <div className="lesson-nav-row">
      <BackButton to={backTo} />
      {children ?? <span aria-hidden="true" />}
    </div>
  )
}
