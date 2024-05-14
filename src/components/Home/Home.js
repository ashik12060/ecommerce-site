import React from "react";
import ItemsHome from "../../pages/ItemsHome";
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
