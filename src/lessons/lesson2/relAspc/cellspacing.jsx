import AttributeLayout from "../../../components/AttributeLayout"

export default function Cellspacing() {
  const paragraphs = [
    <>
      El atributo <span className="font-bold text-amarillo">cellspacing</span> controla
      el espacio entre las celdas de la tabla, es decir, la separación que
      existe entre una celda y otra.
    </>,
    <>
      A diferencia de <span className="font-bold text-amarillo">cellpadding</span>,
      que actúa dentro de cada celda,{" "}
      <span className="font-bold text-amarillo">cellspacing</span> actúa en
      el espacio exterior, separando visualmente las celdas entre sí.
    </>,
    <>
      Se declara así:{" "}
      <span className="font-bold text-amarillo">&lt;table cellspacing="10"&gt;</span>.
    </>,
  ]

  const codeSnippet = `<table border="1" cellspacing="10">
  <tr>
    <td>Celda A1</td>
    <td>Celda A2</td>
  </tr>
</table>`

  const sinCellspacing = (
    <table border="1" cellSpacing="0">
      <tbody>
        <tr>
          <td className="px-3 py-1">Celda A1</td>
          <td className="px-3 py-1">Celda A2</td>
        </tr>
      </tbody>
    </table>
  )

  const conCellspacing = (
    <table border="1" cellSpacing="10">
      <tbody>
        <tr>
          <td className="px-3 py-1">Celda A1</td>
          <td className="px-3 py-1">Celda A2</td>
        </tr>
      </tbody>
    </table>
  )

  return (
    <AttributeLayout
      tagLabel="cellspacing"
      paragraphs={paragraphs}
      codeSnippet={codeSnippet}
      examples={[
        { label: "Sin cellspacing", table: sinCellspacing },
        { label: 'Con cellspacing="10"', table: conCellspacing },
      ]}
    />
  )
}
