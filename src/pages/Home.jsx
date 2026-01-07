import React from 'react';

const Home = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-[#E6EDF1] flex flex-col font-sans overflow-x-hidden">
      {/* Navbar con Logos */}
      <header className="p-6 flex justify-start items-center gap-6">
        <img src="/logo-tecnm.png" alt="TecNM" className="h-14 object-contain" />
        <img src="/logo-itp.png" alt="ITP" className="h-14 object-contain" />
      </header>

      {/* Contenido Principal */}
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-between px-8 md:px-20 py-10 gap-10">
        
        {/* Texto y Botón */}
        <div className="flex-1 max-w-2xl text-left">
          <h1 className="text-[50px] md:text-[80px] font-[900] text-[#1B396A] leading-[0.9] mb-8 tracking-tighter uppercase">
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
            onClick={onStart}
            className="bg-[#611232] hover:bg-[#4d0e28] text-white font-bold py-3 px-10 rounded-md text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-all active:translate-y-1 active:shadow-none"
          >
            Empezar a Crear Tablas
          </button>
        </div>

        {/* Imagen de la Tabla */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-black opacity-10 blur-xl rounded-lg"></div>
            <img 
              src="/ejemplo-tabla.png" 
              alt="Ejemplo de tabla" 
              className="relative w-full max-w-md shadow-2xl rounded-sm border border-gray-200"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1B396A] text-white py-4 px-12 flex justify-between items-center text-xs font-medium">
        <p>© 2025 EK-HDZ. Todos los derechos reservados.</p>
        <img src="/logo-equipo.png" alt="Logo" className="h-6 opacity-80" />
      </footer>
    </div>
  );
};

export default Home;