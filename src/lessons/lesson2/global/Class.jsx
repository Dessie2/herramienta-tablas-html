import AttributeLayout from "../../../components/AttributeLayout"

export default function Class() {
  const paragraphs = [
    <>
      A diferencia de <span className="font-bold text-amarillo">id</span>, el
      atributo <span className="font-bold text-amarillo">class</span> sí
      puede asignarse a más de un elemento, creando grupos de elementos que
      pertenecen a una misma clase.
    </>,
    <>
      Su valor es una lista de una o varias clases separadas por espacios.
      Estas clases permiten que CSS y JavaScript seleccionen y accedan a un
      conjunto de elementos específicos a través de selectores de clase,
      aplicando el mismo estilo a todos ellos de una sola vez.
    </>,
    <>
      Se declara así:{" "}
      <span className="font-bold text-amarillo">
        &lt;table class="tabla-datos"&gt;
      </span>
      .
    </>,
  ]

  const codeSnippet = `<table class="tabla-datos">...</table>
<table class="tabla-datos">...</table>

<style>
  .tabla-datos {
    background-color: #1B396A;
    color: white;
  }
</style>`

  const sinClass = (
    <table className="border-2">
      <tbody>
        <tr>
          <td className="border-2 px-3 py-1">Lunes</td>
          <td className="border-2 px-3 py-1">Química</td>
        </tr>
      </tbody>
    </table>
  )

  const conClaseA = (
    <table className="border-2 bg-azul text-blanco">
      <tbody>
        <tr>
          <td className="border-2 px-3 py-1">Lunes</td>
          <td className="border-2 px-3 py-1">Química</td>
        </tr>
      </tbody>
    </table>
  )

  const conClaseB = (
    <table className="border-2 bg-azul text-blanco">
      <tbody>
        <tr>
          <td className="border-2 px-3 py-1">Martes</td>
          <td className="border-2 px-3 py-1">Álgebra</td>
        </tr>
      </tbody>
    </table>
  )

  return (
    <AttributeLayout
      tagLabel="class"
      paragraphs={paragraphs}
      codeSnippet={codeSnippet}
      examples={[
        { label: "Tabla sin class", table: sinClass },
        { label: 'class="tabla-datos"', table: conClaseA },
        { label: 'class="tabla-datos"', table: conClaseB },
      ]}
    />
  )
}
