import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import tpaSmall from "../../public/store/tpa-small.png";
import star from "../../public/store/Star.png";

const Products = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      productName: "Best Of The Best Psikotes & TPA 1",
      productQuantity: 10,
      price: 110000,
    },
    {
      id: 2,
      productName: "Best Of The Best Psikotes & TPA 2",
      productQuantity: 10,
      price: 120000,
    },
    {
      id: 3,
      productName: "Best Of The Best Psikotes & TPA 3",
      productQuantity: 10,
      price: 130000,
    },
    {
      id: 4,
      productName: "Best Of The Best Psikotes & TPA 4",
      productQuantity: 10,
      price: 140000,
    },
    {
      id: 5,
      productName: "Best Of The Best Psikotes & TPA 5",
      productQuantity: 10,
      price: 150000,
    },
    {
      id: 6,
      productName: "Best Of The Best Psikotes & TPA 6",
      productQuantity: 10,
      price: 160000,
    },
    {
      id: 7,
      productName: "Best Of The Best Psikotes & TPA 7",
      productQuantity: 10,
      price: 170000,
    },
    {
      id: 8,
      productName: "Best Of The Best Psikotes & TPA 8",
      productQuantity: 10,
      price: 180000,
    },
    {
      id: 9,
      productName: "Best Of The Best Psikotes & TPA 9",
      productQuantity: 10,
      price: 190000,
    },
  ]);
  return (
    <div className="flex flex-wrap justify-center">
      {product.map((item, i) => {
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
                  <button className="uppercase bg-primary500 hover:bg-primary50 text-white w-full py-2 rounded ">
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
