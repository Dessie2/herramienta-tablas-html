import AttributeLayout from "../../../components/AttributeLayout"

export default function Align() {
  const paragraphs = [
    <>
      El atributo <span className="font-bold text-amarillo">align</span> indica
      la alineación del contenido dentro de la celda. Toma tres valores
      posibles:{" "}
      <span className="font-bold text-amarillo">"left"</span> (izquierda),{" "}
      <span className="font-bold text-amarillo">"center"</span> (centrado) o{" "}
      <span className="font-bold text-amarillo">"right"</span> (derecha).
    </>,
    <>
      Este atributo puede colocarse en la etiqueta{" "}
      <span className="font-bold text-amarillo">&lt;table&gt;</span> para
      alinear la tabla completa dentro de la página, o dentro de una celda
      para alinear únicamente su contenido.
    </>,
    <>
      Se declara así:{" "}
      <span className="font-bold text-amarillo">&lt;td align="center"&gt;</span>.
    </>,
  ]

  const codeSnippet = `<table border="1">
  <tr>
    <td align="left">Izquierda</td>
    <td align="center">Centro</td>
    <td align="right">Derecha</td>
  </tr>
</table>`

  const alignLeft = (
    <table border="1" className="w-40">
      <tbody>
        <tr>
          <td align="left" className="px-3 py-2 h-16">
            Izquierda
          </td>
        </tr>
      </tbody>
    </table>
  )

  const alignCenter = (
    <table border="1" className="w-40">
      <tbody>
        <tr>
          <td align="center" className="px-3 py-2 h-16">
            Centro
          </td>
        </tr>
      </tbody>
    </table>
  )

  const alignRight = (
    <table border="1" className="w-40">
      <tbody>
        <tr>
          <td align="right" className="px-3 py-2 h-16">
            Derecha
          </td>
        </tr>
      </tbody>
    </table>
  )

  return (
    <AttributeLayout
      tagLabel="align"
      paragraphs={paragraphs}
      codeSnippet={codeSnippet}
      examples={[
        { label: 'align="left"', table: alignLeft },
        { label: 'align="center"', table: alignCenter },
        { label: 'align="right"', table: alignRight },
      ]}
    />
  )
}
