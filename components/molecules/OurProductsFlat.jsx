import Image from "next/image";

const OurProductsFlat = ({ title1, title2, ill1, ill2 }) => {
  return (
    <div className="flex px-24 py-10">
      <div className="w-1/2 px-20 flex flex-col items justify-center">
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
      <div className="w-1/2 px-20 flex flex-col items justify-center">
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

export default OurProductsFlat;
