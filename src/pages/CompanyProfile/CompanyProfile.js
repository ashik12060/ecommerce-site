import React from "react";
import "./CompanyProfile.css";
import Header from "../../components/Header/Header";
import HomeFooter from "../../components/Footer/HomeFooter";
import { Link } from "react-router-dom";
const CompanyProfile = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="background-companyProfile">
        <div className="company-text">
          <h1 className="text-white fw-bold">
            <span className=" company">COMPANY PROFILE</span>
          </h1>

          <p className="text-white fs-5">
            <Link to="/home" className="text-white">
              HOME
            </Link>{" "}
            / COMPANYPROFILE
          </p>
        </div>
      </div>

      <div>
        <div className="container pt-5">
          <h4 className="fw-bold company-history">COMPANY HISTORY</h4>
          <p className="mission-align">
            MediSure Pharma is a renowned name in Bangladesh’s Healthcare marketing sectors. Since our establishment on 2021 our
            company is dedicated to enhance the image and performance of the organization by marketing quality pharmaceutical,
            Dermatological and other Healthcare products to our customers.

            Currently we are marketing some of potential Pharmaceutical preparations through 3rd party manufacturing.

            We are also have a dedicated team for Dermatological products marketing.

            The Primary objective of our company is to create a distribution network for the potential market area in the country. The basic
            ideology is to provide best quality and Authentic Skincare and Pharmaceutical products to our people.

            MediSure Pharma is proud to be a growing company that represents international companies in the country’s Pharma and Derma
            market and introduces their products to physicians, Dermatologists and Beauticians. Our goal is to help make the population
            healthier and to provide a dedicated and responsive customer focus which will assist health care professionals in giving the best
            available treatments.
            We commit to offering our partners better and specialized products for the betterment of healthier life.
          </p>
          <div className="ms-5 d-flex gap-4">
            <div>

              <div className="timelines">
                <div className="timeline education">
                  <h2 className="timeline-title">FOUNDATION</h2>
                  <div className="timeline-items">
                    <div className="timeline-item">

                      <h1 className="text-black-50 fw-bold">The Establishment of MediSure Pharma</h1>


                      <p>Since our establishment in 2021, our company is dedicated to enhance the image and performance of the organization by marketing quality pharmaceutical, Dermatological and other Healthcare products to our customers. With a dedicated team, MediSure Pharma started working on the pharma sector. It has a nicer market values and a better scope of establishment.
                      </p>
                    </div>
                    <div className="timeline-item">
                      <h1 className="text-black-50 fw-bold">Company at a glance</h1>

                      <p>
                        <ul>
                          <li><strong>Company name :</strong> MediSure Pharma</li>
                          <li><strong>Year of Establishment :</strong> 2021</li>
                          <li><strong>Nature of Business :</strong> Pharmaceuticals</li>
                          <li><strong>Total Employee :</strong> 33 persons (Pharmaceutical)</li>
                          (15 Persons for Marketing, Rest for Head Office & Others)
                          <li><strong>Our Business Partners :</strong> Navana Pharma, Euro Pharma,IBN Haisam Laboratories, Royal Laboratories, Health & Life,Nutraceuticals, Banglaadesh.</li>
                          <li><strong>Our Clients :</strong> Lab Aid Hospital, Square Hospitals, Medinova Hospital, Evercare Hospital, United Hospitals & Government Hospitals</li>
                          <li><strong>Yearly turnover :</strong> USD 2 mn</li>
                        </ul>

                      </p>
                    </div>
                    <div className="timeline-item">
                      <h1 className="text-black-50 fw-bold">International Companies</h1>
                      <p>
                       Negotiable
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <HomeFooter />
    </div>
  );
};

export default CompanyProfile;
