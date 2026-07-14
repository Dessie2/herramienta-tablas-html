import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Concepts from "./pages/Concepts"
import TagView from "./lessons/lesson1/TagView"
import Table_more from "./lessons/lesson1/Table_more"
import TH_More from "./lessons/lesson1/TH_More"
import Thead_more from "./lessons/lesson1/Thead_more"
import Tbody_more from "./lessons/lesson1/Tbody_more"
import TR_more from "./lessons/lesson1/TR_more"
import TD_more from "./lessons/lesson1/TD_more"
import Caption_more from "./lessons/lesson1/Caption_more"
import TFoot_more from "./lessons/lesson1/TFoot_more"
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
        <Route path="/lessons/lesson1/Thead_more" element={<Thead_more />} />
        <Route path="/lessons/lesson1/Tbody_more" element={<Tbody_more />} />
        <Route path="/lessons/lesson1/TR_more" element={<TR_more />} />
        <Route path="/lessons/lesson1/TD_more" element={<TD_more />} />
        <Route path="/lessons/lesson1/Caption_more" element={<Caption_more />} />
        <Route path="/lessons/lesson1/TFoot_more" element={<TFoot_more />} />
        <Route path="/quiz" element={<QuizPage/>}/>
        <Route path="/attributes" element={<Attributes />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
