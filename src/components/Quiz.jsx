import { useEffect, useState } from "react"
import { lesson1Questions } from "../assets/preguntas/lesson1Questions"
import { useNavigate } from "react-router-dom"

const correctGifs = [
 "https://media.giphy.com/media/111ebonMs90YLu/giphy.gif",
 "https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif"
]

const incorrectGifs = [
 "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",
 "https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif"
]

const neutralGifs = [
 "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
 "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif"
]

export default function Quiz() {

  const navigate = useNavigate()

  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [currentGif, setCurrentGif] = useState("")
  const [timeLeft, setTimeLeft] = useState(30)
  const [isTimerActive, setIsTimerActive] = useState(true)

  useEffect(() => {
    loadRandomQuestion()
  }, [])

  useEffect(() => {
    if (!isTimerActive || timeLeft === 0) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeout()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, isTimerActive])

  const loadRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * lesson1Questions.length)
    const question = lesson1Questions[randomIndex]

    setCurrentQuestion(question)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setTimeLeft(30)
    setIsTimerActive(true)

    const randomGif = neutralGifs[Math.floor(Math.random()*neutralGifs.length)]
    setCurrentGif(randomGif)
  }

  const handleTimeout = () => {
    setIsTimerActive(false)

    setTimeout(() => {
      loadRandomQuestion()
    }, 2000)
  }

  const handleAnswerSelect = (index) => {
    if (showFeedback) return

    setSelectedAnswer(index)
    setIsTimerActive(false)

    const correct = index === currentQuestion.correctAnswer
    setIsCorrect(correct)
    setShowFeedback(true)

    const gifArray = correct ? correctGifs : incorrectGifs
    setCurrentGif(gifArray[Math.floor(Math.random()*gifArray.length)])

    if(correct){
      setTimeout(()=>{
        navigate("/attributes")
      },2500)
    }else{
      setTimeout(()=>{
        loadRandomQuestion()
      },3500)
    }
  }

  const getOptionClassName = (index) => {
    if (!showFeedback) {
      return selectedAnswer === index
        ? "bg-blue-200 border-blue-400"
        : "bg-gray-100 hover:bg-gray-200"
    }

    if (index === currentQuestion.correctAnswer) {
      return "bg-green-200 border-green-500"
    }

    if (index === selectedAnswer && !isCorrect) {
      return "bg-red-200 border-red-500"
    }

    return "bg-gray-100"
  }

  if (!currentQuestion) return null

  const progress = (timeLeft/30)*100

  return (
    <div className="max-w-6xl w-full bg-white rounded-xl shadow-xl p-12">

      <h1 className="text-3xl font-extrabold text-blue-900 text-center mb-8">
        ¡Pon a prueba tus conocimientos!
      </h1>

      <div className="flex gap-8">

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">
            {currentQuestion.question}
          </h2>

          {currentQuestion.options.map((opt,i)=>(
            <button
              key={i}
              onClick={()=>handleAnswerSelect(i)}
              disabled={showFeedback}
              className={`
                w-full p-4 mb-3 rounded-lg border-2
                transition-all duration-200 text-left
                ${getOptionClassName(i)}
              `}
            >
              {String.fromCharCode(65+i)}) {opt}
            </button>
          ))}
        </div>

        <div className="w-80 h-80">
          <img
            src={currentGif}
            className="w-full h-full object-cover rounded-lg shadow animate-pop"
          />
        </div>
      </div>

      {showFeedback && (
        <div className={`p-5 mt-6 rounded-lg
          ${isCorrect?"bg-green-100 border-green-500":"bg-red-100 border-red-500"}
          border-2`}
        >
          <p className="font-bold text-lg">
            {isCorrect?"✔ Correcto":"❌ Incorrecto"}
          </p>
          <p>{currentQuestion.explanation}</p>
        </div>
      )}

      {!showFeedback && (
        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all"
              style={{width:`${progress}%`}}
            />
          </div>
          <p className="text-center font-bold mt-2">
            {timeLeft}s
          </p>
        </div>
      )}

    </div>
  )
}
