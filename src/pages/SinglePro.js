import Card from "@mui/material/Card";
import React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import axios, { Axios } from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import DOMPurify from "dompurify";
import NavbarProducts from "../components/NavbarProducts";
import jsPDF from "jspdf";
import logo from "../assets/333.png";
import axiosInstance from "./axiosInstance";
import "./Pro.css";
import Header from "../components/Header/Header";
const socket = io("/", {
  reconnection: true,
});

const renderUnorderedList = (items) => {
  return (
    <>
      <ul>
        {items
          .filter((item) => item) // Filter out empty or falsy values
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </>
  );
};

const SinglePro = () => {
  const downloadProductAsPDF = () => {
    const doc = new jsPDF();

    // Set image size and position
    const imgWidth = 100;
    const imgHeight = 100;
    const imgMargin = 10;
    const imgX = (doc.internal.pageSize.width - imgWidth) / 2;
    let imgY = imgMargin;

    // Add image to the PDF
    doc.addImage(image, "JPEG", imgX, imgY, imgWidth, imgHeight);

    // Add product details
    let textY = imgY + imgHeight + imgMargin + 10;
    const textX = imgMargin;
    const maxWidth = doc.internal.pageSize.width - 2 * imgMargin;

    // Add product details to the PDF with padding
    if (title) {
      doc.setFont("helvetica", "bold");
      let titleLines = doc.splitTextToSize(`Product Title: ${title}`, maxWidth);
      doc.text(titleLines, textX, textY);
      doc.setFont("helvetica", "normal");
      textY = checkPageHeight(doc, textY, titleLines.length);
    }

    if (content) {
      doc.setFont("helvetica", "bold");
      let contentHeader = "Product Content:";
      let contentHeaderLines = doc.splitTextToSize(contentHeader, maxWidth);
      let contentLines = doc.splitTextToSize(content, maxWidth);
      doc.text(contentHeaderLines, textX, textY);
      doc.setFont("helvetica", "normal");
      textY = checkPageHeight(doc, textY, contentHeaderLines.length);
      doc.text(contentLines, textX, textY);
      textY = checkPageHeight(doc, textY, contentLines.length);
    }

    if (
      feature1 ||
      feature2 ||
      feature3 ||
      feature4 ||
      feature5 ||
      feature6 ||
      feature7 ||
      feature8 ||
      feature9 ||
      feature10
    ) {
      doc.setFont("helvetica", "bold");
      doc.text("Features:", textX, textY);
      doc.setFont("helvetica", "normal");
      textY += 10;
      let featureArray = [
        feature1,
        feature2,
        feature3,
        feature4,
        feature5,
        feature6,
        feature7,
        feature8,
        feature9,
        feature10,
      ];
      featureArray
        .filter((feature) => feature)
        .forEach((feature) => {
          let lines = doc.splitTextToSize(`- ${feature}`, maxWidth - 10);
          doc.text(lines, textX + 10, textY);
          textY = checkPageHeight(doc, textY, lines.length);
        });
      textY += 10;
    }

    if (
      techSpec1 ||
      techSpec2 ||
      techSpec3 ||
      techSpec4 ||
      techSpec5 ||
      techSpec6 ||
      techSpec7 ||
      techSpec8 ||
      techSpec9 ||
      techSpec10 ||
      techSpec11 ||
      techSpec12
    ) {
      doc.setFont("helvetica", "bold");
      doc.text("Technical Specifications:", textX, textY);
      doc.setFont("helvetica", "normal");
      textY += 10;
      let specArray = [
        techSpec1,
        techSpec2,
        techSpec3,
        techSpec4,
        techSpec5,
        techSpec6,
        techSpec7,
        techSpec8,
        techSpec9,
        techSpec10,
        techSpec11,
        techSpec12,
      ];
      specArray
        .filter((spec) => spec)
        .forEach((spec) => {
          let lines = doc.splitTextToSize(`- ${spec}`, maxWidth - 10);
          doc.text(lines, textX + 10, textY);
          textY = checkPageHeight(doc, textY, lines.length);
        });
    }

    // Save the PDF with a file name if any content is available
    if (
      title ||
      content ||
      feature1 ||
      feature2 ||
      feature3 ||
      feature4 ||
      feature5 ||
      feature6 ||
      feature7 ||
      feature8 ||
      feature9 ||
      feature10 ||
      techSpec1 ||
      techSpec2 ||
      techSpec3 ||
      techSpec4 ||
      techSpec5 ||
      techSpec6 ||
      techSpec7 ||
      techSpec8 ||
      techSpec9 ||
      techSpec10 ||
      techSpec11 ||
      techSpec12
    ) {
      doc.save("product_details.pdf");
    }

    // Check if the text exceeds the page height and create a new page
  };
  const checkPageHeight = (doc, y, lines) => {
    let pageHeight = doc.internal.pageSize.height;
    let lineHeight = 10; // Assuming font size is 10
    if (y + lines * lineHeight > pageHeight - 10) {
      doc.addPage();
      return 10; // Reset to top of the page
    }
    return y + lines * lineHeight;
  };

  // end pdf controller

  const { userInfo } = useSelector((state) => state.signIn);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [feature1, setFeature1] = useState("");
  const [feature2, setFeature2] = useState("");
  const [feature3, setFeature3] = useState("");
  const [feature4, setFeature4] = useState("");
  const [feature5, setFeature5] = useState("");
  const [feature6, setFeature6] = useState("");
  const [feature7, setFeature7] = useState("");
  const [feature8, setFeature8] = useState("");
  const [feature9, setFeature9] = useState("");
  const [feature10, setFeature10] = useState("");
  const [techSpec1, setTechSpec1] = useState("");
  const [techSpec2, setTechSpec2] = useState("");
  const [techSpec3, setTechSpec3] = useState("");
  const [techSpec4, setTechSpec4] = useState("");
  const [techSpec5, setTechSpec5] = useState("");
  const [techSpec6, setTechSpec6] = useState("");
  const [techSpec7, setTechSpec7] = useState("");
  const [techSpec8, setTechSpec8] = useState("");
  const [techSpec9, setTechSpec9] = useState("");
  const [techSpec10, setTechSpec10] = useState("");
  const [techSpec11, setTechSpec11] = useState("");
  const [techSpec12, setTechSpec12] = useState("");
  const [image, setImage] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  //fetch single post
  const displaySingleProduct = async () => {
    setLoading(true);
    try {
      //
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/product/${id}`
      );
      setTitle(data.product.title);
      setContent(data.product.content);
      setFeature1(data.product.feature1);
      setFeature2(data.product.feature2);
      setFeature3(data.product.feature3);
      setFeature4(data.product.feature4);
      setFeature5(data.product.feature5);
      setFeature6(data.product.feature6);
      setFeature7(data.product.feature7);
      setFeature8(data.product.feature8);
      setFeature9(data.product.feature9);
      setFeature10(data.product.feature10);
      setTechSpec1(data.product.techSpec1);
      setTechSpec2(data.product.techSpec2);
      setTechSpec3(data.product.techSpec3);
      setTechSpec4(data.product.techSpec4);
      setTechSpec5(data.product.techSpec5);
      setTechSpec6(data.product.techSpec6);
      setTechSpec7(data.product.techSpec7);
      setTechSpec8(data.product.techSpec8);
      setTechSpec9(data.product.techSpec9);
      setTechSpec10(data.product.techSpec10);
      setTechSpec11(data.product.techSpec11);
      setTechSpec12(data.product.techSpec12);
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

  const sanitizeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          bgcolor: "#fafafa",
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
            {/* <Card sx={{ maxWidth: 1000, height: "100%" }}>
              
            </Card> */}

            <div className="container singlepro-bg">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <img
                    src={image}
                    className="img-fluid pt-2 border"
                    alt="name"
                  />
                  <h2>{title}</h2>
                  
                  <p>
                    {content}
                  </p>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 mt-3">
                  <p>
                  <h2>{title}</h2>
                    Details: Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum
                  </p>
                  <p>
                  <p>
                    {content}
                  </p>
                    <b>Formula: </b>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </Box>
    </>
  );
};

export default SinglePro;
