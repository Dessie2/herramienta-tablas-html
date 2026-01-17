import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Concepts from "./pages/Concepts"
import TagView from "./lessons/lesson1/TagView"
import Table_more from "./lessons/lesson1/Table_more"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concepts" element={<Concepts />} />
        <Route path="/lessons/lesson1/:tagName" element={<TagView />} />
        <Route path="/lessons/lesson1/Table_more" element={<Table_more />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
