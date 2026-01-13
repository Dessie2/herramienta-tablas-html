import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Concepts from "./pages/Concepts"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concepts" element={<Concepts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
