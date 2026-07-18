import { lesson1Questions } from "../assets/preguntas/lesson1Questions"
import QuizGame from "./QuizGame"

export default function Quiz() {
  return <QuizGame questions={lesson1Questions} onCorrectNavigate="/attributes" />
}
