import React from "react";
import Header1 from "../Header/Header";
import HomeFooter from "../Footer/HomeFooter";
import BannerImages from "../BannerImages/BannerImages";
import BlogPro from "../../pages/BlogPro";
import ItemsHome from "../../pages/ItemsHome";
import Carousel from "../Carousel/Carousel";
import Test from "./Test";
import Test2 from "./Test2";
import CarouselHandle from "../CarouselHandle/CarouselHandle";
import MapLoaction from "../MapLocation/MapLoaction";
// import Header from "../Shared/Header/Header";
import TableHeader from "../TableHeader/TableHeader";
import ProductsLists from "../ProductsLists/ProductsLists";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
     
      <TableHeader />

      <ProductsLists />
      <div className="mt-5">
      <ItemsHome />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
