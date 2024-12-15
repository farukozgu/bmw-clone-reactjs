import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="../assets/logo.svg" alt="BMW Logo" />
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#modeller">Modeller</a>
              </li>
              <li>
                <a href="#elektrikli-modeller">%100 Elektrikli Modeller</a>
              </li>
              <li>
                <a href="#online-rezervasyon">BMW'nizi Online Rezerve Edin</a>
              </li>
              <li>
                <a href="#online-hizmetler">Online Hizmetler</a>
              </li>
              <li>
                <a href="#bmw-kesfet">BMW'yi Keşfedin</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
