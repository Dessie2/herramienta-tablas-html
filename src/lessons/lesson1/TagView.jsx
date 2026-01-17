import { useParams } from "react-router-dom"
import Table from "./Table"

const tagComponents = {
  table: Table
}

export default function TagView() {
  const { tagName } = useParams()
  const Component = tagComponents[tagName]

  return <Component />
}
