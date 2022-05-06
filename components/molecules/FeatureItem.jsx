import Image from "next/image";

const FeatureItem = ({ title, ill }) => {
  return (
    <div className="bg-white h-64 w-48 flex flex-col items-center px-5 py-3 shadow-md hover:shadow-xl border-[1px] rounded border-border  hover:border-b-4 hover:border-b-primary500 ease-in duration-100 cursor-pointer mx-3 hover:-translate-y-1">
      <div className="pt-2">
        <Image src={require(`../../public/feature/${ill}.png`)} alt="feature" />
      </div>
      <div className="text-left ">
        <div className="text-font500 mb-5">
          <p className="font-bold text-[20px]">{title}</p>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex items-center ">
          <p className="text-primary500">Learn More</p>
          <div className="pl-5 flex">
            <Image src={require("../../public/icon/arrow.png")} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
