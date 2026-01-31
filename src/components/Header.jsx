import { Link } from "react-router-dom";
import tecnm from "../assets/images/logos/Logo_Tecnm.svg";
import itm from "../assets/images/logos/Logo_ITM.svg";
import mono from "../assets/images/logos/LogoHDEK.svg";

export const Header = () => {
  return (
    <header className="w-full h-16 bg-white shadow-md">
      <div className="w-full flex items-center justify-between px-0 h-full">

        <div className="flex items-center gap-4 ml-5">
          <Link to="/">
            <img 
              src={tecnm}
              alt="Logo_Tecnm" 
              className="h-14 object-contain cursor-pointer"
            />
          </Link>
          <Link to="/">
          <img 
            src={itm} 
            alt="Logo_ITM" 
            className="h-12 object-contain cursor-pointer"
          />
          </Link>
        </div>

        <div className="mr-5">
          <img 
            src={mono}
            alt="Logo Mono"
            className="h-10 object-contain"
          />
        </div>

      </div>
    </header>
  );
};
