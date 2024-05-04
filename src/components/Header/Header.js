import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import medisure_logo from "../../assets/medisure_logo.jpg";
// new log in header
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../../redux/actions/userAction";






const Header = () => {
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isPartnersOpen, setPartnersOpen] = useState(false);

  const openCompanyDropdown = () => {
    setCompanyOpen(true);
  };

  const closeCompanyDropdown = () => {
    setCompanyOpen(false);
  };

  const openProductsDropdown = () => {
    setProductsOpen(true);
  };

  const closeProductsDropdown = () => {
    setProductsOpen(false);
  };

  const openPartnersDropdown = () => {
    setPartnersOpen(true);
  };

  const closePartnersDropdown = () => {
    setPartnersOpen(false);
  };

  // image rotation
  document.addEventListener("DOMContentLoaded", function () {
    var myImage = document.getElementById("myImage");
    myImage.addEventListener("mouseover", function () {
      myImage.classList.add("rotate");
    });
    myImage.addEventListener("mouseout", function () {
      myImage.classList.remove("rotate");
    });
  });

// for new login header
const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.signIn);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOutUser = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg p-3 border">
        <div className="container-fluid">
          <a className="navbar-brand ps-5" href="/">
            <div className="image-container py-1">
              <img
                src={medisure_logo}
                alt="medisureimg"
                id="myImage"
                className="rotate-image"
              />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              {/* ... Other navigation items ... */}
              <li className="nav-link nav-item">
                <a className="dropdown-item fs-6 text-danger" href="#">
                  <Link to="/" className="link-nav custom-red fw-bold">
                    {" "}
                    HOME
                  </Link>
                </a>
              </li>

              <li
                className={`nav-item dropdown ${isCompanyOpen ? "show" : ""}`}
                onMouseEnter={openCompanyDropdown}
                onMouseLeave={closeCompanyDropdown}
              >
                <a
                  className="nav-link mx-lg-2 mx-md-2 fs-6 link-nav text-black fw-bold dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isCompanyOpen}
                >
                  ABOUT US
                </a>
                <ul
                  className={`dropdown-menu ${isCompanyOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdownMenuLink1"
                >
                  <li>
                    <a className="dropdown-item fs-6 fw-bold" href="#">
                      <Link className="text-danger" to="/companyprofile">
                        COMPANY PROFILE
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fs-6  fw-bold" href="#">
                      <Link className="text-black" to="/companystructure">
                        COMPANY STRUCTURE
                      </Link>
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item fs-6  fw-bold" href="#">
                      <Link className="text-black" to="/sisterconcerns">
                        SISTER CONCERNS
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fs-6  fw-bold" href="#">
                      <Link className="text-black" to="/members">
                        {" "}
                        LEADERSHIP
                      </Link>
                    </a>
                  </li>
                  {/* <li>
                    <a className="dropdown-item fs-6  fw-bold" href="#">
                      <Link className="text-black" to="/policy">
                        {" "}
                        QUALITY POLICIES
                      </Link>
                    </a>
                  </li> */}
                  {/* <li>
                    <a className="dropdown-item fs-6  fw-bold" href="#">
                      <Link className="text-black" to="/values">
                        OUR VALUES
                      </Link>
                    </a>
                  </li> */}

                  <li>
                    <a className="dropdown-item fs-6  fw-bold" href="#">
                      <Link className="text-black" to="/mission">
                        {" "}
                        OUR MISSION & VISION
                      </Link>
                    </a>
                  </li>
                </ul>
              </li>

              {/* Products Dropdown */}
              <li
                className={`nav-item dropdown ${isProductsOpen ? "show" : ""}`}
                onMouseEnter={openProductsDropdown}
                onMouseLeave={closeProductsDropdown}
              >
                <a
                  className="nav-link mx-lg-2 mx-md-2 fs-6 link-nav text-black fw-bold dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isProductsOpen}
                >
                  PRODUCTS
                </a>
                <ul
                  className={`dropdown-menu ${isProductsOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  <li>
                    <Link
                      className="dropdown-item fs-6 text-danger fw-bold"
                      to='/medicine'
                    >
                      MEDICINE
                    </Link>
                  </li>
                  <li>
                    <Link to="/items" className="dropdown-item fs-6 fw-bold" >
                      SURGICAL ITEMS
                    </Link>
                  </li>
                  
                </ul>
              </li>

              {/* Partners Dropdown */}
              <li
                className={`nav-item dropdown ${isPartnersOpen ? "show" : ""}`}
                onMouseEnter={openPartnersDropdown}
                onMouseLeave={closePartnersDropdown}
              >
                <a
                  className="nav-link mx-lg-2 mx-md-2 fs-6 link-nav text-black fw-bold dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink3"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isPartnersOpen}
                >
                  PARTNERS
                </a>
                <ul
                  className={`dropdown-menu ${isPartnersOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdownMenuLink3"
                >
                  <li>
                    <Link to="/partners" className="dropdown-item fw-bold fs-6 text-danger" >
                      PARTNERS 
                    </Link>
                  </li>
                  
                </ul>
              </li>

              

              <li className="nav-link nav-item">
                <a className="dropdown-item fs-6" href="#">
                  <Link to="/gallery" className="link-nav text-black fw-bold">
                    {" "}
                   GALLERY
                  </Link>
                </a>
              </li>

              <li className="nav-link nav-item headers-nav">
                <a className="dropdown-item fs-6" href="#">
                  <Link to="/bloghome" className="link-nav text-black fw-bold">
                   BLOG
                  </Link>
                </a>
              </li>
             
              <li className="nav-link nav-item ">
                <a className="dropdown-item fs-6 headers-nav" href="#">
                  <Link to="/contact" className="link-nav text-black fw-bold">
                    {" "}
                    CONTACT US
                  </Link>
                </a>
              </li>
             
            </ul>

            {/* Social icons */}
            <ul className="navbar-nav ms-auto pe-5 d-none d-lg-inline-flex">
              <li className="nav-item mx-2">
                <a
                  className="nav-link  "
                  href="https://www.facebook.com/profile.php?id=100084636297328"
                  target="blank"
                >
                  <FontAwesomeIcon className="header-icon" icon={faFacebook} />
                </a>
              </li>
              {/* <li className="nav-item mx-2">
                <a className="nav-link  " href="#" target="blank">
                  <FontAwesomeIcon className="header-icon" icon={faLinkedin} />
                </a>
              </li> */}
              <li className="nav-item me-2">
                <a className="nav-link  " href="mailto:business@medisurepharmabd.com" target="blank">
                  <FontAwesomeIcon className="header-icon" icon={faEnvelope} />
                </a>
              </li>
            </ul>


            {/* Login logo */}
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              PaperProps={{
                sx: {
                  "& 	.MuiMenu-list": {
                    bgColor: "primary.white",
                    color: "white",
                  },
                },
              }}
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/admin/dashboard"
                  >
                    Admin{" "}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link style={{ textDecoration: "none" }} to="/register">
                      Register{" "}
                    </Link>
                  </Typography>
                </MenuItem>
              {userInfo ? (
                <MenuItem onClick={logOutUser}>
                  <Typography textAlign="center" color="#8e67b2">
                    Log Out{" "}
                  </Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link style={{ textDecoration: "none" }} to="/login">
                      Login{" "}
                    </Link>
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          </div>
        </div>
        
      </nav>
    </div>
  );
};

export default Header;
