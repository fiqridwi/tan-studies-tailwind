import { useRouter } from "next/router";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import Image from "next/image";
import tpaBig from "../../public/store/tpa-big.png";
import star from "../../public/store/Star.png";
const Details = () => {
  const router = useRouter();
  const data = router.query;
  console.log(data);
  return (
    <div>
      <Header />
      <div className="flex items-center px-24 py-10">
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
              <p className="text-[12px] font-semibold">
                {data.productQuantity}
              </p>
            </div>
          </div>

          <div className="w-2/3">
            <p className="font-bold text-[24px] text-primary500">
              {data.price}
            </p>
            <p className="line-through tracking-wide opacity-50">Rp. 200.000</p>
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
            <div className="py-8">
              <button className="uppercase bg-primary500 hover:bg-primary50 text-white w-full py-2 rounded ">
                beli
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
