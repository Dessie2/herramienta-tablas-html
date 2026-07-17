import { useNavigate } from 'react-router-dom';
import tecnm from "../assets/images/logos/Logo_Tecnm.svg";
import itm from "../assets/images/logos/Logo_ITM.svg";
import mono from "../assets/images/logos/LogoHDEK_Blanc.svg";
import tabla from "../assets/images/logos/Tabla-Home.svg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-grisbg flex flex-col font-sans overflow-x-hidden">

      <header className="p-2 h-20 flex justify-start items-center gap-8">
        <img src={tecnm} alt="TecNM" className="h-16 object-contain" />
        <img src={itm} alt="ITM" className="h-16 object-contain" />
      </header>


      {/* Contenido Principal */}
      <main className="flex-grow px-8 md:px-20 py-10">
        <div className="content-container flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Texto y Botón */}
        <div className="flex-1 max-w-2xl text-left">
          <h1 className="text-[50px] md:text-[80px] font-[900] text-azul leading-[0.9] mb-8 tracking-tighter uppercase">
            Herramienta <br />
            Interactiva <br />
            para crear <br />
            Tablas en HTML.
          </h1>

        <p className="text-[#99A7BD] text-2xl md:text-3xl font-bold max-w-2xl leading-tight mb-14">
            Domina la creación de tablas HTML de forma rápida y práctica, 
            desde lo básico hasta técnicas avanzadas, 
            con nuestra herramienta interactiva.
            </p>
          <button
  onClick={() => navigate("/concepts")}
  className="
    relative overflow-hidden group
    bg-azul text-blanco
    font-bold py-2 px-8 rounded-md text-xl
    shadow-[6px_6px_0px_rgba(0,0,0,0.2)]
    transition-all active:translate-y-1 active:shadow-none
  "
>
  {/* Texto */}
  <span className="relative z-10 transition-colors duration-500 group-hover:text-blanco">
    Empezar a Crear Tablas
  </span>

  {/* Capa animada (relleno completo) */}
  <span
    className="
      absolute inset-0
      bg-guinda
      translate-y-full
      group-hover:translate-y-0
      transition-transform duration-500 ease-in-out
    "
  />
</button>  
        </div>
        {/* Imagen de la Tabla */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative group">
            <img src={tabla} alt="Tabla-Ejemplo" className="w-[600px] mx-auto h-auto -mt-26 object-contain" />
          </div>
        </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-azul text-blanco py-4 px-12 flex justify-between items-center text-xs font-medium">
        <p>© 2025 EK-HDZ. Todos los derechos reservados.</p>
        <img src={mono} alt="LogoHDEK" className="h-8 opacity-80 blanco" />
      </footer>
    </div>
  );
};

export default Home;