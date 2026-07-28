import AttributeLayout from "../../../components/attributeLayout"

export default function Border() {
  const paragraphs = [
    <>
      El atributo <span className="font-bold text-amarillo">border</span> indica
      el grosor del borde de la tabla. Su valor es un número que representa
      el ancho en píxeles de la línea que rodea la tabla y sus celdas.
    </>,
    <>
      Si no se especifica, o se usa{" "}
      <span className="font-bold text-amarillo">border="0"</span>, la tabla no
      mostrará ninguna línea visible, aunque el elemento sigue existiendo y
      ocupando su espacio.
    </>,
    <>
      Se declara así:{" "}
      <span className="font-bold text-amarillo">&lt;table border="1"&gt;</span>.
    </>,
  ]

  const codeSnippet = `<table border="1">
  <tr>
    <td>Encabezado 1</td>
    <td>Encabezado 2</td>
  </tr>
  <tr>
    <td>Dato Fila 1 Columna 1</td>
    <td>Dato Fila 1 Columna 2</td>
  </tr>
</table>`

  const sinBorder = (
    <table>
      <tbody>
        <tr>
          <td className="px-3 py-1">Encabezado 1</td>
          <td className="px-3 py-1">Encabezado 2</td>
        </tr>
        <tr>
          <td className="px-3 py-1">Dato Fila 1 Columna 1</td>
          <td className="px-3 py-1">Dato Fila 1 Columna 2</td>
        </tr>
      </tbody>
    </table>
  )

  const conBorder = (
    <table border="1">
      <tbody>
        <tr>
          <td className="px-3 py-1">Encabezado 1</td>
          <td className="px-3 py-1">Encabezado 2</td>
        </tr>
        <tr>
          <td className="px-3 py-1">Dato Fila 1 Columna 1</td>
          <td className="px-3 py-1">Dato Fila 1 Columna 2</td>
        </tr>
      </tbody>
    </table>
  )

  return (
    <AttributeLayout
      tagLabel="border"
      paragraphs={paragraphs}
      codeSnippet={codeSnippet}
      examples={[
        { label: "Sin border", table: sinBorder },
        { label: 'Con border="1"', table: conBorder },
      ]}
    />
  )
}
