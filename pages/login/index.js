import React from "react";
import LoginModal from "../../components/molecules/LoginModal";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
const index = () => {
  return (
    <div>
      <Header />
      <LoginModal />
      <div className="bg-green-200 h-screen w-screen"></div>
      <Footer />
    </div>
  );
};

export default index;
