import React from "react";
import MainHeader from "../molecules/MainHeader";
import Nav from "../molecules/Nav";
import Image from "next/image";
import menu from "../../public/icon/menu.png";
const Header = () => {
  return (
    <div className="w-screen xl:h-2/3 h-2/3  header">
      <div>
        <MainHeader />
      </div>

      <div className="hidden xl:block">
        <Nav />
      </div>

      <div className="xl:hidden flex items-center justify-end px-10 py-5">
        <p className="text-center text-[28px] font-bold text-font500 pr-10">
          Tan Studies
        </p>
        <div>
          {" "}
          <Image src={menu} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Header;
