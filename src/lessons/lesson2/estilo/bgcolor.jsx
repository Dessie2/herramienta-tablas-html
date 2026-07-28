import AttributeLayout from "../../../components/attributeLayout"

export default function Bgcolor() {
  const paragraphs = [
    <>
      El atributo <span className="font-bold text-amarillo">bgcolor</span> indica
      el color de fondo de la tabla. Su valor puede ser el nombre en inglés
      de un color básico (por ejemplo{" "}
      <span className="font-bold text-amarillo">"red"</span>) o un código
      RGB/hexadecimal.
    </>,
    <>
      Este atributo ya no se recomienda, pues sus propiedades quedan
      cubiertas por las hojas de estilo (CSS). Si se desea que solo una
      celda tenga un color de fondo determinado, basta con colocar el
      atributo dentro de la etiqueta de esa celda en particular.
    </>,
    <>
      Se declara así:{" "}
      <span className="font-bold text-amarillo">&lt;table bgcolor="#1B396A"&gt;</span>.
    </>,
  ]

  const codeSnippet = `<table border="1" bgcolor="#1B396A">
  <tr>
    <td>Celda A1</td>
    <td>Celda A2</td>
  </tr>
</table>`

  const sinBgcolor = (
    <table border="1">
      <tbody>
        <tr>
          <td className="px-3 py-1">Celda A1</td>
          <td className="px-3 py-1">Celda A2</td>
        </tr>
      </tbody>
    </table>
  )

  const conBgcolor = (
    <table border="1" bgcolor="#1B396A" className="text-blanco">
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
      tagLabel="bgcolor"
      paragraphs={paragraphs}
      codeSnippet={codeSnippet}
      examples={[
        { label: "Sin bgcolor", table: sinBgcolor },
        { label: 'Con bgcolor="#1B396A"', table: conBgcolor },
      ]}
    />
  )
}
