import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg";
import location from "../assets/location.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10 d-flex align-items-center">
              <div className="logo">
                <img src={logo} alt="BMW Logo" />
              </div>
              <nav className="nav ps-4">
                <ul>
                  <li>
                    <a href="#modeller">Modeller</a>
                  </li>
                  <li>
                    <a href="#elektrikli-modeller">%100 Elektrikli Modeller</a>
                  </li>
                  <li>
                    <a href="#online-rezervasyon">
                      BMW'nizi Online Rezerve Edin
                    </a>
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
            <div className="col-md-2">
              <div className="float-end">
                <a href="">
                  <img src={location} alt="location" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
