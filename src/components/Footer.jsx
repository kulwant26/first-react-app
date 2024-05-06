import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram,faXTwitter,faVimeoV } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <section className="footer pt-20 pb-10 bg-black px-4">
      <div className="container mx-auto">
        <div className="footer-content flex flex-col gap-12 md:flex-row md:gap-6">
          <div className="footer-content-left basis-6/12">
            <h2 className="font-bold text-4xl text-white mb-3">
              Sign up here for new <br /> events and offers
            </h2>
            <div className="footer-input-form border-b-2 border-white pb-3 mt-6 relative sm:w-1/2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent focus:outline-none text-white"
              />
              <button
                type="button"
                className="btn btn-primary absolute text-white right-0 uppercase font-bold"
              >
                send now
              </button>
            </div>
            <div class="icons mt-3 text-white flex gap-5 text-2xl">
              <NavLink to="#">
                <FontAwesomeIcon icon={faXTwitter} />
              </NavLink>
              <NavLink to="#">
                <FontAwesomeIcon icon={faInstagram} />
              </NavLink>
              <NavLink to="#">
                <FontAwesomeIcon icon={faFacebook} />
              </NavLink>
              <NavLink to="#">
                <FontAwesomeIcon icon={faVimeoV} />
              </NavLink>
            </div>
          </div>
          <div className="footer-content-right basis-6/12 flex flex-col gap-8 sm:flex-row">
            <div className="footer-content-right-left basis-6/12">
              <h3 className="text-white font-bold text-xl mb-4">
                Explore Activity
              </h3>
              <ul>
                <li>
                  <NavLink
                    to="#"
                    className={
                      "text-gray-500 uppercase font-bold transition-all hover:ml-1"
                    }
                  >
                    hiking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className={
                      "text-gray-500 uppercase font-bold transition-all hover:ml-1"
                    }
                  >
                    cycling
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className={
                      "text-gray-500 uppercase font-bold transition-all hover:ml-1"
                    }
                  >
                    trekking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className={
                      "text-gray-500 uppercase font-bold transition-all hover:ml-1"
                    }
                  >
                    snow sports
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className={
                      "text-gray-500 uppercase font-bold transition-all hover:ml-1"
                    }
                  >
                    mountain biking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className={
                      "text-gray-500 uppercase font-bold transition-all hover:ml-1"
                    }
                  ></NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-content-right-right basis-6/12">
              <h3 className="text-white font-bold text-xl mb-4">
                Useful links
              </h3>
              <ul>
                <li className="mb-4">
                  <NavLink
                    to="#"
                    className={"text-gray-500 uppercase font-bold"}
                  >
                    Alpes suizos, Airolo, CH, Kammelenberg strasse 98 3123 Belp
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="tel:12345678910"
                    className={"text-gray-500 uppercase font-bold"}
                  >
                    Tel: +123456789 10
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="tel:12345678910"
                    className={"text-gray-500 uppercase font-bold"}
                  >
                    Fax: +12345678910
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className={"text-gray-500 uppercase font-bold"}
                  >
                    <a href="#">trekon@website.com</a>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright flex flex-col gap-5 items-start sm:flex-row pt-9 border-t-2 border-gray-500 mt-12 md:mt-32   justify-between sm:items-center">
          <div className="logo">
            <img
              src={window.location.origin + "/images/logo-light.png"}
              alt="footer-logo"
              className="w-40"
            ></img>
          </div>
          <div className="copy-rt-content text-gray-300">
            © 2024 Testing, All Rights Reserved
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
