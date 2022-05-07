import React from "react";

const DescriptionBox = () => {
  return (
    <div className="px-24 py-5">
      <div className="shadow-xl w-full bg-white">
        <div className="shadow-md flex">
          <div className="box-border">
            <p className="font-bold text-[20px] px-7 py-2 text-storeAu hover:text-primary500 cursor-pointer hover:border-b-4 hover:border-primary500 box-border ">
              Deskripsi
            </p>
          </div>
          <div className="box-border">
            <p className="font-bold text-[20px] px-7 py-2 text-storeAu hover:text-primary500 cursor-pointer hover:border-b-4 hover:border-primary500 box-border ">
              Detail Buku
            </p>
          </div>
          <div className="box-border">
            <p className="font-bold text-[20px] px-7 py-2 text-storeAu hover:text-primary500 cursor-pointer hover:border-b-4 hover:border-primary500 box-border ">
              Ulasan
            </p>
          </div>
        </div>
        <div className="p-7 text-testiName">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque aliquam donec sagittis semper integer adipiscing.
            Sagittis dui ultricies mattis fames ultricies. Purus turpis aliquam
            purus morbi vel posuere consequat. Blandit pulvinar dictum bibendum
            nulla risus. Amet, semper ipsum dolor ultricies. Lacus nibh purus
            scelerisque in nulla penatibus faucibus egestas nunc. Turpis nibh
            sed suspendisse feugiat penatibus morbi. Lectus orci ac pharetra
            diam rutrum est at ac eu. Justo, etiam ultrices lectus faucibus ac
            faucibus netus lectus lectus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
