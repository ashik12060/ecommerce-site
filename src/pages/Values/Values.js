import React from 'react'
import Header from '../../components/Header/Header'
import HomeFooter from '../../components/Footer/HomeFooter'
import { Link } from 'react-router-dom'

const Values = () => {
  return (
    <div>
    <Header />
      <div className="background-companyProfile">
        <div className="company-text">
          <h1 className="text-white fw-bold">
            <span className=" company">OUR VALUES</span>
          </h1>
          <p className="text-white fs-5">
            <Link to="/home" className="text-white">
              HOME
            </Link>{" "}
            / VALUES
          </p>

        </div>
      </div>
      <div className="border d-flex flex-md-row flex-sm-column flex-column advisors-info container">
        <div className="ps-4 pt-2">
          <h2 className="fw-bold text-danger">Quality</h2>
          <p className="c-structure">
            The policy of UniMed UniHealth Pharmaceuticals Limited is to make
            available quality pharmaceutical products to prevent, mitigate and
            cure the human illness. The company aims to continually improve
            processes, products and service, addressing the risks and
            opportunities within the Organization and deliver highest
            professional standards and satisfaction. The company will achieve
            this by procuring materials from reputed sources and producing
            products following the requirements of WHO Good Manufacturing
            Practices, national regulations and ISO 9001:2015 Quality Management
            System. We are committed to provide satisfactory customer services
            and attend to all customers’ complaint. We are also committed to
            enhance the knowledge and skill of our personnel by providing
            adequate training as per individual training needs.
          </p>
          <h2 className="fw-bold  text-danger">Knowledge</h2>
          <p className="c-structure">
            The management and employee workforce are committed to successfully
            deploy the company’s Quality Policy to all aspects of the company –
            assuring continued safe and effective products of the highest
            quality for the customers. The commitment will be maintained through
            having the right people for the right job doing things
            appropriately. This includes: New technologies that allow the
            development of safe and effective products that enhance the quality
            of life. An experienced workforce equipped with continuing education
            in quality techniques and philosophy. A management team that is
            accountable for effective review and support of quality through
            prioritization, resourcing and timely execution of quality-conscious
            decision-making. Confirmation of the successful operation based upon
            the testimony of the customers, shareholders, regulators, business
            partners, and employees.
          </p>
        </div>
      </div>
      <div className="border d-flex flex-md-row flex-sm-column flex-column advisors-info container">
        <div className="ps-4 pt-2">
          <h2 className="fw-bold  text-danger">Responsibility</h2>
          <p className="c-structure">
          The company has been certified to have implemented the ISO 9001:2015 quality management systems in the manufacture, sales and distribution of pharmaceutical products by SGS Bangladesh Limited. ISO certificate was first implemented in the year 2012 and regularly audited for continuity of the certification.
          </p>
          
        </div>
      </div>
      <HomeFooter />
    </div>
  )
}

export default Values