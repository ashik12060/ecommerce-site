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

const Header = ({ name, logout }) => {
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
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div
          class="collapse navbar-collapse d-flex justify-content-around"
          id="navbarSupportedContent"
        >
          <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/">
                  <h2 class="fs-1 fw-bold text-black" aria-current="page">
                    Helper<span className="font-color">Hub</span>
                  </h2>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <form class="d-flex w-100" role="search">
              <input
                class="form-control me-2 w-100"
                type="search"
                placeholder="Search for products"
                aria-label="Search"
              />
            </form>
          </div>

          <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  {/* <FontAwesomeIcon className='fs-5 font-color' icon={faUser} /> */}
                  {/* Login logo */}

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
                            style={{ textDecoration: "none" }}
                            to="/register"
                          >
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
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/login"
                            >
                              User Login{" "}
                            </Link>
                          </Typography>
                        </MenuItem>
                      )}

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
                              style={{ textDecoration: "none" }}
                              to="/admin-login"
                            >
                              Admin Login
                            </Link>
                          </Typography>
                        </MenuItem>
                      )}
                    </Menu>
                  </Box>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FontAwesomeIcon className="fs-5 font-color" icon={faHeart} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FontAwesomeIcon
                    className="fs-5 font-color"
                    icon={faCartShopping}
                  />
                  <span className="ps-1 fw-bold ">0</span>
                </a>
              </li>

              <li class="nav-item">
                <div class="nav-link" href="#">
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
