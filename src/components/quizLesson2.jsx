import { lesson2Questions } from "../assets/preguntas/lesson2Questions"
import QuizGame from "./QuizGame"

export default function Quiz2() {
  return <QuizGame questions={lesson2Questions} onCorrectNavigate="/filas-columnas" />
}
