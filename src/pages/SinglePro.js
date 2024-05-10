// // import Card from "@mui/material/Card";
// import React from "react";
// import { Link,  useNavigate, useParams } from "react-router-dom";
// import {
//   faAward,
//   faCalendarDays,
//   faLocationDot,
//   faMoneyBills,
//   faTruck,
// } from "@fortawesome/free-solid-svg-icons";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useEffect, useState } from "react";
// import Loader from "../components/Loader";
// import { useSelector } from "react-redux";
// import { io } from "socket.io-client";
// import DOMPurify from "dompurify";
// import axiosInstance from "./axiosInstance";
// import "./Pro.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import Footer from "../components/Shared/Footer/Footer";
// const socket = io("/", {
//   reconnection: true,
// });

// const SinglePro = () => {
//   // const { userInfo } = useSelector((state) => state.signIn);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [feature1, setFeature1] = useState("");
//   const [feature2, setFeature2] = useState("");
//   const [image, setImage] = useState("");
//   const [createdAt, setCreatedAt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [totalPrices, setTotalPrices] = useState(0);



//   // const { userInfo, isAuthenticated } = useSelector((state) => state.signIn);
//   // const navigate = useNavigate(); // Hook for navigation
//   const history = useNavigate();

//   const isAuthenticated = useSelector((state) => state.signIn.isAuthenticated);
//   const { id } = useParams();

//   const addToCart = () => {
//     // Redirect to the checkout page only if the user is authenticated
//     if (isAuthenticated) {
//       history("/checkout");
//     } else {
//       // Redirect the user to the login page if not authenticated
//       history("/login");
//     }
//   };


//   //fetch single post
//   const displaySingleProduct = async () => {
//     setLoading(true);
//     try {
//       //
//       const { data } = await axiosInstance.get(
//         `${process.env.REACT_APP_API_URL}/api/product/${id}`
//       );
//       setTitle(data.product.title);
//       setContent(data.product.content);
//       setFeature1(data.product.feature1);
//       setFeature2(data.product.feature2);

//       setImage(data.product.image.url);
//       setCreatedAt(data.product.createdAt);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     displaySingleProduct();
//   }, []);

//   const sanitizeHTML = (html) => {
//     return { __html: DOMPurify.sanitize(html) };
//   };

//   // increment and decrement
//   const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//    // Calculate total price
 
//   useEffect(() => {
//     // Calculate total price
//     const totalPrice = parseFloat(feature1) * quantity;
//     setTotalPrices(totalPrice);
//   }, [feature1, quantity]); // Run this effect whenever feature1 or quantity changes
  
//   return (
//     <>
//       {/* <Header /> */}
//       <div
//         className="bg-white"
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           pt: 4,
//           pb: 4,
//           minHeight: "100vh",
//         }}
//       >
//         {loading ? (
//           <Loader />
//         ) : (
//           <>
//             <div className="container my-4 singlepro-bg d-flex bg-white">
//               <div>
//                 <div className="row d-flex ">
//                   <div className="col-lg-3 col-md-3 col-sm-12 pt-4">
//                     <img
//                       src={image}
//                       className="img-fluid pt-2 border"
//                       alt="name"
//                     />
//                   </div>
//                   <div className="col-lg-9 col-md-9 col-sm-12 mt-3 pt-2">
//                     <p>
//                       <h2>{title}</h2>
//                       <span className="py-2">
//                         <FontAwesomeIcon
//                           icon={faStar}
//                           className="text-warning "
//                         />
//                         <FontAwesomeIcon
//                           icon={faStar}
//                           className="text-warning "
//                         />
//                         <FontAwesomeIcon
//                           icon={faStar}
//                           className="text-warning "
//                         />
//                         <FontAwesomeIcon
//                           icon={faStar}
//                           className="text-warning "
//                         />
//                         <FontAwesomeIcon
//                           icon={faStar}
//                           className="text-warning "
//                         />
//                       </span>
//                     </p>

//                     <p className="">
//                       <span className="fw-bold ">Brand:</span>{" "}
//                       <span className="font-color">{feature2}</span>
//                     </p>
//                     <p className="pb-5">
//                       <span className="fw-bold ">Origin:</span> {content}
//                       <p>
//                         <hr />

//                         <p className="fw-bold font-color fs-2">${feature1}</p>
//                       </p>
//                       <span>
//                         <del className="text-secondary">$30</del> -30%
//                       </span>
//                       <br />
//                       <p>
//                         <span className="fw-bold"> Color Family:</span> Black
//                       </p>
//                       <br />
//                       <p className="pb-4">
//                         Quantity:{" "}
//                         {/* <button className="border-0 fs-4 ms-2 bg-secondary px-3 text-white ">
//                           -
//                         </button>{" "}
//                         <span className="fs-4 mx-3">1</span>{" "}
//                         <button className="border-0 fs-4 bg-secondary px-3 text-white">
//                           +
//                         </button> */}
//                         <button
//                           className="border-0 fs-4 ms-2 bg-secondary px-3 text-white"
//                           onClick={()=>decrementQuantity()}
//                         >
//                           -
//                         </button>{" "}
//                         <span className="fs-4 mx-3">{quantity}</span>{" "}
//                         <button
//                           className="border-0 fs-4 bg-secondary px-3 text-white"
//                           onClick={()=>incrementQuantity()}
//                         >
//                           +
//                         </button>
//                       </p>
//                       <div className="pb-4">
//                         Total Price: ${totalPrice.toFixed(2)}
//                       </div>
//                       <button className="bg-warning border-0 text-white fw-bold py-2 px-5">
//                         Buy Now
//                       </button>
//                       {/* <Link to="/cart"> */}
//                         <button
//                           className="mx-3 bg-color border-0 text-white fw-bold py-2 px-5"
//                           onClick={()=> addToCart()}
//                         >
//                           Add To Cart
//                         </button>
//                       {/* </Link> */}
                      
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <div className="pt-5 card2-bg px-5">
//                   <p className="font-color fw-bold">Delivery</p>
//                   <hr />

//                   <p>
//                     <FontAwesomeIcon icon={faLocationDot} className="pe-2 " />
//                     Kalabagan, Dhaka-1205
//                   </p>
//                   <p className="fw-bold">
//                     <FontAwesomeIcon icon={faTruck} className="pe-2 " />
//                     Free Delivery 20 june - 23 june
//                   </p>
//                   <p className="bg-white p-2 fw-bold">
//                     Enjoy free shipping promotion with minimum 1 items.
//                   </p>

//                   <p>
//                     {" "}
//                     <FontAwesomeIcon icon={faMoneyBills} className="pe-2 " />
//                     Cash On Delivery
//                   </p>
//                   <hr />
//                   <span className="font-color fw-bold">Service</span>
//                   <p className="py-3">
//                     <FontAwesomeIcon icon={faCalendarDays} className="pe-2 " />7
//                     Days Return
//                   </p>
//                   <p>Change of mind applicable</p>
//                   <p className="pb-5  fw-bold">
//                     <FontAwesomeIcon icon={faAward} className="pe-2 " />
//                     Warranty Not Available
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default SinglePro;

// import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  faAward,
  faCalendarDays,
  faLocationDot,
  faMoneyBills,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import DOMPurify from "dompurify";
import axiosInstance from "./axiosInstance";
import "./Pro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Shared/Footer/Footer";
import CheckOut from "./CheckOut";
const socket = io("/", {
  reconnection: true,
});

const SinglePro = () => {
  // const { userInfo } = useSelector((state) => state.signIn);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [feature1, setFeature1] = useState("");
  const [feature2, setFeature2] = useState("");
  const [image, setImage] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalPrices, setTotalPrices] = useState(0);

  const history = useNavigate();
  const isAuthenticated = useSelector((state) => state.signIn.isAuthenticated);
  const { id } = useParams();

  // const addToCart = () => {
  //   // Redirect to the checkout page only if the user is authenticated
  //   if (isAuthenticated) {
  //     history(`/checkout?totalPrices=${totalPrices}`);
  //   } else {
  //     // Redirect the user to the login page if not authenticated
  //     history("/login");
  //   }
  // };
  const addToCart = () => {
    // Redirect to the checkout page only if the user is authenticated
    if (isAuthenticated) {
      // Construct the URL with query parameter
      const checkoutUrl = `/checkout?totalPrices=${totalPrices}`;
      // Navigate to the checkout page
      history(checkoutUrl);
    } else {
      // Redirect the user to the login page if not authenticated
      history("/login");
    }
  };

  // Fetch single product
  const displaySingleProduct = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/product/${id}`
      );
      setTitle(data.product.title);
      setContent(data.product.content);
      setFeature1(data.product.feature1);
      setFeature2(data.product.feature2);
      setImage(data.product.image.url);
      setCreatedAt(data.product.createdAt);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displaySingleProduct();
  }, []);

  // Calculate total price
  useEffect(() => {
    const totalPrices = parseFloat(feature1) * quantity;
    setTotalPrices(totalPrices);
  }, [feature1, quantity]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div
        className="bg-white"
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: 4,
          pb: 4,
          minHeight: "100vh",
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="container my-4 singlepro-bg d-flex bg-white">
              <div>
                <div className="row d-flex ">
                  <div className="col-lg-3 col-md-3 col-sm-12 pt-4">
                    <img
                      src={image}
                      className="img-fluid pt-2 border"
                      alt="name"
                    />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-12 mt-3 pt-2">
                    <p>
                      <h2>{title}</h2>
                      <span className="py-2">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-warning "
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-warning "
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-warning "
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-warning "
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-warning "
                        />
                      </span>
                    </p>
                    <p className="">
                      <span className="fw-bold ">Brand:</span>{" "}
                      <span className="font-color">{feature2}</span>
                    </p>
                    <p className="pb-5">
                      <span className="fw-bold ">Origin:</span> {content}
                      <p>
                        <hr />
                        <p className="fw-bold font-color fs-2">${feature1}</p>
                      </p>
                      <span>
                        <del className="text-secondary">$30</del> -30%
                      </span>
                      <br />
                      <p>
                        <span className="fw-bold"> Color Family:</span> Black
                      </p>
                      <br />
                      <p className="pb-4">
                        Quantity:{" "}
                        <button
                          className="border-0 fs-4 ms-2 bg-secondary px-3 text-white"
                          onClick={decrementQuantity}
                        >
                          -
                        </button>{" "}
                        <span className="fs-4 mx-3">{quantity}</span>{" "}
                        <button
                          className="border-0 fs-4 bg-secondary px-3 text-white"
                          onClick={incrementQuantity}
                        >
                          +
                        </button>
                      </p>
                      <div className="pb-4">
                        Total Price: ${totalPrices.toFixed(2)}
                      </div>
                      <button className="bg-warning border-0 text-white fw-bold py-2 px-5">
                        Buy Now
                      </button>
                      <button
                        className="mx-3 bg-color border-0 text-white fw-bold py-2 px-5"
                        onClick={addToCart}
                      >
                        Add To Cart
                      </button>
                      {/* <CheckOut totalPrices={totalPrices} /> */}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="pt-5 card2-bg px-5">
                  <p className="font-color fw-bold">Delivery</p>
                  <hr />
                  <p>
                    <FontAwesomeIcon icon={faLocationDot} className="pe-2 " />
                    Kalabagan, Dhaka-1205
                  </p>
                  <p className="fw-bold">
                    <FontAwesomeIcon icon={faTruck} className="pe-2 " />
                    Free Delivery 20 june - 23 june
                  </p>
                  <p className="bg-white p-2 fw-bold">
                    Enjoy free shipping promotion with minimum 1 items.
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faMoneyBills} className="pe-2 " />
                    Cash On Delivery
                  </p>
                  <hr />
                  <span className="font-color fw-bold">Service</span>
                  <p className="py-3">
                    <FontAwesomeIcon icon={faCalendarDays} className="pe-2 " />
                    7 Days Return
                  </p>
                  <p>Change of mind applicable</p>
                  <p className="pb-5  fw-bold">
                    <FontAwesomeIcon icon={faAward} className="pe-2 " />
                    Warranty Not Available
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SinglePro;
