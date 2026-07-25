import AttributeLayout from "../../../components/AttributeLayout"

export default function Bordercolor() {
  const paragraphs = [
    <>
      El atributo <span className="font-bold text-amarillo">bordercolor</span> cambia
      el color del borde de la tabla. Su valor puede ser el nombre en inglés
      de un color o su código RGB/hexadecimal precedido por el símbolo{" "}
      <span className="font-bold text-amarillo">#</span>.
    </>,
    <>
      Para que este atributo tenga efecto visible, la tabla debe tener
      además un valor de{" "}
      <span className="font-bold text-amarillo">border</span> mayor a 0,
      pues es ese borde el que cambiará de color.
    </>,
    <>
      Se declara así:{" "}
      <span className="font-bold text-amarillo">
        &lt;table border="4" bordercolor="#D19800"&gt;
      </span>
      .
    </>,
  ]

  const codeSnippet = `<table border="4" bordercolor="#D19800">
  <tr>
    <td>Celda A1</td>
    <td>Celda A2</td>
  </tr>
</table>`

  const sinBordercolor = (
    <table border="4">
      <tbody>
        <tr>
          <td className="px-3 py-1">Celda A1</td>
          <td className="px-3 py-1">Celda A2</td>
        </tr>
      </tbody>
    </table>
  )

  const conBordercolor = (
    <table border="4" style={{ borderColor: "#D19800" }}>
      <tbody>
        <tr>
          <td className="px-3 py-1" style={{ borderColor: "#D19800" }}>
            Celda A1
          </td>
          <td className="px-3 py-1" style={{ borderColor: "#D19800" }}>
            Celda A2
          </td>
        </tr>
      </tbody>
    </table>
  )

  return (
    <AttributeLayout
      tagLabel="bordercolor"
      paragraphs={paragraphs}
      codeSnippet={codeSnippet}
      examples={[
        { label: "Sin bordercolor", table: sinBordercolor },
        { label: 'Con bordercolor="#D19800"', table: conBordercolor },
      ]}
    />
  )
}
