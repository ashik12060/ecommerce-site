import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import moment from "moment";
import Loader from "../components/Loader";
import { io } from "socket.io-client";
import ProductCard from "../components/ProductCard";
import NavbarProducts from "../components/NavbarProducts";
import "./Pro.css";
import axiosInstance from "./axiosInstance";
import Header from "../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
// import axiosInstance from "./axiosInstance";
const socket = io("/", {
  reconnection: true,
});

const BlogPro = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postAddLike, setPostAddLike] = useState([]);
  const [postRemoveLike, setPostRemoveLike] = useState([]);
  // const [visibleProducts, setVisibleProducts] = useState(4);

  // const showMoreProducts = () => {
  //   setVisibleProducts(products.length);
  // };
  const showProducts = async () => {
    setLoading(true);
    try {
      // ${process.env.REACT_APP_API_URL}
      //
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/products/show`
      );
      setProducts(data.products);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    showProducts();
  }, []);

  useEffect(() => {
    socket.on("add-like", (newPosts) => {
      setPostAddLike(newPosts);
      setPostRemoveLike("");
    });
    socket.on("remove-like", (newPosts) => {
      setPostRemoveLike(newPosts);
      setPostAddLike("");
    });
  }, []);

  let uiPosts =
    postAddLike.length > 0
      ? postAddLike
      : postRemoveLike.length > 0
      ? postRemoveLike
      :  products;
        // products.slice(0, visibleProducts);

  return (
    <>
      
      <Box sx={{ bgColor: "#fafafa", minHeight: "100vh" }}>
        <div className="text-center mt-3">
          <h3>
            <span className="product-header">MEDICINES</span>
          </h3>
        </div>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {loading ? (
                <Loader />
              ) : (
                uiPosts.map((product, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
                    <ProductCard
                      image={product.image ? product.image.url : ""}
                      id={product._id}
                      title={product.title}
                      content={product.content}
                      subheader={moment(product.createdAt).format(
                        "MMMM DD, YYYY"
                      )}
                      comments={product.comments.length}
                      likes={product.likes.length}
                      likesId={product.likes}
                      showProducts={showProducts}
                    />
                  </Grid>
                ))
              )}
            </Grid>
          </Box>
        </Container>
      </Box>
   
  



      {/* <Box sx={{ bgColor: "#fafafa", minHeight: "100vh" }}>
        <div className="text-center mt-3">
          <h3>
            <span className="product-header">MEDICINES</span>
          </h3>
        </div>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
              {loading ? (
                <Loader />
              ) : (
                uiPosts.map((product, index) => (
                  <div className="col" key={index}>
                    <ProductCard
                      image={product.image ? product.image.url : ""}
                      id={product._id}
                      title={product.title}
                      content={product.content}
                      feature1={product.feature1}
                      feature2={product.feature2}
                      feature3={product.feature3}
                      feature4={product.feature4}
                      feature5={product.feature5}
                      feature6={product.feature6}
                      feature7={product.feature7}
                      feature8={product.feature8}
                      feature9={product.feature9}
                      feature10={product.feature10}
                      techSpec1={product.techSpec1}
                      techSpec2={product.techSpec2}
                      techSpec3={product.techSpec3}
                      techSpec4={product.techSpec4}
                      techSpec5={product.techSpec5}
                      techSpec6={product.techSpec6}
                      techSpec7={product.techSpec7}
                      techSpec8={product.techSpec8}
                      techSpec9={product.techSpec9}
                      techSpec10={product.techSpec10}
                      techSpec11={product.techSpec11}
                      techSpec12={product.techSpec12}
                      subheader={moment(product.createdAt).format(
                        "MMMM DD, YYYY"
                      )}
                      comments={product.comments.length}
                      likes={product.likes.length}
                      likesId={product.likes}
                      showProducts={showProducts}
                    />
                  </div>
                ))
              )}
            </div>
            
          </Box>
        </Container>
      </Box> */}
    </>
  );
};
export default BlogPro;
