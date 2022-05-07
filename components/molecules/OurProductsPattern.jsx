import Image from "next/image";

const OurProductsPattern = ({ title1, title2, ill1, ill2 }) => {
  return (
    <div className="our-products-pattern px-24 flex justify-center items-center">
      <div className="w-2/5 h-4/5  p-10 mx-10 bg-white shadow-xl rounded-xl flex flex-col items-center justify-center">
        <div>
          <Image
            src={require(`../../public/products/${ill1}.png`)}
            alt="illustration"
          />
        </div>

        <div>
          <p className="font-bold text-[28px] text-testiName text-left">
            {title1}
          </p>
          <p className="text-testiContent text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ac
            orci, euismod eu amet ullamcorper eget faucibus. Aliquam tortor
            augue vitae, elementum erat vehicula senectus.
          </p>
        </div>
      </div>
      <div className="w-2/5 h-4/5 p-10 mx-10 bg-white shadow-xl rounded-md flex flex-col items-center justify-center">
        <div>
          <Image
            src={require(`../../public/products/${ill2}.png`)}
            alt="illustration"
          />
        </div>

        <div>
          <p className="font-bold text-[28px] text-testiName text-left">
            {title2}
          </p>
          <p className="text-testiContent text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ac
            orci, euismod eu amet ullamcorper eget faucibus. Aliquam tortor
            augue vitae, elementum erat vehicula senectus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProductsPattern;
