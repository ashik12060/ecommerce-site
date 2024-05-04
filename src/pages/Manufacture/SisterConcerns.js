import React from "react";
import Header from "../../components/Header/Header";
import HomeFooter from "../../components/Footer/HomeFooter";
import { Link } from "react-router-dom";

const SisterConcerns = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      
      <div className="background-companyProfile">
        <div className="company-text">
          <h1 className="text-white fw-bold">
            <span className=" company">SISTER CONCERNS</span>
          </h1>
          <p className="text-white fs-5">
            <Link to="/home" className="text-white">
              HOME
            </Link>{" "}
            / SISTERCONCERNS
          </p>



        </div>
      </div>

      <div className='medisurelogo-company text-white'>
        <div className="container pt-5 ">

          <div>
            <div className='management-comapany mb-2'>

              <h3 className=" fw-bold">Freya Trading :</h3>
              <p>Freya Trading is one of our associate company, is engaged to participate Government Tender for supply of
                Medicines and

                other Healthcare products.</p>

            </div>

            <div className='management-comapany my-2'>

              <h3 className="">
               NI Trade International :
              </h3>

              <p className="c-structure">NI Trading was established for supply Pharmaceutical and Healthcare Products to the Private Hospitals as wel
                as

                Governments Hospitals.</p>
            </div>
            <div className='management-comapany my-2'>

             <h3 className="">
             Alpha Trading Co:
             </h3>

              <p className="c-structure">Alpha trading Co also our associate company, enlisted to participate the Government, Semi Government
                Hospitals and to

                supply all types of Hospital needed products.</p>
            </div>
            <div className='management-comapany py-3'>
              <h3 className="">
              Freightfirm BD Ltd :
              </h3>

              <p className="c-structure">Associate company Freightfirm BD Ltd is looking after our all types of import related subjects,eg.
                Banking,Shipment,Custom Clearance and transportation issues.</p>
            </div>

          </div>

        </div>
      </div>



      <HomeFooter />
    </div>
  );
};

export default SisterConcerns;
