import AttributeLayout from "../../../components/AttributeLayout"

const tableRows = (
  <>
    <tr>
      <td className="border px-3 py-1">Producto</td>
      <td className="border px-3 py-1">Precio</td>
    </tr>
    <tr>
      <td className="border px-3 py-1">Cuaderno</td>
      <td className="border px-3 py-1">$25</td>
    </tr>
    <tr>
      <td className="border px-3 py-1">Lápiz</td>
      <td className="border px-3 py-1">$5</td>
    </tr>
  </>
)

export default function Width() {
  const paragraphs = [
    <>
      El atributo <span className="font-bold text-amarillo">width</span> indica
      cuánto espacio ocupará horizontalmente la tabla dentro de la página. Se
      puede definir de tres maneras principales.
    </>,
    <>
      <span className="font-semibold">En píxeles (px):</span> fija un ancho exacto.
      Por ejemplo, <span className="font-bold text-amarillo">width="500"</span> hará
      que la tabla tenga 500 píxeles de ancho.
    </>,
    <>
      <span className="font-semibold">En porcentaje (%):</span> el ancho se ajusta
      en relación al espacio disponible en la página. Por ejemplo,{" "}
      <span className="font-bold text-amarillo">width="80%"</span> hará que la tabla
      use el 80 % del ancho total del contenedor.
    </>,
    <>
      <span className="font-semibold">En valores automáticos:</span> si no se define,
      el navegador ajustará el ancho de manera automática según el contenido.
    </>,
    <>
      Se declara colocando el atributo dentro de la etiqueta de apertura:{" "}
      <span className="font-bold text-amarillo">&lt;table width="500"&gt;</span>.
    </>,
  ]

  const codeSnippet = `<table border="1" width="500">
  <tr>
    <td>Producto</td>
    <td>Precio</td>
  </tr>
  <tr>
    <td>Cuaderno</td>
    <td>$25</td>
  </tr>
</table>

<table border="1" width="80%">
  ...
</table>`

  const sinWidth = (
    <table border="1" className="border-collapse">
      <tbody>{tableRows}</tbody>
    </table>
  )

  const widthPixeles = (
    <div className="overflow-x-auto max-w-full">
      <table border="1" width="500" className="border-collapse">
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  )

  const widthPorcentaje = (
    <div className="w-full min-w-[200px]">
      <table border="1" width="80%" className="border-collapse">
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  )

  return (
    <AttributeLayout
      tagLabel="width"
      paragraphs={paragraphs}
      codeSnippet={codeSnippet}
      examples={[
        { label: "Sin width (auto)", table: sinWidth },
        { label: 'Con width="500"', table: widthPixeles },
        { label: 'Con width="80%"', table: widthPorcentaje },
      ]}
    />
  )
}
