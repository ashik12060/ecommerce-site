
import { Avatar, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import LockClockOutlined from "@mui/icons-material/LockClockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userSignInAction } from "../redux/actions/userAction";
import Header from "../components/Shared/Header/Header";
import google from '../assets/google-photo.png'

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

// google sign in
initializeAuthentication();
const provider = new GoogleAuthProvider();

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const LogIn = () => {
  const [user, setUser] = useState({});
  const [logout, setLogout] = useState({});
  const [loginFlow,setLoginFlow] = ('checkout')
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isAuthenticated, userInfo } = useSelector((state) => state.signIn);

  useEffect(() => {
    if (isAuthenticated) {
      if (loginFlow === "checkout") {
        navigate("/checkout/:id/:totalPrice");
      } else {
        navigate("/user/dashboard");
      }
    }
  }, [isAuthenticated, loginFlow, navigate]);

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(loggedInUser);
  
        setPersistence(auth, browserLocalPersistence)
          .then(() => {
            console.log("Google authentication session persisted");
          })
          .catch((error) => {
            console.error("Error setting persistence:", error.message);
          });

        if (loginFlow === "checkout") {
          dispatch({ type: "SET_LOGIN_FLOW", payload: "checkout" });
        }
      })
      .catch((error) => {
        console.error("Google sign-in error:", error.message);
      });
  };

  const handleSignOut = () => {
    console.log("Attempting sign out...");

    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("Sign out successful.");
      setLogout({});
    }).catch(error => {
      console.error("Sign out error:", error);
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(userSignInAction(values));
      actions.resetForm();
    },
  });

  return (
    <>
      <Header name={user.name} />

      <Box
        sx={{
          height: "81vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "primary.white",
        }}
      >
        <Box
          onSubmit={formik.handleSubmit}
          component="form"
          className="form_style border-style"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Avatar className="bg-danger" sx={{ m: 1, mb: 3 }}>
              <LockClockOutlined />
            </Avatar>
            <TextField
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  color: "text.secondary",
                },
                fieldset: { borderColor: "rgb(231, 235, 240)" },
              }}
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  color: "text.secondary",
                },
                fieldset: { borderColor: "rgb(231, 235, 240)" },
              }}
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              fullWidth
              className="bg-danger text-white fw-bold"
              type="submit"
            >
              Log In
            </Button>

           <div className="my-2">
           {!user.name ? (
              <button className="border-0 rounded bg-white" onClick={handleGoogleSignIn}>
                <img className="google-img" src={google} alt="google" />
              </button>
            ) : (
              <button type="button" onClick={handleSignOut}>Sign out</button>
            )}
           </div>
            <Link to="/register" className="font-color mt-2 fs-6">
              <u>Register Now</u>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LogIn;
