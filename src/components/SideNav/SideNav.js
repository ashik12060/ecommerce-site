import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import './SideNav.css';
const SideNav = () => {
  return (
    <div className="side-bar">
      <div className="rounded sidebar border bg-white ">
        <h6 className="bg-sidebar p-2 fs-5 rounded font-color fw-bold">
          PRODUCT CATEGORIES
        </h6>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav d-flex flex-column">
                <a className="nav-link" href="#">
                  <div className="btn-group dropend d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-white"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Men
                    </button>
                    <button
                      type="button"
                      className="btn btn-white dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropend</span>
                    </button>

                    <ul className="dropdown-menu">
                      <div className=" mx-2 py-2">
                        <div className="d-flex justify-content-between">
                          <li className="">
                            <Link
                              to="/clothing"
                              className="text-decoration-none text-black"
                            >
                              Clothing{" "}
                            </Link>
                          </li>
                          <FontAwesomeIcon
                            className="pt-1 ps-3"
                            icon={faAngleRight}
                          />
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <li className="">
                            <Link
                              to="/accessories"
                              className="text-decoration-none text-black"
                            >
                              Accessories{" "}
                            </Link>
                          </li>
                          <FontAwesomeIcon
                            className="pt-1 ps-3"
                            icon={faAngleRight}
                          />
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <li className="">
                            <Link
                              to="/accessories"
                              className="text-decoration-none text-black"
                            >
                              Shoes{" "}
                            </Link>
                          </li>
                          <FontAwesomeIcon
                            className="pt-1 ps-3"
                            icon={faAngleRight}
                          />
                        </div>

                        




                      </div>
                    </ul>
                  </div>
                  <hr />
                </a>

                <div className="btn-group dropend d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Women
                  </button>
                  <button
                    type="button"
                    className="btn btn-white dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Toggle Dropend</span>
                  </button>

                  <ul className="dropdown-menu">
                    <div className="d-flex justify-content-between mx-2 pt-2">
                      <li className="">LED Light </li>
                      <FontAwesomeIcon className="pt-1" icon={faAngleRight} />
                    </div>
                  </ul>
                </div>

                <hr />

                <div className="btn-group dropend d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Baby & Kids
                  </button>
                  <button
                    type="button"
                    className="btn btn-white dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Toggle Dropend</span>
                  </button>

                  <ul className="dropdown-menu">
                    <div className="d-flex justify-content-between mx-2 pt-2">
                      <li className="">LED Light </li>
                      <FontAwesomeIcon className="pt-1" icon={faAngleRight} />
                    </div>
                  </ul>
                </div>

                <hr />
                <div className="btn-group dropend d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Electronics
                  </button>
                  <button
                    type="button"
                    className="btn btn-white dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Toggle Dropend</span>
                  </button>

                  <ul className="dropdown-menu">
                    <div className="d-flex justify-content-between mx-2 pt-2">
                      <li className="">LED Light </li>
                      <FontAwesomeIcon className="pt-1" icon={faAngleRight} />
                    </div>
                  </ul>
                </div>

                <hr />
                <div className="btn-group dropend d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home & Living
                  </button>
                  <button
                    type="button"
                    className="btn btn-white dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Toggle Dropend</span>
                  </button>

                  <ul className="dropdown-menu">
                    <div className="d-flex justify-content-between mx-2 pt-2">
                      <li className="">LED Light </li>
                      <FontAwesomeIcon className="pt-1" icon={faAngleRight} />
                    </div>
                  </ul>
                </div>

                <hr />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
