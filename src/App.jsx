import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Concepts from "./pages/Concepts"
import TagView from "./lessons/lesson1/TagView"
import Table_more from "./lessons/lesson1/Table_more"
import TH_More from "./lessons/lesson1/TH_More"
import QuizPage from "./pages/QuizPage"
import Attributes from "./pages/attributes"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concepts" element={<Concepts />} />
        <Route path="/lessons/lesson1/:tagName" element={<TagView />} />
        <Route path="/lessons/lesson1/Table_more" element={<Table_more />} />
        <Route path="/lessons/lesson1/TH_More" element={<TH_More />} />
        <Route path="/quiz" element={<QuizPage/>}/>
        <Route path="/attributes" element={<Attributes />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
