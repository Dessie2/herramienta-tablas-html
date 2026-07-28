import { useParams } from "react-router-dom"
import Table from "./table"
import TH from "./th"
import THead from "./thead"
import Tbody from "./tbody"
import TR from "./tr"
import TD from "./td"
import Caption from "./caption"
import TFoot from "./tfoot"


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
