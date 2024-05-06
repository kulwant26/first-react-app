import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`header px-4 py-6 fixed left-0 right-0 z-10 ${
        scrolled
          ? "bg-white transition ease-in duration-300 drop-shadow-md"
          : ""
      }`}
    >
      <div className="container mx-auto flex gap-3 justify-between items-center relative">
        <div className="logo">
          <NavLink to="/">
            {" "}
            <img
              src={window.location.origin + "/images/logo-light.png"}
              alt="logo"
              className={`w-40 ${scrolled ? "invert" : ""}`}
            />{" "}
          </NavLink>
        </div>
        <nav className="hidden lg:block nav-bar">
          <ul>
            <li
              className={`flex gap-5 font-bold ${
                scrolled ? "text-black " : "text-white"
              }`}
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="right nav">
          {/* mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              className={`mobile-menu-button ${
                scrolled ? "text-black " : "text-white"
              }`}
              onClick={handleToggle}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          {/* mobile nav */}
          <div
            className={`lg:hidden mob-nav absolute right-0 top-full ${
              navbarOpen ? "block" : "hidden"
            }`}
          >
            <ul className="bg-white rad rounded-lg w-40 p-4 shadow-md">
              <li className="flex flex-col gap-4">
                <NavLink to="/" onClick={handleToggle}>
                  Home
                </NavLink>
                <NavLink to="/about" onClick={handleToggle}>
                  About
                </NavLink>
                <NavLink to="/contact" onClick={handleToggle}>
                  Contact
                </NavLink>
              </li>
              <li className="mt-4">
                <button className="px-6 py-2 font-bold bg-black text-white">
                  Log In
                </button>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className={`hidden lg:block px-6 py-2 font-bold transition delay-100 duration-200 hover:ease-in hover:text-white ${
              scrolled
                ? "bg-black hover:bg-blue-400 text-white"
                : "bg-white hover:bg-black"
            }`}
          >
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
