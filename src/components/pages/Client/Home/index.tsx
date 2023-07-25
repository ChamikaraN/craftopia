import React from "react";
import AboutUs from "@organisms/Client/Home/AboutUs";
import Banner from "@organisms/Client/Home/Banner";
import BestCatagories from "@organisms/Client/Home/BestCatagories";
import Newsletter from "@organisms/Client/Home/Newsletter";
import SpecialSelection from "@organisms/Client/Home/SpecialSelection";
import "./styles.css";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <SpecialSelection />
      <BestCatagories />
      <AboutUs />
      <Newsletter />
    </>
  );
};

export default Home;
