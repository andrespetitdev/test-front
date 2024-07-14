import { useState } from "react";
import { InfoMenu } from "../infoMenu/InfoMenu";
import "./index.css";

export const Barra = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="barra">
      <div className="barra-content">
        <div className="menu-button" onClick={handleToggleMenu}>
          ☰
        </div>

        <div className={`select-container ${isMenuOpen ? "hidden" : ""}`}>
          <InfoMenu />
        </div>
      </div>

      <div className={`menu-desplegable ${isMenuOpen ? "abierto" : ""}`}>
        <InfoMenu />
      </div>
    </div>
  );
};
