import { lesson2Questions } from "../assets/preguntas/lesson2Questions"
import QuizGame from "./quizGame"

export default function Quiz2() {
  return <QuizGame questions={lesson2Questions} onCorrectNavigate="/filas-columnas" />
}
