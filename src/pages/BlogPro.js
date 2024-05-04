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
const socket = io("/", {
  reconnection: true,
});

const BlogPro = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postAddLike, setPostAddLike] = useState([]);
  const [postRemoveLike, setPostRemoveLike] = useState([]);

  const showProducts = async () => {
    setLoading(true);
    try {
      
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
          
        </div>
        {/* <Container> */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container className="me-1" spacing={1}>
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
        {/* </Container> */}
      </Box>
   
  
    </>
  );
};
export default BlogPro;
