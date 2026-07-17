import { Sidebar } from "../../../components/Sidebar"
import { Header } from "../../../components/Header"
import { useNavigate } from "react-router-dom"

export default function Width() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 bg-grisbg flex flex-col p-10">
          <div className="content-container flex flex-col flex-1">
            <h1 className="text-4xl font-extrabold text-azul text-center mb-8">
              width
            </h1>

            <div className="bg-blanco w-full min-h-[600px] rounded-md shadow-md p-10 flex flex-col">
              <div className="flex flex-col lg:flex-row gap-10 flex-1">
                {/* Texto explicativo */}
                <div className="flex flex-col text-xl gap-6 max-w-xl p-4">
                  <p>
                    La propiedad{" "}
                    <span className="font-bold text-amarillo">width</span> indica
                    cuánto espacio ocupará horizontalmente dentro de la página. Se
                    puede definir de tres maneras principales:
                  </p>

                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <span className="font-semibold">En píxeles (px):</span> fija
                      un ancho exacto, por ejemplo{" "}
                      <span className="font-bold text-amarillo">width="500"</span>{" "}
                      hará que la tabla tenga 500 píxeles de ancho.
                    </li>
                    <li>
                      <span className="font-semibold">En porcentaje (%):</span> el
                      ancho se ajusta en relación al espacio disponible en la
                      página. Por ejemplo,{" "}
                      <span className="font-bold text-amarillo">width="80%"</span>{" "}
                      hará que la tabla use el 80 % del ancho total del contenedor.
                    </li>
                    <li>
                      <span className="font-semibold">En valores automáticos:</span>{" "}
                      si no se define, el navegador ajustará el ancho de manera
                      automática según el contenido.
                    </li>
                  </ul>
                </div>

                {/* Diagrama ilustrativo */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="bg-griscroll rounded-xl p-8 w-full max-w-lg relative min-h-[420px] flex flex-col justify-center gap-8">
                    {/* width 500px */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-[#4A8FC4] w-24 h-16 rounded-sm shadow-md" />
                      <div className="flex items-center gap-2 text-blanco text-sm">
                        <svg
                          className="w-5 h-5 fill-amarillo"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                        >
                          <path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L192 64zM224 128L416 128C433.7 128 448 142.3 448 160L448 480C448 497.7 433.7 512 416 512L224 512C206.3 512 192 497.7 192 480L192 160C192 142.3 206.3 128 224 128z" />
                        </svg>
                        <span>
                          <span className="font-bold text-amarillo">width</span>="500px"
                        </span>
                      </div>
                      <span className="text-blanco/70 text-xs">500px</span>
                    </div>

                    {/* width 80% */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-[#4A8FC4] w-4/5 h-14 rounded-sm shadow-md" />
                      <div className="flex items-center gap-2 text-blanco text-sm">
                        <span className="bg-blanco/20 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                          %
                        </span>
                        <span>
                          <span className="font-bold text-amarillo">width</span>="80%"
                        </span>
                      </div>
                    </div>

                    {/* width auto */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-[#4A8FC4] px-6 py-3 rounded-md shadow-md text-blanco text-sm font-medium">
                        Contenido Variable
                      </div>
                      <div className="flex items-center gap-2 text-blanco text-sm">
                        <svg
                          className="w-5 h-5 fill-amarillo"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                        >
                          <path d="M342.6 150.6C330.1 138.1 309.9 138.1 297.4 150.6L169.4 278.6C156.9 291.1 156.9 311.3 169.4 323.8C181.9 336.3 202.1 336.3 214.6 323.8L288 250.4L288 488C288 505.7 302.3 520 320 520C337.7 520 352 505.7 352 488L352 250.4L425.4 323.8C437.9 336.3 458.1 336.3 470.6 323.8C483.1 311.3 483.1 291.1 470.6 278.6L342.6 150.6z" />
                        </svg>
                        <span>
                          <span className="font-bold text-amarillo">width</span>="auto"
                        </span>
                      </div>
                      <span className="text-blanco/70 text-xs">auto</span>
                    </div>

                    {/* Botón decorativo */}
                    <button
                      type="button"
                      className="absolute bottom-4 right-4 w-10 h-10 bg-azul text-blanco rounded-full font-bold text-lg shadow-md hover:bg-guinda transition-colors"
                      aria-label="Demostración"
                    >
                      D
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-auto pt-6">
                <button
                  onClick={() => navigate("/attributes")}
                  className="bg-guinda hover:bg-azul text-blanco font-bold py-2 px-8 rounded-md text-lg shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transition-all active:translate-y-1 active:shadow-none"
                >
                  Regresar al Menú
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
