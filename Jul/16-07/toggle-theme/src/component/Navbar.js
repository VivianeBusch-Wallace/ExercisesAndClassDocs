import React, { useState } from "react";
// import "./App.css"; // do I need to import it here, too? I forgot
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [theme, setTheme] = useState("");

  switch (icon) {
    case sun:
      setTheme("sunny-mode");
      break;
    case moon:
      SetTheme("dark-mode");
      break;
    case sun - moon:
      setTheme("regular");
  }

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
