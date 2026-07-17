import AttributeLayout from "../../../components/AttributeLayout"

export default function Height() {
  const paragraphs = [
    <>
      El atributo <span className="font-bold text-amarillo">height</span> define
      la altura de la tabla, de forma muy similar a como{" "}
      <span className="font-bold text-amarillo">width</span> define su
      ancho.
    </>,
    <>
      Su valor puede indicarse en píxeles, fijando una altura exacta, o en
      porcentaje, ajustándose respecto al espacio disponible del contenedor
      en el que se encuentra la tabla.
    </>,
    <>
      Se declara así:{" "}
      <span className="font-bold text-amarillo">&lt;table height="200"&gt;</span>.
    </>,
  ]

  const codeSnippet = `<table border="1" height="150">
  <tr>
    <td>Fila 1</td>
  </tr>
  <tr>
    <td>Fila 2</td>
  </tr>
</table>`

  const sinHeight = (
    <table border="1">
      <tbody>
        <tr>
          <td className="px-3 py-1">Fila 1</td>
        </tr>
        <tr>
          <td className="px-3 py-1">Fila 2</td>
        </tr>
      </tbody>
    </table>
  )

  const conHeight = (
    <table border="1" height="150">
      <tbody>
        <tr>
          <td className="px-3 py-1">Fila 1</td>
        </tr>
        <tr>
          <td className="px-3 py-1">Fila 2</td>
        </tr>
      </tbody>
    </table>
  )

  return (
    <AttributeLayout
      tagLabel="height"
      paragraphs={paragraphs}
      codeSnippet={codeSnippet}
      examples={[
        { label: "Sin height", table: sinHeight },
        { label: 'Con height="150"', table: conHeight },
      ]}
      videoNote="Espacio reservado para el video: efecto del atributo height sobre la tabla."
    />
  )
}
