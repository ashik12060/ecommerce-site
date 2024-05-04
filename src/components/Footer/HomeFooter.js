
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const HomeFooter = () => {
  return (
    <div>
      <div className="bgColor pt-5 ">
        <div className="container  pt-5">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-start text-white pt-4">
              <h2 className="start-border pb-2">MEDISURE PHARMA</h2>
              <p className="footer-align">
              The rapidly expanding MediSure Pharma is pleased to introduce its targeted audience of medical professionals, dermatologists, and beauticians to the products of foreign companies operating in the nation's pharma and dermatology markets.

              </p>
              <button className="social-info"><a target="_blank" href="https://www.facebook.com/profile.php?id=100084636297328"><FontAwesomeIcon className="icon-sizing" icon={faFacebookF} /></a></button>
              <button className="social-info"><a target="_blank" href="#"><FontAwesomeIcon className="icon-sizing" icon={faInstagram} /></a></button>
              <button className="social-info"><a target="_blank" href="#"><FontAwesomeIcon className="icon-sizing" icon={faYoutube} /></a></button>

              <button className="social-info"><a target="_blank" href="#"><FontAwesomeIcon className="icon-sizing" icon={faTwitter} /></a></button>

              <button className="social-info"><a target="_blank" href="#"><FontAwesomeIcon className="icon-sizing" icon={faLinkedin} /></a></button>

              
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12 row  text-white pt-4 text-start">
              <h3 className="start-border pb-2">SERVICES</h3>
              <a className="text-white text-decoration-none hover-effect"  href="#">
                <li>Manufacturing Project</li>
              </a>
              <a className="text-white text-decoration-none" href="#">
                <li>Medical Device Marketing</li>
              </a>
              <a className="text-white text-decoration-none hover-effect" href="#">
                <li>Medical Device Manufacturing</li>
              </a>
              <a className="text-white text-decoration-none hover-effect" href="#">
                <li>Making a distribution network</li>
              </a>
              <a className="text-white text-decoration-none hover-effect" href="#">
                <li>Cost Effectiveness</li>
              </a>
              <a className="text-white text-decoration-none hover-effect" href="#">
                <li>Customers Ask For Flexibility</li>
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 row  text-white pt-4 text-start ">
              <h3 className="start-border pb-2">ADDRESS</h3>
              <address>
                
                H#55(3rd floor), R# 9/A,<br /> 
                Opposite of IBN Sina Hospital,<br />
                Dhanmondi, Dhaka-1209 <br />
                Cell: +8801877740062


              </address>
            </div>
          </div>

          
        </div>


        <hr className="border border-light border-1 opacity-75" />

          <div className="d-flex gap-3 flex-lg-row flex-md-row flex-sm-column flex-column container">
            <div className="text-white me-5">
              <small>
                &copy;2023-2024 All Rights Reserved | Medisure Pharma.
              </small>
            </div>
            <p className="text-white">Developed by: <a className="text-white border-bottom border-danger border-2" target="_blank" href="https://www.facebook.com/greensofttech">Green Software Technology - GST</a></p>

            <div className=" d-flex gap-3 flex-lg-row flex-md-row flex-sm-column flex-column text-start">
              <div className="ms-lg-5">
                <p>
                  <a className="text-white text-decoration-none " href="#">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div>
                <p className="">
                  <a className="text-white text-decoration-none " href="#">
                    Terms & Conditions
                  </a>
                </p>
              </div>

              <div>
                <p className="">
                  <a className="text-white text-decoration-none " href="#">
                    FAQ
                  </a>
                </p>
              </div>
            </div>
          </div>
      </div>


      
    </div>

  );
};

export default HomeFooter;
