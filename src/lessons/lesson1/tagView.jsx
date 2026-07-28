import { useParams } from "react-router-dom"
import Table from "./Table"
import TH from "./TH"
import THead from "./thead"
import Tbody from "./Tbody"
import TR from "./TR"
import TD from "./TD"
import Caption from "./Caption"
import TFoot from "./TFoot"


const tagComponents = {
  table: Table,
  th : TH,
  thead: THead,
  tbody: Tbody,
  tr: TR,
  td:TD,
  caption: Caption,
  tfoot:TFoot
}

export default function TagView() {
  const { tagName } = useParams()
  const Component = tagComponents[tagName]

  return <Component />
}
