import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Header = () => {
  
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <div className="header_container">
        <div className="logo">
          <a href="#">
            <img src="../images/logo2.jpg" alt="pagelogo" />
          </a>
        </div>
        <nav>
          <div className="hamburger" onClick={handleToggle}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className={isActive ? "close" : "open"}>
            <a href="#">
              <li>
                <span className="menuBTN">MODELKI</span>
              </li>
            </a>
            <a href="#">
              <li>
                <span className="menuBTN">CASTING</span>
              </li>
            </a>
            <a href="#">
              <li>
                <span className="menuBTN">KONTAKT</span>
              </li>
            </a>
            <a href="#">
              <li>
                <FaInstagram />
              </li>
            </a>
            <a href="#">
              <li>
                <FaFacebookSquare />
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
