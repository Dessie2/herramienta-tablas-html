import { useParams } from "react-router-dom"
import Table from "./Table"
import TH from "./TH"

const tagComponents = {
  table: Table,
  th : TH
}

export default function TagView() {
  const { tagName } = useParams()
  const Component = tagComponents[tagName]

  return <Component />
}
