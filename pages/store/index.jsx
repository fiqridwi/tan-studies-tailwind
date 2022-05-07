import React from "react";
import StoreProductContainer from "../../components/molecules/StoreProductContainer";
import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";
import Recommendation from "../../components/organisms/Recommendation";

const Store = () => {
  return (
    <div>
      <Header />
      <Recommendation />
      <StoreProductContainer />
      <Footer />
    </div>
  );
};

export default Store;
