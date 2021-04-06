import React from "react";

const Content = () => {
  return (
    <main>
      <div className="container">
        <div className="main_info">
          <h1>Modelki</h1>
        </div>
        <div className="photobox">
          <div className="phototile">
            <a href="#">
              <img src="../images/Photomodel3.jpg" alt="Kasia" />
            </a>
            <span className="name">Kasia</span>
          </div>
          <div className="phototile">
            <a href="#">
              <img src="../images/Photomodel2.jpg" alt="Kasia" />
            </a>
            <span className="name">Zosia</span>
          </div>
          <div className="phototile">
            <a href="#">
              <img src="../images/Photomodel2.jpg" alt="Kasia" />
            </a>
            <span className="name">Tatiana</span>
          </div>
          <div className="phototile">
            <a href="#">
              <img src="../images/Photomodel2.jpg" alt="Kasia" />
            </a>
            <span className="name">Małgorzata</span>
          </div>
        </div>
        <div className="photobox">
          <div className="phototile">
            <a href="#">
              <img src="../images/Photomodel2.jpg" alt="Kasia" />
            </a>
            <span className="name">Kasia</span>
          </div>
          <div className="phototile">
            <a href="#">
              <img src="../images/Photomodel2.jpg" alt="Kasia" />
            </a>
            <span className="name">Zosia</span>
          </div>
          <div className="phototile">
            <a href="#">
              <img src="../images/Photomodel2.jpg" alt="Kasia" />
            </a>
            <span className="name">Tatiana</span>
          </div>
          <div className="phototile">
            <a href="#">
              <img src="../images/Photomodel2.jpg" alt="Kasia" />
              {/* test */}
            </a>
            <span className="name">Małgorzata</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Content };
