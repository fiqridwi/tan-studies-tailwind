import React from "react";
import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";
import { useSelector, useDispatch } from "react-redux";
import { buyProduct } from "../../redux/reducer";
import Link from "next/link";
const Checkout = () => {
  const dispatch = useDispatch();
  const { id, products, cartAmount } = useSelector((state) => state.cart);

  const product = products.filter((product) => product.id === id);

  return (
    <div>
      <Header />
      {product.map((item, i) => {
        return (
          <div key={i} className="flex justify-center w-screen py-10">
            <div className="w-3/5 shadow-2xl px-24 py-10 flex flex-col text-testiName rounded ">
              <div>
                <p className="text-center text-testiName text-[24px] py-7 ">
                  Item Checkout Detail
                </p>
              </div>
              <div className="py-2">
                <p className="font-bold text-left">Nama Item</p>
                <p>{item.productName}</p>
              </div>
              <div className="py-2">
                <p className="font-bold">Kode Item</p>
                <p>Buku Original</p>
              </div>
              <div className="py-2">
                <p className="font-bold">Jumlah Pembelian</p>
                <p>{cartAmount}</p>
              </div>
              <div className="py-2">
                <p className="font-bold">Harga Item</p>
                <p className="text-primary500 font-bold">
                  Rp. {item.price * cartAmount}
                </p>
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
                <Link href={`/store/${id}`}>
                  <button className="text-center uppercase px-16 py-2 text-white bg-backButton rounded-sm font-bold">
                    Kembali
                  </button>
                </Link>
                <Link href={`/store/${id}`}>
                  <button
                    onClick={() => dispatch(buyProduct({ id }))}
                    className="text-center uppercase px-16 py-2 text-white bg-primary500 rounded-sm font-bold"
                  >
                    Beli
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default Checkout;
