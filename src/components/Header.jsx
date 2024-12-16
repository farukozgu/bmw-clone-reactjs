import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg";
import logoMobile from "../assets/logoMobile.SVG";
import location from "../assets/location.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsOpen(false); // Masaüstüne geçildiğinde menüyü kapat
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className={`header ${isOpen ? "menu-open" : ""}`}>
        <div className="container">
          <div className={`navbar ${isOpen ? "navbar-open" : ""}`}>
            <div className="logo">
              <img className="desktoplogo" src={logo} alt="BMW Logo" />
              <img className="mobileLogo" src={logoMobile} alt="BMW Logo" />
            </div>
            <nav className="desktopNav nav ps-4">
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
            <div className="float-end">
              <a className="location-a" href="">
                <img src={location} alt="location" />
              </a>
              <div className="lg:hidden">
                <button
                  onClick={toggleNavbar}
                  className={`menu-toggle ${isOpen ? "open" : ""}`}
                >
                  {isOpen ? <X className="icon" /> : <Menu className="icon" />}
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <nav className="mobileNav nav ps-4">
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
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
