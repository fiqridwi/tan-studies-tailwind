import React from "react";
import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";

const Checkout = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center w-screen py-10">
        <div className="w-3/5 shadow-xl px-24 py-10 flex flex-col text-testiName rounded ">
          <div>
            <p className="text-center text-testiName text-[24px] py-7 ">
              Item Checkout Detail
            </p>
          </div>
          <div className="py-2">
            <p className="font-bold text-left">Nama Item</p>
            <p>Paket buku</p>
          </div>
          <div className="py-2">
            <p className="font-bold">Kode Item</p>
            <p>Buku Original</p>
          </div>
          <div className="py-2">
            <p className="font-bold">Jumlah Pembelian</p>
            <p>2</p>
          </div>
          <div className="py-2">
            <p className="font-bold">Harga Item</p>
            <p className="text-primary500 font-bold">350000</p>
          </div>
          <div className="flex items-center py-2">
            <input type="checkbox" name="" id="" />
            <div className="px-5">
              <p>Area Pengiriman Jabodetabek</p>
              <p className="text-storeAu">Tambahan Biaya Rp. 20.000,-</p>
            </div>
          </div>
          <div className="flex items-center py-2">
            <input type="checkbox" name="" id="" />
            <div className="px-5">
              <p>Area Pengiriman Luar Jabodetabek</p>
              <p className="text-storeAu">Tambahan Biaya Rp. 20.000,-</p>
            </div>
          </div>
          <div className="py-2">
            <p className="mb-2">Alamat Lengkap</p>
            <input
              type="text"
              name=""
              id=""
              className="w-full h-16 border-border border-2 rounded px-5 "
              placeholder="Masukan Alamat Lengkap"
            />
          </div>
          <div className="flex items-center py-5">
            <input type="checkbox" name="" id="" />
            <p className="px-5">Saya Setuju untuk Membeli Item Ini</p>
          </div>
          <div className="flex justify-around items-center">
            <button className="text-center uppercase px-16 py-2 text-white bg-backButton rounded-sm font-bold">
              Kembali
            </button>
            <button className="text-center uppercase px-16 py-2 text-white bg-primary500 rounded-sm font-bold">
              Kembali
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
