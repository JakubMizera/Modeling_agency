import React from "react";

const Content = () => {
  return (
    <main>
      <div className="container">
        <div className="main_info">
          <h1>Modelki</h1>
        </div>
        <div className="photogallery">
          <a href='#' className="wrapper">
            <div className="phototile tatiana">
              <span>Tatiana</span>
            </div>
          </a>
          <a href='#' className="wrapper">
            <div className="phototile gaba">
              <span>Gaba</span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export { Content };
