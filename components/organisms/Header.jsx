import React from "react";
import MainHeader from "../molecules/MainHeader";
import Nav from "../molecules/Nav";
const Header = () => {
  return (
    <div className="w-screen h-2/3 header ">
      <MainHeader />
      <Nav />
    </div>
  );
};

export default Header;
