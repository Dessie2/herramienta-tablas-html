import AttributeLayout from "../../../components/AttributeLayout"

export default function Style() {
  const paragraphs = [
    <>
      El atributo <span className="font-bold text-amarillo">style</span> contiene
      declaraciones de estilo CSS que se aplican directamente a un elemento,
      sin necesidad de una hoja de estilos externa.
    </>,
    <>
      Este atributo no debe usarse para comunicar información semántica: si
      todo el estilo fuera removido, la página debería seguir siendo
      semánticamente correcta, es decir, debe conservar su significado y
      estructura aunque pierda su apariencia visual.
    </>,
    <>
      Se declara así:{" "}
      <span className="font-bold text-amarillo">
        &lt;table style="border: 2px solid #611232;"&gt;
      </span>
      .
    </>,
  ]

  const codeSnippet = `<table style="border: 3px solid #611232; background-color: #ecf0f5;">
  <tr>
    <td>Celda A1</td>
    <td>Celda A2</td>
  </tr>
</table>`

  const sinStyle = (
    <table className="border-2">
      <tbody>
        <tr>
          <td className="border-2 px-3 py-1">Celda A1</td>
          <td className="border-2 px-3 py-1">Celda A2</td>
        </tr>
      </tbody>
    </table>
  )

  const conStyle = (
    <table style={{ border: "3px solid #611232", backgroundColor: "#ecf0f5" }}>
      <tbody>
        <tr>
          <td className="px-3 py-1" style={{ border: "1px solid #611232" }}>
            Celda A1
          </td>
          <td className="px-3 py-1" style={{ border: "1px solid #611232" }}>
            Celda A2
          </td>
        </tr>
      </tbody>
    </table>
  )

  return (
    <AttributeLayout
      tagLabel="style"
      paragraphs={paragraphs}
      codeSnippet={codeSnippet}
      examples={[
        { label: "Tabla sin style", table: sinStyle },
        { label: "Tabla con style en línea", table: conStyle },
      ]}
    />
  )
}
