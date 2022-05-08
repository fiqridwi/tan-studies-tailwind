import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import tpaSmall from "../../public/store/tpa-small.png";
import star from "../../public/store/Star.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sendId } from "../../redux/reducer";

const Products = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((item, i) => {
        return (
          <div
            key={i}
            className="w-56 px-3 bg-white py-2 productItem rounded shadow-md m-5 "
          >
            <div className="text-center">
              <Image src={tpaSmall} alt="book" />
            </div>
            <p className="text-[22px] leading-[30px] text-testiName">
              {item.productName}
            </p>
            <div className="w-full">
              <p className="font-bold text-[24px] text-primary500">
                {item.price}
              </p>
              <p className="line-through tracking-wide opacity-50">
                Rp. 200.000
              </p>
              <div className="flex">
                <div className="flex">
                  <div>
                    <Image src={star} alt="rating" />
                  </div>
                  <div>
                    <Image src={star} alt="rating" />
                  </div>
                  <div>
                    <Image src={star} alt="rating" />
                  </div>
                  <div>
                    <Image src={star} alt="rating" />
                  </div>
                  <div>
                    <Image src={star} alt="rating" />
                  </div>
                </div>
                <p className="text-[12px] text-storeRecRate">(32)</p>
              </div>
              <div className="py-2 ">
                <Link
                  href={{
                    pathname: `/store/${item.id}`,
                    query: item,
                  }}
                >
                  <button
                    onClick={() => dispatch(sendId(item.id))}
                    className="uppercase bg-primary500 hover:bg-primary50 text-white w-full py-2 rounded "
                  >
                    beli
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
