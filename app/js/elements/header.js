import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <div className="logo">
          <a href="#">
            <img src="../images/logo.png" alt="pagelogo" />
          </a>
        </div>
        <nav>
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul>
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
