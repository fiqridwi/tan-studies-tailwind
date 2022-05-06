import Image from "next/image";

const PromoItem = ({ ill, title }) => {
  return (
    <div className="w-[55rem] px-9">
      <Image src={require(`../../public/${ill}.png`)} alt="illustration" />
      <div className="text-font500 text-center">
        <p className="font-bold text-[20px] py-5">{title}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
          vulputate nisi, commodo ullamcorper purus. Aenean et quam amet cras.
          Amet cursus dictum donec orci. In platea amet, pellentesque enim sed.
        </p>
      </div>
    </div>
  );
};

export default PromoItem;
