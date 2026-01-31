import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"
import { useNavigate } from "react-router-dom"

export default function Attributes() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        {/* CONTENIDO */}
        <main className="flex-1 bg-[#EEF3F6] px-10 py-8">

          {/* TÍTULO */}
          <h1 className="text-3xl font-bold text-[#1E3A5F] text-center mb-4">
            Atributos de la tabla
          </h1>

          {/* DESCRIPCIÓN */}
          <p className="max-w-4xl mx-auto text-center text-gray-700 mb-8">
            Las tablas pueden tener diferentes{" "}
            <span className="text-orange-500 font-semibold">atributos</span>{" "}
            para mejorar su estilización, tales como colores, formas,
            contenido y distribución. Aunque la mayoría están obsoletas
            por la estandarización de HTML5 y el uso de CSS, siguen
            sirviendo de auxiliares y son menos complejas.
          </p>

          {/* BOTONES SUPERIORES */}
          <div className="flex justify-center gap-6 mb-10">
            <button className="bg-[#6B1237] text-white px-6 py-2 rounded-lg font-medium">
              Atributos Relación-Aspecto
            </button>

            <button className="bg-[#2E5F8A] text-white px-6 py-2 rounded-lg font-medium">
              Atributos Globales
            </button>

            <button className="bg-[#2E5F8A] text-white px-6 py-2 rounded-lg font-medium">
              Atributos de Estilo
            </button>
          </div>

          {/* BLOQUE CENTRAL */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* CÓDIGO */}
            <div className="bg-[#1E1E2E] text-gray-200 rounded-xl p-6 font-mono text-sm col-span-2 relative">
              <pre className="whitespace-pre-wrap">
                {`<table border="1" width="500px">
                <caption>Tabla de Muestra</caption>
                <tbody>
                    <tr>
                    <td>Celda A1</td>
                    <td>Celda A2</td>
                    <td>Celda A3</td>
                    </tr>
                    <tr>
                    <td>Celda B1</td>
                    <td>Celda B2</td>
                    <td>Celda B3</td>
                    </tr>
                </tbody>
                </table>`}
              </pre>
            </div>

            {/* TEXTO EXPLICATIVO */}
            <div className="bg-transparent p-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                La propiedad{" "}
                <span className="font-semibold text-orange-500">width</span>{" "}
                en HTML se usa para definir el ancho de una tabla,
                controlando cuánto espacio ocupará en la página.
              </p>

              <button className="bg-[#2E5F8A] text-white px-5 py-2 rounded-lg text-sm">
                Ver más
              </button>
            </div>
          </div>

          {/* BOTONES INFERIORES */}
          <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">
            <button className="px-4 py-2 rounded-lg bg-white shadow text-sm">
              cellspacing
            </button>
            <button className="px-4 py-2 rounded-lg bg-white shadow text-sm">
              border
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#D1F0E0] shadow font-semibold text-sm">
              width
            </button>
            <button className="px-4 py-2 rounded-lg bg-white shadow text-sm">
              height
            </button>
            <button className="px-4 py-2 rounded-lg bg-white shadow text-sm">
              align
            </button>
          </div>

          {/* SIGUIENTE LECCIÓN */}
          <div className="flex justify-end mt-10">
            <button
              onClick={() => navigate("/lessons/lesson1/Table_more")}
              className="bg-[#6B1237] text-white px-6 py-2 rounded-lg font-medium"
            >
              Siguiente Lección
            </button>
          </div>

        </main>
      </div>
    </div>
  )
}
