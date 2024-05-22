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
import {
  Box,
  CardContent,
  Divider,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import CommentList from "../components/CommentList";
import { toast } from "react-toastify";
import { Button } from "bootstrap";
import Header from "../components/Shared/Header/Header";
const socket = io("/", {
  reconnection: true,
});

const SinglePro = () => {
  const { userInfo } = useSelector((state) => state.signIn);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [feature1, setFeature1] = useState("");
  const [feature2, setFeature2] = useState("");
  const [image, setImage] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [commentsRealTime, setCommentsRealTime] = useState([]);

  const history = useNavigate();
  const isAuthenticated = useSelector((state) => state.signIn.isAuthenticated);
  const { id } = useParams();

  

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
      setComments(data.product.comments);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displaySingleProduct();
  }, []);

  useEffect(() => {
    socket.on("new-comment", (newComment) => {
      setCommentsRealTime(newComment);
    });
  }, []);

  

  // add comment
  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.put(
        `${process.env.REACT_APP_API_URL}/api/comment/product/${id}`,
        { comment }
      );
      if (data.success === true) {
        setComment("");
        toast.success("comment added");

        socket.emit("comment", data.product.comments);
      }
      console.log("comment post", data.product)
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  let uiCommentUpdate =
    commentsRealTime.length > 0 ? commentsRealTime : comments;


// Calculate total price
useEffect(() => {
  const totalPrices = Number(feature1) * quantity;
  setTotalPrice(totalPrices);
}, [feature1, quantity]);

const incrementQuantity = () => {
  setQuantity(quantity + 1);
};

const decrementQuantity = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};


// const addToCart = () => {
//   // if (isAuthenticated) {
//     const checkoutUrl = `/checkout/${id}/${totalPrice}`;
//     history(checkoutUrl);
//   // } else {
//   //   history("/login");
//   // }
// };
const addToCart = () => {
  if (userInfo?.token) {
    console.log({ totalPrice });
    const checkoutUrl = `/checkout/${id}/${totalPrice}`;
    history(checkoutUrl);
  } else {
    history("/login");
  }
};


  return (
    <>
      <Header />
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
                        Total Price: ${totalPrice.toFixed(2)}
                      </div>
                      <button onClick={() => addToCart()} className="bg-warning border-0 text-white fw-bold py-2 px-5">
                        Buy Now
                      </button>
                      <button
                        className="mx-3 bg-color border-0 text-white fw-bold py-2 px-5"
                        onClick={() => addToCart()}
                      >
                        Add To Cart
                      </button>
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
                    <FontAwesomeIcon icon={faCalendarDays} className="pe-2 " />7
                    Days Return
                  </p>
                  <p>Change of mind applicable</p>
                  <p className="pb-5  fw-bold">
                    <FontAwesomeIcon icon={faAward} className="pe-2 " />
                    Warranty Not Available
                  </p>
                </div>
              </div>
              
            </div>
            <CardContent>
          

          {userInfo ? (
            <>
              <Box sx={{ pt: 1, pl: 3, pb: 3, bgColor: "#fafafa" }}>
                <h2>Add your comment here!</h2>
                <form onSubmit={addComment}>
                  <TextareaAutosize
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Add a comment..."
                    style={{ width: "80%", padding: "5px" }}
                  />
                  <Box sx={{ pt: 1 }}>
                    <button type="submit" variant="contained" className="mx-3 bg-color border-0 text-white fw-bold py-2 px-5" >
                      Comment
                    </button>
                  </Box>
                </form>
              </Box>
            </>
            
          ) : (
            <>
              <Link to="/login"> Log In to add a comment</Link>
            </>
          )}


<Typography variant="body2" color="text.secondary">
            
          </Typography>
          <Divider variant="inset" />
          {/* add comment list */}
          {comments.length === 0 ? (
            ""
          ) : (
            <Typography variant="h5" sx={{ pt: 3, mb: 2 }}>
              Comments:
            </Typography>
          )}

          {uiCommentUpdate.map((comment) => (
            <CommentList
              key={comment._id}
              name={comment.postedBy.name}
              text={comment.text}
            />
          ))}
        </CardContent>
          </>
        )}
        
      </div>
      <Footer />
    </>
  );
};

export default SinglePro;
