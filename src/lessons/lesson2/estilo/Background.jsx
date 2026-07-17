import AttributeLayout from "../../../components/AttributeLayout"

export default function Background() {
  const paragraphs = [
    <>
      El atributo <span className="font-bold text-amarillo">background</span> aplica
      una imagen como fondo de la tabla (o de una celda), en lugar de un
      color sólido.
    </>,
    <>
      Si este atributo está presente, entonces{" "}
      <span className="font-bold text-amarillo">bgcolor</span> de la celda,{" "}
      <span className="font-bold text-amarillo">bgcolor</span> de la tabla y{" "}
      <span className="font-bold text-amarillo">background</span> de la
      tabla dejan de tener efecto en esa celda en concreto: la imagen tiene
      prioridad sobre el color de fondo.
    </>,
    <>
      Se declara así:{" "}
      <span className="font-bold text-amarillo">
        &lt;table background="fondo.png"&gt;
      </span>
      . En el ejemplo de la derecha se simula el patrón de una imagen de
      fondo con un patrón de rayas.
    </>,
  ]

  const codeSnippet = `<table border="1" background="fondo.png">
  <tr>
    <td>Celda A1</td>
    <td>Celda A2</td>
  </tr>
</table>`

  const sinBackground = (
    <table border="1">
      <tbody>
        <tr>
          <td className="px-3 py-1">Celda A1</td>
          <td className="px-3 py-1">Celda A2</td>
        </tr>
      </tbody>
    </table>
  )

  const conBackground = (
    <table
      border="1"
      className="text-blanco"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, #1B396A, #1B396A 10px, #D19800 10px, #D19800 20px)",
      }}
    >
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
      tagLabel="background"
      paragraphs={paragraphs}
      codeSnippet={codeSnippet}
      examples={[
        { label: "Sin background", table: sinBackground },
        { label: "Con background (imagen simulada)", table: conBackground },
      ]}
      videoNote="Espacio reservado para el video: aplicar una imagen de fondo con background."
    />
  )
}
