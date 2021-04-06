import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header_container">
          <div className="logo">
            <a href="#">
              <img src="../images/logo.png" alt="pagelogo" />
            </a>
          </div>
          <nav>
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export { Header };
