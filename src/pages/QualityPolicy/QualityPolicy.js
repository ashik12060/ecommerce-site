import React from "react";
import Header from "../../components/Header/Header";
import HomeFooter from "../../components/Footer/HomeFooter";
import { Link } from "react-router-dom";

export const QualityPolicy = () => {
  return (
    <div>
      <Header />
      <div className="background-companyProfile">
        <div className="company-text">
          <h1 className="text-white fw-bold">
            <span className=" company ">QUALITY POLICY</span>
          </h1>
          <p className="text-white fs-5">
            <Link to="/home" className="text-white">
              HOME
            </Link>{" "}
            / QUALITY
          </p>

        </div>
      </div>
      
      <div className="border d-flex flex-md-row flex-sm-column flex-column advisors-info container">
        <div className="ps-4 pt-2">
          <h2 className="fw-bold  text-danger">Quality Policy </h2>
          <p className="c-structure">
          Our dedication to high production standards, compliance with regulations, and continuous enhancement are all part of MediSure Pharma's commitment to quality, which goes beyond our products. In order to give our clients trustworthy healthcare solutions, we work hard to maintain the highest standards of efficacy, safety, and dependability in all of our offerings. We seek to be at the forefront of providing excellence in pharmaceutical and dermatological solutions, improving people's health and well-being all over the world through strong quality assurance procedures and strategic alliances with renowned international manufacturers.

          </p>
          <h2 className="fw-bold  text-danger">Quality Mission </h2>
          <p className="c-structure">
          The quality mission of MediSure Pharma comprises not just the products but also our commitment to ethical business practices, regulatory compliance, and environmental sustainability. Our mission is to positively impact the lives of individuals and societies all around the world by being a dependable partner in the promotion of health and well-being. We believe that everyone should have access to healthcare solutions that are of the highest possible standard, and this belief is reflected in our unwavering pursuit of quality.

          </p>
        </div>
      </div>
      <div className="border d-flex flex-md-row flex-sm-column flex-column advisors-info container">
        <div className="ps-4 pt-2">
          <h2 className="fw-bold  text-danger">Accreditation</h2>
          <p className="c-structure">
          As evidence of that we remain committed to the highest industry standards, MediSure Pharma is pleased to have accreditation from reputable regulatory agencies. Our commitment to creating premium pharmaceutical and healthcare products is reaffirmed by this recognition. For our customers' and stakeholders' benefit, we continue to be unwavering in our quest of excellence and quality assurance.

          </p>
          
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};
