import React from "react";
import HomeFooter from "../../components/Footer/HomeFooter";
import Header from "../../components/Header/Header";
import "../CompanyProfile/CompanyProfile.css";
import { Link } from "react-router-dom";
const Mission = () => {
  return (
    <div className="overflow-hidden ">
      <Header />
      <div className="background-companyProfile overflow-hidden ">
        <div className="company-text">
          <h1 className="text-white fw-bold">
            <span className=" company">OUR MISSION & VISION</span>
          </h1>
          <p className="text-white fs-5">
            <Link to="/home" className="text-white">
              HOME
            </Link>{" "}
            / MISSION & VISION
          </p>

        </div>
      </div>
      <div className="border d-flex flex-lg-row flex-md-row flex-sm-column flex-column  advisors-info container">
        <div className="px-4 container  bg-light gap-2 me-2 py-4">
          <h3 className="fw-bold">Manufacturing Project (Pharmaceuticals)</h3>
          <p className="mission-align">
            As we are currently marketing some Pharmaceutical and Nutraceuticals
            products manufactured by third party. We have a plan for a establish
            a Pharmaceutical/ Nutraceuticals manufacturing plant in near future.
          </p>
        </div>
        <div className="px-4 py-4 bg-light gap-2">
          <h3 className="fw-bold">Medical Device Marketing Plan:</h3>
          <p className="mission-align">
            We are supplying Medicinal products to the Government and Private
            Hospitals. There are huge demand of different types of Medical
            Devices. About 95% of total Medical Devices are imported in
            Bangladesh. Our company is also working to expand our marketing
            activities for registration, import and marketing specialized
            Medical Device products mainly from USA and EU countries.
          </p>
        </div>
        <div className="px-4 pt-2 bg-light ms-2">
          <h3 className="fw-bold">Medical Device Manufacturing Project:</h3>
          <p className="mission-align">
            We are also working with some integrated and sophisticated Medical
            Device to supply Government, Private Hospital through Tender and
            direct supply. In future, we have a plan to work for establish
            Medical Device manufacturing Plant with Internationally reputed
            company as joint collaboration.
          </p>
        </div>
      </div>

      <HomeFooter />
    </div>
  );
};

export default Mission;
