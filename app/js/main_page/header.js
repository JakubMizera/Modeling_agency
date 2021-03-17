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
            <div className="main_menu">
              <ul>
                <li>
                  <a href="#">
                    <span className="menuBTN">MODELKI</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="menuBTN">CASTING</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="menuBTN">KONTAKT</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export { Header };
