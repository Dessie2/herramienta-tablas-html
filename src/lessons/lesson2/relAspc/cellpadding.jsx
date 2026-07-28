import AttributeLayout from "../../../components/attributeLayout"

export default function Cellpadding() {
  const paragraphs = [
    <>
      El atributo <span className="font-bold text-amarillo">cellpadding</span> controla
      el espacio interno de cada celda, es decir, la distancia entre el
      borde de la celda y su contenido.
    </>,
    <>
      Su valor se expresa en píxeles. Entre mayor sea el número, más
      separación habrá entre el texto (o cualquier contenido) y el borde de
      la celda que lo contiene.
    </>,
    <>
      Se declara así:{" "}
      <span className="font-bold text-amarillo">&lt;table cellpadding="15"&gt;</span>.
    </>,
  ]

  const codeSnippet = `<table border="1" cellpadding="15">
  <tr>
    <td>Celda A1</td>
    <td>Celda A2</td>
  </tr>
</table>`

  const sinCellpadding = (
    <table border="1" cellPadding="0">
      <tbody>
        <tr>
          <td>Celda A1</td>
          <td>Celda A2</td>
        </tr>
      </tbody>
    </table>
  )

  const conCellpadding = (
    <table border="1" cellPadding="15">
      <tbody>
        <tr>
          <td>Celda A1</td>
          <td>Celda A2</td>
        </tr>
      </tbody>
    </table>
  )

  return (
    <AttributeLayout
      tagLabel="cellpadding"
      paragraphs={paragraphs}
      codeSnippet={codeSnippet}
      examples={[
        { label: "Sin cellpadding", table: sinCellpadding },
        { label: 'Con cellpadding="15"', table: conCellpadding },
      ]}
    />
  )
}
