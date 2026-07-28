import AttributeLayout from "../../../components/attributeLayout"

export default function Id() {
  const paragraphs = [
    <>
      El atributo <span className="font-bold text-amarillo">id</span> asigna
      un identificador único a un elemento. Ningún otro elemento de la página
      debe repetir ese mismo valor, ya que su función es identificar a esa
      tabla de forma exclusiva.
    </>,
    <>
      Gracias a esta unicidad, <span className="font-bold text-amarillo">id</span> se
      usa como selector en hojas de estilo (CSS), como destino de un enlace
      de hipertexto, como referencia dentro de un script y, en general, como
      medio para que el navegador y el desarrollador identifiquen un
      elemento en concreto.
    </>,
    <>
      Se declara colocando el atributo dentro de la etiqueta de apertura:{" "}
      <span className="font-bold text-amarillo">
        &lt;table id="tablaPrecios"&gt;
      </span>
      .
    </>,
  ]

  const codeSnippet = `<table id="tablaPrecios">
  <tr>
    <td>Producto</td>
    <td>Precio</td>
  </tr>
</table>

<style>
  #tablaPrecios {
    border: 3px solid #D19800;
  }
</style>`

  const sinId = (
    <table className="border-2">
      <tbody>
        <tr>
          <td className="border-2 px-3 py-1">Producto</td>
          <td className="border-2 px-3 py-1">Precio</td>
        </tr>
        <tr>
          <td className="border-2 px-3 py-1">Cuaderno</td>
          <td className="border-2 px-3 py-1">$25</td>
        </tr>
      </tbody>
    </table>
  )

  const conId = (
    <table id="tablaPrecios" className="border-4 border-amarillo">
      <tbody>
        <tr>
          <td className="border-2 px-3 py-1">Producto</td>
          <td className="border-2 px-3 py-1">Precio</td>
        </tr>
        <tr>
          <td className="border-2 px-3 py-1">Cuaderno</td>
          <td className="border-2 px-3 py-1">$25</td>
        </tr>
      </tbody>
    </table>
  )

  return (
    <AttributeLayout
      tagLabel="id"
      paragraphs={paragraphs}
      codeSnippet={codeSnippet}
      examples={[
        { label: "Tabla sin id", table: sinId },
        {
          label: 'Tabla con id="tablaPrecios"',
          table: conId,
        },
      ]}
    />
  )
}
