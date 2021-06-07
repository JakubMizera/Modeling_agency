import React, {Component} from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <main id="contact">
      <div className="contact_wrapper">
        <h1>Kontakt</h1>
        <p>
          Jeśli spodobały Ci się modelki Divine Shapes i jesteś zainteresowany
          współpracą, skontaktuj się z nami. Jesteśmy otwarci na wszystkie
          pytania oraz sugestie.
        </p>
      </div>
      <div className="contact_container">
        <div className="contact_box">
          <h2>managing director</h2>
          <span>Jan Nowak</span>
          <span>JanNowak@gmail.com</span>
        </div>
        <div className="socials">
          <h2>social media</h2>
          <div className="icons">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebookSquare />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Contact };
