import React from "react";
// import "./App.css"; // do I need to import it here, too? I forgot
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#something">Something</a>
        </li>
      </ul>
      <div>
        <FontAwesomeIcon icon={faSun} />
      </div>
    </nav>
  );
};

export default Navigation;
