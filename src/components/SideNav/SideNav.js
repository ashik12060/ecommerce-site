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
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div class="navbar-nav d-flex flex-column">
                <a class="nav-link" href="#">
                  <div class="btn-group dropend d-flex justify-content-between">
                    <button
                      type="button"
                      class="btn btn-white"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Men
                    </button>
                    <button
                      type="button"
                      class="btn btn-white dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="visually-hidden">Toggle Dropend</span>
                    </button>

                    <ul class="dropdown-menu">
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

                <div class="btn-group dropend d-flex justify-content-between">
                  <button
                    type="button"
                    class="btn btn-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Women
                  </button>
                  <button
                    type="button"
                    class="btn btn-white dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="visually-hidden">Toggle Dropend</span>
                  </button>

                  <ul class="dropdown-menu">
                    <div className="d-flex justify-content-between mx-2 pt-2">
                      <li className="">LED Light </li>
                      <FontAwesomeIcon className="pt-1" icon={faAngleRight} />
                    </div>
                  </ul>
                </div>

                <hr />

                <div class="btn-group dropend d-flex justify-content-between">
                  <button
                    type="button"
                    class="btn btn-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Baby & Kids
                  </button>
                  <button
                    type="button"
                    class="btn btn-white dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="visually-hidden">Toggle Dropend</span>
                  </button>

                  <ul class="dropdown-menu">
                    <div className="d-flex justify-content-between mx-2 pt-2">
                      <li className="">LED Light </li>
                      <FontAwesomeIcon className="pt-1" icon={faAngleRight} />
                    </div>
                  </ul>
                </div>

                <hr />
                <div class="btn-group dropend d-flex justify-content-between">
                  <button
                    type="button"
                    class="btn btn-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Electronics
                  </button>
                  <button
                    type="button"
                    class="btn btn-white dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="visually-hidden">Toggle Dropend</span>
                  </button>

                  <ul class="dropdown-menu">
                    <div className="d-flex justify-content-between mx-2 pt-2">
                      <li className="">LED Light </li>
                      <FontAwesomeIcon className="pt-1" icon={faAngleRight} />
                    </div>
                  </ul>
                </div>

                <hr />
                <div class="btn-group dropend d-flex justify-content-between">
                  <button
                    type="button"
                    class="btn btn-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home & Living
                  </button>
                  <button
                    type="button"
                    class="btn btn-white dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="visually-hidden">Toggle Dropend</span>
                  </button>

                  <ul class="dropdown-menu">
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
