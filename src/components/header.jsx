import { Link } from "react-router-dom";
import tecnm from "../assets/images/logos/logo_tecnm.svg";
import itm from "../assets/images/logos/logo_itm.svg";
import mono from "../assets/images/logos/logohdek_blanc.svg";

export const Header = () => {
  return (
    <header className="w-full h-14 sm:h-16 blanco shadow-md shrink-0">
      <div className="w-full flex items-center justify-between px-2 sm:px-0 h-full min-w-0">

        <div className="flex items-center gap-2 sm:gap-4 ml-1 sm:ml-5 min-w-0">
          <Link to="/" className="shrink-0">
            <img 
              src={tecnm}
              alt="Logo_Tecnm" 
              className="h-9 sm:h-12 md:h-14 object-contain cursor-pointer"
            />
          </Link>
          <Link to="/" className="shrink-0">
          <img 
            src={itm} 
            alt="Logo_ITM" 
            className="h-8 sm:h-10 md:h-12 object-contain cursor-pointer"
          />
          </Link>
        </div>

        <div className="mr-1 sm:mr-5 shrink-0">
          <img 
            src={mono}
            alt="Logo Mono"
            className="h-8 sm:h-10 object-contain"
          />
        </div>

      </div>
    </header>
  );
};
