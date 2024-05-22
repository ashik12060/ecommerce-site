import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogoutAction } from "../../../redux/actions/userAction";

const Header = ({ totalServices, name }) => {
  // const { user, handleSignOut } = useAuth()
  const history = useNavigate();
  const linkHandler = (link) => history(link);

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
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div
          className="collapse navbar-collapse d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-around"
          id="navbarSupportedContent"
        >
          <div className="d-flex justify-content-around ">
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="text-decoration-none" to="/">
                    <h2 className="fs-1 fw-bold text-black" aria-current="page">
                      Helper<span className="font-color">Hub</span>
                    </h2>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="ps-5 ">
              <form className="d-flex w-100" role="search">
                <input
                  className="form-control me-2 w-100"
                  type="search"
                  placeholder="Search for products"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>

          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex ">
              {/* Become a Seller */}
             
                <li className="nav-item">
                  <Link className="text-decoration-none" to="/seller-login">
                    <p className=" fw-bold text-black" aria-current="page">
                      Become a Seller
                    </p>
                  </Link>
                </li>
              

              
                {/* login */}
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          {/* <Avatar alt="Remy Sharp" src="" /> */}
                          <FontAwesomeIcon
                            className="fs-5 font-color"
                            icon={faUser}
                          />
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
                              className="text-black"
                              style={{ textDecoration: "none" }}
                              to="/admin/dashboard"
                            >
                              Admin{" "}
                            </Link>
                          </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">
                            <Link
                              className="text-black"
                              style={{ textDecoration: "none" }}
                              to="/register"
                            >
                              Register{" "}
                            </Link>
                          </Typography>
                        </MenuItem>
                        {userInfo ? (
                          <MenuItem   onClick={logOutUser}>
                            <Typography textAlign="center" color="#8e67b2" >
                              Log Out{" "}
                            </Typography>
                          </MenuItem>
                        ) : (
                          <MenuItem onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                              <Link
                                className="text-black"
                                style={{ textDecoration: "none" }}
                                to="/login"
                              >
                                User Login{" "}
                              </Link>
                            </Typography>
                          </MenuItem>
                        )}
                      </Menu>
                    </Box>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FontAwesomeIcon
                      className="fs-5 font-color"
                      icon={faHeart}
                    />
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FontAwesomeIcon
                      className="fs-5 font-color"
                      icon={faCartShopping}
                    />
                    <span className="ps-1 fw-bold ">0</span>
                  </a>
                </li>
             
              <li className="nav-item">
                <div className="nav-link" href="#">
                  {name && (
                    <Typography
                      variant="body1"
                      textAlign="center"
                      color="text.primary"
                    >
                      Hello {name}
                    </Typography>
                  )}
                </div>
              </li>

              

            </ul>
            <div>
                {userInfo ? (
                  <MenuItem onClick={logOutUser}>
                    <Typography textAlign="center" color="#8e67b2">
                      Log Out{" "}
                    </Typography>
                  </MenuItem>
                ) : (
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link
                        className="text-black bg-danger text-white p-2"
                        style={{ textDecoration: "none" }}
                        to="/admin-login"
                      >
                        Admin Login
                      </Link>
                    </Typography>
                  </MenuItem>
                )}
              </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
