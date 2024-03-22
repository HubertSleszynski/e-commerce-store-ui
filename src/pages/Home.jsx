import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Products from "../components/Products";
import Collections from "../components/Collections";
import BestSellers from "../components/BestSellers";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Collections />
      <BestSellers />
      <Newsletter />
    </div>
  );
};

export default Home;
