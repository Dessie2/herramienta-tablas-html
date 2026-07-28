import { lesson4Questions } from "../assets/preguntas/Lesson4Questions"
import QuizGame from "./QuizGame"

export default function Quiz4() {
  return <QuizGame questions={lesson4Questions} onCorrectNavigate="/reto" />
}
