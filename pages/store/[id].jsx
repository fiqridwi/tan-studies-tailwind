import { useRouter } from "next/router";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import Image from "next/image";
import tpaBig from "../../public/store/tpa-big.png";
import star from "../../public/store/Star.png";
import DescriptionBox from "../../components/molecules/DescriptionBox";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, sendId } from "../../redux/reducer";
import Link from "next/link";

const Details = () => {
  // const router = useRouter();
  // const data = router.query;
  const dispatch = useDispatch();
  const { id, products, cartAmount } = useSelector((state) => state.cart);

  const product = products.filter((product) => product.id === id);

  console.log(cartAmount);
  return (
    <div>
      <Header />
      <div className="flex justify-start w-full px-24 pt-5">
        <p className="text-primary500">Home</p>
        <p className="text-font50 px-2">{" > "}</p>
        <p className="text-primary500">SMA</p>
        <p className="text-font50 px-2">{" > "}</p>
        <p className="text-font50 ">TPA</p>
      </div>

      {product.map((data, i) => {
        return (
          <div className="flex items-center px-24 py-10" key={i}>
            <div className="mr-5">
              <Image src={tpaBig} alt="best-sales-book" />
            </div>

            <div className="flex flex-col justify-around items-start p-3 w-1/2">
              <p className="text-[30px] font-bold text-testiName leading-[30px]">
                {data.productName}
              </p>
              <div className="flex py-5">
                <div className="mr-5">
                  <p className="text-[12px] text-storeAu">Author</p>
                  <p className="text-[12px] font-semibold">Buku Bagus</p>
                </div>
                <div className="mr-5">
                  <p className="text-[12px] text-storeAu">Program</p>
                  <p className="text-[12px] font-semibold">TPA</p>
                </div>
                <div>
                  <p className="text-[12px] text-storeAu">Quantity</p>
                  <p className="text-[12px] font-semibold">{data.quantity}</p>
                </div>
              </div>

              <div className="w-2/3">
                <p className="font-bold text-[24px] text-primary500">
                  {data.price}
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
                <div className="py-8 flex justify-between">
                  <div className="rounded bg-white text-font50 flex justify-between border-border border-2 items-center w-1/3 mr-3 ">
                    <div
                      onClick={() => dispatch(removeFromCart({ id }))}
                      className="w-full h-full text-center cursor-pointer hover:bg-primary500 hover:text-white flex items-center font-bold text-[20px] justify-center rounded"
                    >
                      <p>-</p>
                    </div>
                    <p className="border-border border-x-2 w-16 text-testiName text-center outline-none">
                      {cartAmount}
                    </p>

                    <div
                      onClick={() => dispatch(addToCart({ id }))}
                      className="w-full h-full text-center cursor-pointer hover:bg-primary500 hover:text-white flex items-center font-bold text-[20px] justify-center rounded"
                    >
                      <p>+</p>
                    </div>
                  </div>
                  <Link href="/checkout">
                    <button
                      onClick={() => dispatch(sendId(data.id))}
                      className="uppercase bg-primary500 hover:bg-primary50 text-white w-2/3 py-2 rounded "
                    >
                      beli
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <DescriptionBox />

      <Footer />
    </div>
  );
};

export default Details;
