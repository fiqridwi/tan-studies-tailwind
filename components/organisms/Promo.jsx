import React from "react";
import PromoItem from "../molecules/PromoItem";
import CallHeroButton from "../atoms/CallHeroButton";

const Promo = () => {
  return (
    <div className="px-24 py-16">
      <p className="text-center font-bold text-[44px] leading-[60px] text-font500 pb-16">
        Keunggulan TAN Studies
      </p>
      <div className="flex justify-center text-center">
        <PromoItem ill="pengajar" title="Pengajar Ahli & Seru" />
        <PromoItem ill="soal" title="Pengajar Ahli & Seru" />
        <PromoItem ill="belajar" title="Pengajar Ahli & Seru" />
      </div>
      <CallHeroButton />
    </div>
  );
};

export default Promo;
