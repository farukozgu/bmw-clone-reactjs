import React from "react";

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
            alt="BMW Logo"
          />
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
      </header>
    </>
  );
}

export default Header;
