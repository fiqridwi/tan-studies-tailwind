import React from "react";
import Sponsor from "../atoms/Sponsor";
import FooterMenu from "../molecules/FooterMenu";
import FooterSocial from "../molecules/FooterSocial";

const Footer = () => {
  return (
    <footer className="footer-bg px-24 py-10">
      <p className="text-center text-white mb-5 ">Supported by</p>
      <Sponsor />
      <FooterMenu />
      <FooterSocial />
      <div className="w-full h-[1px] footer-line my-7"></div>
      <p className="text-[14px] text-fontFooterCopyright text-center">
        Copyright © PT TENAGA ALAMI NUSANTARA
      </p>
    </footer>
  );
};

export default Footer;
