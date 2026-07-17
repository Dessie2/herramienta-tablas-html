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
import Width from "./lessons/lesson2/relAspc/Width"
import Border from "./lessons/lesson2/relAspc/Border"
import Cellpadding from "./lessons/lesson2/relAspc/Cellpadding"
import Cellspacing from "./lessons/lesson2/relAspc/Cellspacing"
import Height from "./lessons/lesson2/relAspc/Height"
import Align from "./lessons/lesson2/relAspc/Align"
import Id from "./lessons/lesson2/global/Id"
import ClassAttr from "./lessons/lesson2/global/Class"
import Style from "./lessons/lesson2/global/Style"
import Title from "./lessons/lesson2/global/Title"
import Bgcolor from "./lessons/lesson2/estilo/Bgcolor"
import Background from "./lessons/lesson2/estilo/Background"
import Bordercolor from "./lessons/lesson2/estilo/Bordercolor"



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
        <Route path="/lessons/lesson2/relAspc/width" element={<Width />} />
        <Route path="/lessons/lesson2/relAspc/border" element={<Border />} />
        <Route path="/lessons/lesson2/relAspc/cellpadding" element={<Cellpadding />} />
        <Route path="/lessons/lesson2/relAspc/cellspacing" element={<Cellspacing />} />
        <Route path="/lessons/lesson2/relAspc/height" element={<Height />} />
        <Route path="/lessons/lesson2/relAspc/align" element={<Align />} />
        <Route path="/lessons/lesson2/global/id" element={<Id />} />
        <Route path="/lessons/lesson2/global/class" element={<ClassAttr />} />
        <Route path="/lessons/lesson2/global/style" element={<Style />} />
        <Route path="/lessons/lesson2/global/title" element={<Title />} />
        <Route path="/lessons/lesson2/estilo/bgcolor" element={<Bgcolor />} />
        <Route path="/lessons/lesson2/estilo/background" element={<Background />} />
        <Route path="/lessons/lesson2/estilo/bordercolor" element={<Bordercolor />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App