import { lesson4Questions } from "../assets/preguntas/lesson4Questions"
import QuizGame from "./quizGame"

export default function Quiz4() {
  return <QuizGame questions={lesson4Questions} onCorrectNavigate="/reto" />
}
