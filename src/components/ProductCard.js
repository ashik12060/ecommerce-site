import Card from "@mui/material/Card";
import "./ProductCard.css";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import am from "../assets/333.png";
import axiosInstance from "../pages/axiosInstance";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
// import axiosInstance from "../pages/axiosInstance";
import img1 from '../assets/air-bud.jpg'

const ProductCard = ({
  id,
  title,
  subheader,
  image,
  content,
  comments,
  likes,
  showProducts,
  likesId,
}) => {
  const { userInfo } = useSelector((state) => state.signIn);
  const [truncatedContent, setTruncatedContent] = useState("");

  useEffect(() => {
    const contentArray = content.split("\n");
    const truncated = contentArray.slice(0, 8).join("\n");
    setTruncatedContent(truncated);
  }, [content]);

  const addLike = async () => {
    try {
      const { data } = await axiosInstance.put(
        `${process.env.REACT_APP_API_URL}/api/addlike/product/${id}`
      );
      console.log("likes", data.product);
      if (data.success == true) {
        showProducts();
      }
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  const removeLike = async () => {
    try {
      const { data } = await axiosInstance.put(
        `${process.env.REACT_APP_API_URL}/api/removelike/product/${id}`
      );
      console.log("remove likes", data.product);
      if (data.success == true) {
        showProducts();
      }
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };


  return (
    <div className="overflow-hidden ">
      
  


      <div className="row row-cols-1 row-cols-md-4 row-cols-lg-6  ">
        <div id="productInfo" className=" advisors-info  w-100 shadow">
          <div className="">
            <Link to={`/product/${id}`}>
              <img className="advisor-img w-100  border " src={image} alt="advisor_team" />
            </Link>
          </div>
          {/* <h3 className="py-5">{title}</h3> */}

          <div className="mt-2  mb-3 card-styles ps-2 pt-2">

            <h3 className="pt-2">{title}</h3>
            

            <div className="me-4 ms-1 me-1" style={{ marginTop: "auto" }}>
              <div style={{ maxHeight: "7em", overflow: "hidden" }}>
                {truncatedContent}
                
              </div>
              
              <div className="pb-2">
              <Link className=" fw-bold fs-6 link-to" to={`/product/${id}`}>
                 
                 Find More <FontAwesomeIcon icon={faAnglesRight} />
               
             </Link>
               
              </div>
            </div>
          </div>

        </div>
        <h3 className="py-5">{title}</h3>
      </div>

    </div>
  );
};

export default ProductCard;
