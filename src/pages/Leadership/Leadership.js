import React from "react";
import Header from "../../components/Header/Header";
import HomeFooter from "../../components/Footer/HomeFooter";
import leader1 from "../../assets/SYKAT.jpg";
import "./Leadership.css";

const Leadership = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <Header />
        <div className="background-companyProfile">
          <div className="company-text">
            <h1 className="text-white fw-bold">
              <span className=" company">LEADERSHIP</span>
            </h1>
          </div>
        </div>

        <div>
          <div className="container pt-5">
            <h4 className="fw-bold company-history py-4">COMPANY MEMBERS</h4>

            <div className="container ">
              <div className="border d-flex flex-md-row flex-sm-column flex-column advisors-info">
                <div>
                  <img
                    className="leader-img"
                    src={leader1}
                    alt="advisor_team"
                  />
                </div>
                <div className="ps-4 pt-2">
                  <h2 className="fw-bold">Sadek Ahmed Sykat</h2>
                  <h3 className="fw-bold">Chairman</h3>
                  <p>
                    Javed Ikbal has 17 years of experience as Chief Information
                    Security Officer, specializing in establishing,
                    re–engineering, and leading the information security, risk
                    and contingency management, disaster recovery, and business
                    continuity of several global enterprises such as Bright
                    Horizons, Upromise, zSquad, and OMGEO. His invaluable
                    experience in threat and vulnerability management, team
                    building, capability enhancement and architecture for cyber
                    and physical security operations has proved vital for the
                    growth of companies he has worked in. He enables business
                    growth by leveraging his years of invaluable experience in
                    protecting people, processes, intellectual property, and
                    information. Javed has also developed and implemented
                    information security program for OMGEO from the ground up.
                    He has earned his BSc in Mechanical Engineering from BUET
                    and MS in Information Technology from Harvard Medical
                    Extension School.
                  </p>
                </div>
              </div>
              <div className="border d-flex flex-md-row flex-sm-column flex-column advisors-info">
                <div>
                  <img
                    className="leader-img"
                    src={leader1}
                    alt="advisor_team"
                  />
                </div>
                <div className="ps-4 pt-2">
                  <h2 className="fw-bold">Rashed M. Noman</h2>
                  <h3 className="fw-bold">Director & Business Strategist</h3>
                  <p>
                    Rashed M. Noman is an entrepreneurial businessman with the
                    brilliant ability to drive companies toward profitability
                    and build highly capable teams. He has achieved 20+ years of
                    success and innovation, led engineering operations, and
                    developed innovative products in highly acclaimed companies
                    including the Boeing Company (for 11+ years), General Motors
                    (for 6+ years), and Augmedix (for 3+ years). His invaluable
                    team–building skill has allowed him to strategically plan
                    for team growth and boost staff morale, and along with his
                    uncanny ability to spot world–class talent, his expertise
                    has been instrumental for the growth of the companies he has
                    worked in. Rashed has earned his BSc in Mechanical
                    Engineering from BUET, MBA(Project Management major) from
                    New York Institute of Technology, and MS in Mechanical
                    Engineering from the University of South Carolina.
                  </p>
                </div>
              </div>
              <div className="border d-flex flex-md-row flex-sm-column flex-column advisors-info">
                <div>
                  <img
                    className="leader-img"
                    src={leader1}
                    alt="advisor_team"
                  />
                </div>
                <div className="ps-4 pt-2">
                  <h2 className="fw-bold">Hasin Jahan</h2>
                  <h3 className="fw-bold">
                    Director & Development Professional
                  </h3>
                  <p>
                    Hasin Jahan is a development professional with specialized
                    work experience in water, sanitation, waste management,
                    disaster risk reduction, energy, agriculture sectors, and
                    also emergency response. She is responsible for expanding
                    and integrating waste management systems in Bangladeshi
                    municipalities with extreme poverty, which are highly
                    acclaimed both nationally and internationally. She has
                    worked as company director for companies such as WaterAid
                    and Practical Action, where she was responsible for
                    constructing country strategy and business plans, which she
                    successfully managed and executed and achieved
                    organizational ambitions. Hasin has also devoted her time to
                    developing highly capable teams capable of innovation,
                    implementation, learning, and scaling. She has earned her
                    BSc in Civil Engineering from BUET, MSc in Water &
                    Environmental Management from Loughborough University of
                    Technology and Post Graduate Diploma in Disaster Risk
                    Management from the University of Dhaka.{" "}
                  </p>
                </div>
              </div>
              <div className="border d-flex flex-md-row flex-sm-column flex-column advisors-info">
                <div>
                  <img
                    className="leader-img"
                    src={leader1}
                    alt="advisor_team"
                  />
                </div>
                <div className="ps-4 pt-2">
                  <h2 className="fw-bold">Syed Ishteaq Hossain</h2>
                  <h3 className="fw-bold">Director & Advisor</h3>
                  <p>
                    Syed Ishteaq Hossain specializes in engineering research and
                    development, and techno–commercial analysis. He has achieved
                    growth and success for his system design and
                    telecommunication business throughout his 20+ years of
                    career and brings invaluable managerial experience, as well
                    as technological experience to the table. Syed has gained
                    his BSc in Mechanical Engineering from BUET.{" "}
                  </p>
                </div>
              </div>
              <div className="border d-flex flex-md-row flex-sm-column flex-column advisors-info">
                <div>
                  <img
                    className="leader-img"
                    src={leader1}
                    alt="advisor_team"
                  />
                </div>
                <div className="ps-4 pt-2">
                  <h2 className="fw-bold">Mr. Shafique ul Azam</h2>
                  <h3 className="fw-bold">Director & Advisor</h3>
                  <p>
                    After completing BSS (Hons) degree in Economies, Mr.
                    Shafique ul Azam obtained his MBA from Institute of Business
                    Administration (IBA), University of Dhaka in the year 1986.
                    He started his career as Junior Project Management Officer
                    in the same year in an NGO funded by USAID named Micro
                    Industries Development Assistance Society (MIDAS). Later on,
                    he joined in MIDAS Financing Ltd, a Non-Banking Financial
                    Institute, an offshoot of MIDAS. He had been serving MIDAS
                    and MIDAS Financing Ltd for 32 years. He worked in different
                    management positions of MIDAS Financing including as
                    managing director for nine years. As a Managing Director, he
                    was successful in fostering every sector of the Company
                    during his tenure. The Company has arrived at a new
                    dimension through his leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HomeFooter />
      </div>
    </div>
  );
};

export default Leadership;
