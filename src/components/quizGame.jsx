import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const correctGifs = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXFkZ2VoczR0anlveXltZWl5bW9tbmRyemtyenN1aGNibzFqYzczMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wtNOUuCzFKcaA/giphy.gif",
  "https://media.giphy.com/media/111ebonMs90YLu/giphy.gif",
  "https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWR0c2U0emx1dGgyc3lmcnNhNHl5dDJ5NWNxMGR3dTRldHdyOXlvYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FHXojHUYbrxKdh0dFJ/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHZ0bW1pcDV3NnE0dHZiaXJxbGJ1anQxZXlsNG1xd2oxb3dybmIyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NVBR6cLvUjV9C/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDd1djc2N3lvejdkZnBwM3dxcGoxcnRqZWRleXRrMW51NTB3aDEwNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/623GsYzT908Z63VOs1/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXdqc3hmaWRsazBpa25ubnhoaHllMW13dTdnenlkd2FpbHNuanFqdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1W40UWS9peSru/giphy.gif",
]

const incorrectGifs = [
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3Jld29hYXZjMjN5cjV4aTR6cjFsaml3cnVvdWd5MTZ0MTd1OW9zMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/McmEgVHMekWQ/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmVmaHNxMWxuNzNraXBiczY2Y2c4eW5nbTZ0cjE2d2Z0cXl5YmM1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o85xC73J7y0c9wJWM/giphy.gif",
  "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzB4endwNDlhM2tjbXhvb3RtN3pwM29ndndhZGdxNXN5cjZ2NThrMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RLi2oeVZiVkE8/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamQ0eXg0eGd3dnFxdGdvY3J1ZmE2MHVjdGl2OWMybmZ4eng2aG50eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uSoDr54W9M3uSBiTST/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGlkdjRqajV6OXN2azk3eGM4eWo2NnY3Y2NrYnh3dTd5NWoydWZiOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8ezz6fUfcWYlDFtKxK/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2p4aTVwcHFqM3FsaXVtdnUwbmI4NGhjd2I2MmVydWphZ3F5cTNlMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uN0SyFsLsXQ9MbS05S/giphy.gif",
]

const neutralGifs = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExamc5OXpyYmsyemJwbno4aHQ5c2V1Ymk2Z25nNDkxYndiNzkzd3Z3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GuWSJPF6bEkKs/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWg5cGp6cDFyYWZ5ZDltczR6dTQxdjR2YWU5MWI5NG0xeW91MTI5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lVsYDBC0UVQJCE/giphy.gif",
  "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJ3cHkzem92bGM1c3JibnBib24xYTBxeWI1eGcwYnJwNmV6c2R2MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bhPr2MgVRoL7wvlWTs/giphy.gif",
  "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTJucWtramVnbmE1Z3hvN3k3OXR5ZnFpYWphb3NwNzNjZGU5dWd3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YAa6eYva5IMEw/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHl1NXZmNWdjNjRnZWxsMnBsdXB4a3NkOTQzemI3NWs5ZGtpYW1xMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/phj798KapKrgMk95GY/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXFmNTJ3ZGR6NGZ0ZG1zd3I0NDhjbmxwbW80NHdnaTRnbWVsb2k2ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gMGwUr8mK04hUMK7Y8/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnhyYWVuaTk1NGdpbnZkZGxkNWF1a2k5YXhyNHlieGU5YnBrcGZkZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hrGLLFPzISpaGYAMzY/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXE3ZmViOHUyeTlkMDRvanZpYzdzNTg5Z2FnbzAwaHFmeDVteG00YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H4DjXQXamtTiIuCcRU/giphy.gif",
]

const FEEDBACK_DURATION_MS = 3500

export default function QuizGame({ questions = [], onCorrectNavigate = "/attributes" }) {
  const navigate = useNavigate()

  const pickRandomQuestion = () => {
    if (!questions.length) return null
    const randomIndex = Math.floor(Math.random() * questions.length)
    return questions[randomIndex]
  }

  const [currentQuestion, setCurrentQuestion] = useState(pickRandomQuestion)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [currentGif, setCurrentGif] = useState("")
  const [timeLeft, setTimeLeft] = useState(20)
  const [isTimerActive, setIsTimerActive] = useState(true)

  useEffect(() => {
    loadRandomQuestion()
  }, [])

  useEffect(() => {
    if (!isTimerActive || timeLeft === 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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
    const question = pickRandomQuestion()
    if (!question) return

    setCurrentQuestion(question)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setTimeLeft(20)
    setIsTimerActive(true)

    const randomGif = neutralGifs[Math.floor(Math.random() * neutralGifs.length)]
    setCurrentGif(randomGif)
  }

  const handleTimeout = () => {
    setIsTimerActive(false)
    setTimeout(() => loadRandomQuestion(), 2000)
  }

  const handleAnswerSelect = (index) => {
    if (showFeedback) return

    setSelectedAnswer(index)
    setIsTimerActive(false)

    const correct = index === currentQuestion.correctAnswer
    setIsCorrect(correct)
    setShowFeedback(true)

    const gifArray = correct ? correctGifs : incorrectGifs
    setCurrentGif(gifArray[Math.floor(Math.random() * gifArray.length)])

    if (correct) {
      setTimeout(() => navigate(onCorrectNavigate), FEEDBACK_DURATION_MS)
    } else {
      setTimeout(() => loadRandomQuestion(), FEEDBACK_DURATION_MS)
    }
  }

  const getOptionClassName = (index) => {
    if (!showFeedback) {
      return selectedAnswer === index
        ? "bg-cyan-100 border-azul border-b-azul shadow-sm"
        : "bg-gradient-to-br from-cyan-50 to-white border-cyan-200 border-b-cyan-300 hover:border-azul hover:-translate-y-0.5"
    }

    if (index === currentQuestion.correctAnswer) {
      return "bg-emerald-100 border-emerald-500 border-b-emerald-600"
    }

    if (index === selectedAnswer && !isCorrect) {
      return "bg-red-100 border-red-500 border-b-red-600"
    }

    return "bg-slate-50 border-slate-200 border-b-slate-300 opacity-60"
  }

  if (!questions.length) {
    return (
      <div className="max-w-6xl w-full min-w-0 bg-white rounded-xl border-2 border-azul/10 shadow-[6px_6px_0px_rgba(0,0,0,0.12)] p-8 text-center">
        <p className="text-lg font-bold text-azul">No hay preguntas disponibles.</p>
        <p className="text-slate-600 mt-2">Verifica que el archivo de preguntas esté guardado.</p>
      </div>
    )
  }

  if (!currentQuestion) return null

  const progress = (timeLeft / 20) * 100

  return (
    <div className="max-w-6xl w-full min-w-0 bg-white rounded-xl border-2 border-azul/10 shadow-[6px_6px_0px_rgba(0,0,0,0.12)] p-5 sm:p-8 md:p-10 overflow-hidden">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-azul text-center mb-6">
        ¡Pon a prueba tus conocimientos!
      </h1>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 min-w-0">
        <div className="flex-1 min-w-0">
          <div className="bg-grisbg/70 border-l-4 border-amarillo rounded-r-xl p-4 sm:p-5 mb-5 shadow-sm">
            <h2 className="text-base sm:text-xl font-bold text-azul leading-snug">
              {currentQuestion.question}
            </h2>
          </div>

          {currentQuestion.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswerSelect(i)}
              disabled={showFeedback}
              style={{ animationDelay: `${i * 60}ms` }}
              className={`
                group w-full flex items-center gap-3 p-3 sm:p-4 mb-3
                rounded-xl border-2 border-b-[4px]
                transition-all duration-200 text-left animate-fade-up
                disabled:cursor-default
                ${getOptionClassName(i)}
              `}
            >
              <span className="shrink-0 w-8 h-8 rounded-full bg-azul text-white text-sm font-black flex items-center justify-center shadow-sm group-hover:bg-guinda transition-colors">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-sm sm:text-base font-medium text-slate-800 min-w-0">
                {opt}
              </span>
            </button>
          ))}
        </div>

        <div className="w-full max-w-sm sm:max-w-md lg:w-96 xl:w-[26rem] aspect-square mx-auto lg:mx-0 shrink-0">
          <img
            src={currentGif}
            alt=""
            className="w-full h-full object-cover rounded-xl border-2 border-azul/20 shadow-md animate-pop"
          />
        </div>
      </div>

      {showFeedback && (
        <div
          className={`p-4 sm:p-5 mt-6 rounded-xl border-2 border-b-4 animate-fade-up text-center ${
            isCorrect
              ? "bg-emerald-50 border-emerald-400 border-b-emerald-500"
              : "bg-red-50 border-red-400 border-b-red-500"
          }`}
        >
          <p className="font-bold text-lg text-azul">
            {isCorrect ? "✔ Correcto" : "❌ Incorrecto"}
          </p>
          <p className="text-slate-700 mt-1 max-w-2xl mx-auto">{currentQuestion.explanation}</p>
        </div>
      )}

      {!showFeedback && (
        <div className="mt-6">
          <div className="w-full bg-white rounded-full h-3 border border-azul/20 overflow-hidden shadow-inner">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                timeLeft <= 5
                  ? "bg-guinda"
                  : "bg-gradient-to-r from-azul to-cyan-500"
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p
            className={`text-center font-bold mt-2 text-sm sm:text-base ${
              timeLeft <= 5 ? "text-guinda" : "text-azul"
            }`}
          >
            {timeLeft}s
          </p>
        </div>
      )}
    </div>
  )
}
