import { lesson3Questions } from "../assets/preguntas/lesson3Questions"
import QuizGame from "./quizGame"

export default function Quiz3() {
  return <QuizGame questions={lesson3Questions} onCorrectNavigate="/combinar-celda" />
}
