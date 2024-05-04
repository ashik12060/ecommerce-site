import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./Partners.css";
import navana from "../../assets/navana_pharma.jpg";
import europharma from '../../assets/euro-pharma.png'
import ibnhaisam from '../../assets/ibn-haisam.jpg'
import royal from '../../assets/royal-laboratories.jpg'

const Partners = () => {
  return (
    <div>
      <Header />
      <div className="background-partner">
        <div className="partner-text">
          <h1 className="text-white fw-bold">
            <span className="partner">OUR PARTNERS</span>
          </h1>

          <p className="text-white fs-5">
            <Link to="/home" className="text-white">
              HOME
            </Link>{" "}
            / PARTNERS
          </p>
        </div>
      </div>
      
      <div className="border container my-2">
      <h3 className="text-center mt-3">
        <span className="pharma">Navana Pharma</span>
      </h3>
      <div class="container mt-4">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4" >
            <img src={navana} alt="navana-pharma" class="border w-75 h-75 w-sm-100 w-100 " />
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ps-2 pt-4">
            <p class="para-alignment">
              Since 1992, NPL is continuously expanding its business through new
              ideas, innovations, and quality products. Navana Pharmaceuticals
              Ltd. operates its business under two divisions: Veterinary
              Division & Human Health Division. Veterinary Division manufactures
              and markets high-quality Veterinary medicine and feed supplements
              for different segments, including poultry, dairy, and aqua
              products. Human Health Division of NPL operates its manufacturing
              facilities in strict compliance with WHO cGMP guidelines for the
              production of tablets, capsules, oral liquids, ampoules, dry
              powder vials, powder for suspension, eye drops, creams & ointments
              etc. We always focus on people quality and process development
              through training and maximum utilization of ICT. We promote the
              concept of built-in-quality in every phase of our operation. We
              strictly adhere to the WHO cGMP and the concept of QMS in ensuring
              the quality of our products. Ultimately, we are continuously
              growing not only in the domestic market but also in the
              international market.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-center mt-3">
        <span className="pharma">Euro Pharma</span>
      </h3>
      <div class="container mt-4">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ps-2 pt-4">
            <p class="para-alignment">
              Euro Pharma, incorporated as a limited company in 2003, received
              its regulatory approval in July 2006 to operate as a
              pharmaceutical company to manufacture and market medicine in
              Bangladesh. However, it was not until March 2008, it went into
              commercial production and marketing. The company has been built on
              the pillars of integrity, knowledge, respect and trust. At Euro
              Pharma we operate at high ethical standards and are committed
              towards building the organization on the foundation of our vision,
              mission and philosophy. At Euro Pharma, we aspire to aid our
              customers in leading a healthy life by formulating, developing,
              commercializing quality medicine and delivering affordable and
              accessible medicines that satisfy their urgent medical needs. We
              aspire to: develop a broad portfolio of products and become a
              significant national player in the generics arena emerge as a
              leading national player in high quality generic formulations and
              grow by expanding territory throughout the country. We
              continuously strive for the success of our company through
              research, innovation, training & development, manufacture and
              marketing of safe and effective medicines. We consider our
              employees as most valuable assets that can make our dreams come
              true.By listening to our employees and acting on what we hear, we
              identify and build on the strengths and talents of our people and
              make Euro Pharma a better place to work at.
            </p>
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4">
            <img src={europharma} alt="navana-pharma" class="border  w-75 h-75 w-sm-100 w-100" />
          </div>
        </div>
      </div>


      <h3 className="text-center mt-3">
        <span className="pharma">IBN Haisam</span>
      </h3>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-3">
            <img src={ibnhaisam} alt="ibn-haisam" className="border  w-75 h-75 w-sm-100 w-100" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ps-2 pt-4">
            <p className="para-alignment">
            With a vision of ‘nothing is more precious than our health‘, IBN HAISAM Laboratories Ltd. was established on 23 June 2005. From the beginning of its producion in April 2006, IBN HAISAM is dedicated in producing highest quality drugs for better health care of patients. Over the years of our operation, the company has been able to establish itself as a pioneering quality drug producer having better corporate standards in the Bangladeshis market.
            </p>
          </div>
        </div>
      </div>



      <h3 className="text-center mt-3">
        <span className="pharma"> Royel Laboratories (AY) Ltd</span>
      </h3>
      <div class="container mt-4">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ps-2 pt-4">
            <p class="para-alignment">
            Royal Laboratories Ltd 2000+ employees are currently employed in the health care of the people of Bangladesh.We are from 14/05/1986 with valuable service in medicine section in Bangladesh.The Royal Laboratories uses herbal ingredients He always makes quality medicines.We are Fast ime ISO Certified Ayurvedic Medicine Company In Bangladesh ISO 9001:2015 Certified
            </p>
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4">
            <img src={royal} alt="navana-pharma" class="border  w-75 h-75 w-sm-100 w-100" />
          </div>
        </div>
      </div>

      </div>







    </div>
  );
};

export default Partners;
