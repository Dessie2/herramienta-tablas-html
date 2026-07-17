import AttributeLayout from "../../../components/AttributeLayout"

export default function Title() {
  const paragraphs = [
    <>
      El atributo <span className="font-bold text-amarillo">title</span> agrega
      un texto informativo adicional sobre el elemento. Debe ser breve y
      descriptivo en su contenido, pues es lo que otras personas verán, por
      ejemplo, cuando pasen el cursor sobre el elemento.
    </>,
    <>
      La mayoría de los navegadores muestran este texto como un pequeño
      recuadro (tooltip) al posicionar el mouse sobre la tabla, lo cual
      resulta útil para dar contexto extra sin sobrecargar el contenido
      visible de la página.
    </>,
    <>
      Se declara así:{" "}
      <span className="font-bold text-amarillo">
        &lt;table title="Tabla de horarios"&gt;
      </span>
      .
    </>,
  ]

  const codeSnippet = `<table title="Tabla de horarios de clases">
  <tr>
    <td>Lunes</td>
    <td>Química</td>
  </tr>
</table>`

  const sinTitle = (
    <table className="border-2">
      <tbody>
        <tr>
          <td className="border-2 px-3 py-1">Lunes</td>
          <td className="border-2 px-3 py-1">Química</td>
        </tr>
      </tbody>
    </table>
  )

  const conTitle = (
    <table
      className="border-2 cursor-help"
      title="Tabla de horarios de clases"
    >
      <tbody>
        <tr>
          <td className="border-2 px-3 py-1">Lunes</td>
          <td className="border-2 px-3 py-1">Química</td>
        </tr>
      </tbody>
    </table>
  )

  return (
    <AttributeLayout
      tagLabel="title"
      paragraphs={paragraphs}
      codeSnippet={codeSnippet}
      examples={[
        { label: "Tabla sin title", table: sinTitle },
        {
          label: "Tabla con title (pasa el mouse encima)",
          table: conTitle,
        },
      ]}
      videoNote="Espacio reservado para el video: cómo se muestra el tooltip del atributo title."
    />
  )
}
