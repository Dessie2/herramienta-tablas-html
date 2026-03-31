import { useEffect, useState } from "react"
import { lesson1Questions } from "../assets/preguntas/lesson1Questions"
import { useNavigate } from "react-router-dom"

const correctGifs = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXFkZ2VoczR0anlveXltZWl5bW9tbmRyemtyenN1aGNibzFqYzczMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wtNOUuCzFKcaA/giphy.gif",
 "https://media.giphy.com/media/111ebonMs90YLu/giphy.gif",
 "https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif",
 "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWR0c2U0emx1dGgyc3lmcnNhNHl5dDJ5NWNxMGR3dTRldHdyOXlvYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FHXojHUYbrxKdh0dFJ/giphy.gif",
 "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHZ0bW1pcDV3NnE0dHZiaXJxbGJ1anQxZXlsNG1xd2oxb3dybmIyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NVBR6cLvUjV9C/giphy.gif",
 "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDd1djc2N3lvejdkZnBwM3dxcGoxcnRqZWRleXRrMW51NTB3aDEwNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/623GsYzT908Z63VOs1/giphy.gif",
 "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXdqc3hmaWRsazBpa25ubnhoaHllMW13dTdnenlkd2FpbHNuanFqdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1W40UWS9peSru/giphy.gif"
]

const incorrectGifs = [
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3Jld29hYXZjMjN5cjV4aTR6cjFsaml3cnVvdWd5MTZ0MTd1OW9zMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/McmEgVHMekWQ/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmVmaHNxMWxuNzNraXBiczY2Y2c4eW5nbTZ0cjE2d2Z0cXl5YmM1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o85xC73J7y0c9wJWM/giphy.gif",
 "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",
 "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzB4endwNDlhM2tjbXhvb3RtN3pwM29ndndhZGdxNXN5cjZ2NThrMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RLi2oeVZiVkE8/giphy.gif",
 "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamQ0eXg0eGd3dnFxdGdvY3J1ZmE2MHVjdGl2OWMybmZ4eng2aG50eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uSoDr54W9M3uSBiTST/giphy.gif",
 "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGlkdjRqajV6OXN2azk3eGM4eWo2NnY3Y2NrYnh3dTd5NWoydWZiOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8ezz6fUfcWYlDFtKxK/giphy.gif",
 "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2p4aTVwcHFqM3FsaXVtdnUwbmI4NGhjd2I2MmVydWphZ3F5cTNlMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uN0SyFsLsXQ9MbS05S/giphy.gif"
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
 "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXE3ZmViOHUyeTlkMDRvanZpYzdzNTg5Z2FnbzAwaHFmeDVteG00YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H4DjXQXamtTiIuCcRU/giphy.gif"



]

export default function Quiz() {

  const navigate = useNavigate()

  const [currentQuestion, setCurrentQuestion] = useState(null)
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
    setTimeLeft(20)
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
