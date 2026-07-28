import { useNavigate } from 'react-router-dom';
import tecnm from "../assets/images/logos/Logo_Tecnm.svg";
import itm from "../assets/images/logos/Logo_ITM.svg";
import mono from "../assets/images/logos/LogoHDEK_Blanc.svg";
import tabla from "../assets/images/logos/Tabla-Home.svg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-grisbg flex flex-col font-sans overflow-x-hidden">

      <header className="p-2 sm:p-3 h-14 sm:h-20 flex justify-start items-center gap-3 sm:gap-8 shrink-0">
        <img src={tecnm} alt="TecNM" className="h-10 sm:h-16 object-contain" />
        <img src={itm} alt="ITM" className="h-10 sm:h-16 object-contain" />
      </header>

      <main className="flex-grow px-4 sm:px-8 md:px-20 py-6 sm:py-10">
        <div className="content-container flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">

        <div className="flex-1 max-w-2xl text-left w-full min-w-0">
          <h1 className="text-[2rem] sm:text-[50px] md:text-[80px] font-[900] text-azul leading-[0.95] sm:leading-[0.9] mb-6 sm:mb-8 tracking-tighter uppercase">
            Herramienta <br />
            Interactiva <br />
            para crear <br />
            Tablas en HTML.
          </h1>

        <p className="text-[#99A7BD] text-lg sm:text-2xl md:text-3xl font-bold max-w-2xl leading-tight mb-8 sm:mb-14">
            Domina la creación de tablas HTML de forma rápida y práctica, 
            desde lo básico hasta técnicas avanzadas, 
            con nuestra herramienta interactiva.
            </p>
          <button
  onClick={() => navigate("/concepts")}
  className="
    relative overflow-hidden group
    bg-azul text-blanco
    font-bold py-2.5 px-6 sm:px-8 rounded-md text-base sm:text-xl
    shadow-[6px_6px_0px_rgba(0,0,0,0.2)]
    transition-all active:translate-y-1 active:shadow-none
  "
>
  <span className="relative z-10 transition-colors duration-500 group-hover:text-blanco">
    Empezar a Crear Tablas
  </span>

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

        <div className="flex-1 flex justify-center items-center w-full min-w-0">
          <img
            src={tabla}
            alt="Tabla-Ejemplo"
            className="w-full max-w-[280px] sm:max-w-[420px] md:max-w-[600px] mx-auto h-auto object-contain"
          />
        </div>
        </div>
      </main>

      <footer className="relative bg-azul text-blanco py-4 px-4 sm:px-12 flex flex-col sm:flex-row justify-center items-center gap-3 text-xs font-medium shrink-0">
        <p className="text-center">© 2025 EK-HDZ. Todos los derechos reservados.</p>
         <img src={mono} alt="LogoHDEK" className="sm:absolute sm:right-12 h-7 sm:h-8 opacity-80"/>
      </footer>
    </div>
  );
};

export default Home;