import React from "react";
import Header from "../components/Header/Header";
import Popularity from "../components/Popularity/Popularity";
import Ad from "../components/Ads/Ad";
import Property from "../components/Property/Property";
import Ad2 from "../components/Ads/Ad2";
import Rest from "../components/Rest/Rest";
import Interview from "../components/Interview/Interview";
import Ad3 from "../components/Ads/Ad3";
import Products from "../components/Products/Products";
import Offer from "../components/Offer/Offer";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Popularity />
      <Ad/>
      <Property/>
      <Ad2/>
      <Rest/>
      <Ad/>
      <Interview/>
      <Ad3/>  
      <Products/>
      <Offer/>
      <Footer/>
    </>
  );
}

export default Home;
