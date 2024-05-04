import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const Header2 = () => {
  return (
    <div className="bg-black d-flex flex-lg-row flex-sm-column flex-md-row flex-xs-column flex-column justify-content-between ">
      <div className="d-flex  flex-lg-row flex-md-row flex-xs-column flex-sm-column flex-column">
        <div className="text-white ms-lg-5 ms-1">
          <div className="ps-lg-2 pe-lg-2">
            <p className="pt-lg-3 pt-md-3 pt-sm-1 pt-xs-1 pt-1">
              <FontAwesomeIcon className="pe-lg-1" icon={faPhone} />
              +880 1816-688711
            </p>
          </div>
        </div>
        <div className="text-white ms-lg-5 ms-md-3 ms-sm-1 ms-xs-1 ms-1 ">
          <div className="ps-lg-2 ">
            <p className="pt-lg-3">
              <FontAwesomeIcon icon={faEnvelope} className="px-lg-2" />{" "}
              contact@amarsource.com
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex ms-lg-5 ms-md-5 ms-xs-1 ms-sm-1 ms-1 pe-3 flex-xs-column">
        <button className="social-info3">
          <a target="_blank" href="https://www.facebook.com/amarsource">
            <FontAwesomeIcon className="icon-sizing3" icon={faFacebookF} />
          </a>
        </button>
        <button className="social-info3">
          <a target="_blank" href="">
            <FontAwesomeIcon className="icon-sizing3" icon={faInstagram} />
          </a>
        </button>
        <button className="social-info3">
          <a target="_blank" href="https://www.youtube.com/@amarsource">
            <FontAwesomeIcon className="icon-sizing3" icon={faYoutube} />
          </a>
        </button>

        <button className="social-info3">
          <a target="_blank" href="">
            <FontAwesomeIcon className="icon-sizing3" icon={faTwitter} />
          </a>
        </button>

        <button className="social-info3">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/amarsource/"
          >
            <FontAwesomeIcon className="icon-sizing3" icon={faLinkedin} />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header2;
