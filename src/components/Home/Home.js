import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import ProductsLists from "../ProductsLists/ProductsLists";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { CartProvider } from "../../hooks";
import SellerProductsShow from "../SellerProductsShow.js/SellerProductsShow";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <TableHeader />

      <ProductsLists />
      <div className="mt-5">
        {/* <ItemsHome /> */}
      </div>
      <SellerProductsShow />
      <Footer />
    </div>
  );
};

export default Home;
