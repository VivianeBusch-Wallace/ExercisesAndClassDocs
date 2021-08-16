import React, { useState } from "react";
// import "./App.css"; // do I need to import it here, too? I forgot
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faEye } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [theme, setTheme] = useState("regular");
  function mode() {
    switch (theme) {
      case "sunny-mode":
        setTheme("dark-mode");
        break;
      case "dark-mode":
        setTheme("regular");
        break;
      case "regular":
        setTheme("sunny-mode");
        break;
      default:
        break;
    }
  }

  return (
    <nav className={`navigation-bar ${theme}`}>
      <ul>
        <li>
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#something" className="nav-link">
            Something
          </a>
        </li>
        <li onClick={mode}>
          {theme === "regular" && (
            <FontAwesomeIcon icon={faEye} className="icon" />
          )}
          {theme === "sunny-mode" && (
            <FontAwesomeIcon icon={faSun} className="icon" />
          )}
          {theme === "dark-mode" && (
            <FontAwesomeIcon icon={faMoon} className="icon" />
          )}
          {/* <FontAwesomeIcon icon={faMoon} className="icon" /> */}
          <span>Change mode</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
