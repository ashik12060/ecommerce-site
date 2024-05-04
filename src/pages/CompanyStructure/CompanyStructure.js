import React from "react";
// import "./CompanyProfile.css";
import "./CompanyStructure.css";
import Header from "../../components/Header/Header";
import HomeFooter from "../../components/Footer/HomeFooter";
import { Link } from "react-router-dom";

const CompanyStructure = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <Header />
        <div className="background-companyProfile">
          <div className="company-text">
            <h1 className="text-white fw-bold">
              <span className=" company">COMPANY STRUCTURE</span>
            </h1>
            <p className="text-white fs-5">
              <Link to="/home" className="text-white">
                HOME
              </Link>{" "}
              / COMPANYSTRUCTURE
            </p>
          </div>
        </div>
        {/* medisurelogo-company classname */}
        <div className="">
          <div className="container pt-5 ">
            {/* <h4 className="fw-bold company-history">COMPANY STRUCTURE</h4> */}

            <div>
              <div className="management-comapany mb-2">
                <h5 className="fw-bold text-custom">Management</h5>

                <ul className="text-col">
                  <li>MANAGING PARTNER</li>
                  <li>PARTNER</li>
                  <li>PARTNER</li>
                </ul>
              </div>

              <div className="management-comapany my-2">
                <h5 className="fw-bold text-custom">Marketing Department</h5>

                <ul className="text-col">
                  <li>Marketing Manager : 1</li>
                  <li>Regional Manager : 1</li>
                  <li>Sr.Marketing Officer : 2</li>
                  <li>Promotional Officer :11</li>
                </ul>

                <p className="c-structure text-col">
                  We are backed by a dedicated marketing team of experts that
                  helps us to run smooth business operations. Our team hold
                  immense expertise, having enough experience and intensive
                  knowledge in this domain. These professionals ensure the
                  timely visiting the Doctors and Healthcare persons regularly
                  and promoting our quality products for prescribing as well as
                  the Beauticians who generally suggest the appropriate Skincare
                  products to their clients. Some of the outlook towards
                  leadership is as follows: Strive hard to offer excellent
                  products Honors professionalism and performance Innovative and
                  receptive to new ideas
                </p>
              </div>
              <div className="management-comapany my-2">
                <h5 className="fw-bold text-custom ">Sales & Distribution</h5>

                <ul className="text-col">
                  <li>Distribution Manger : 1</li>
                  <li>Sales Officer : 3</li>
                  <li>Delivery Assistant : 6</li>
                </ul>

                <p className="c-structure text-col">
                  These professionals ensure the timely delivery of products as
                  per the client's requirement. Our team-members strive hard to
                  achieve the utmost clients satisfaction by offering excellent
                  quality products. These experts always on a watch to upgraded
                  their resources in order to offer the best quality products at
                  an affordable price. Our workforce has developed cordial
                  relationship with the customers to know their exact demand and
                  requirement.
                </p>
              </div>
              <div className="management-comapany py-3">
                <h5 className="fw-bold text-custom">Others</h5>

                <p className="c-structure text-col">
                  We have a well trained team of Official Staffs who are widely
                  experienced and professional in their own duty.
                </p>
              </div>
            </div>
          </div>
        </div>

        <HomeFooter />
      </div>
    </div>
  );
};

export default CompanyStructure;
