import Image from "next/image";
import bolt from "../../public/testimonials/bolt.png";
import testiImage from "../../public/testimonials/img (2).png";
const TestimonialsItem = ({ name }) => {
  return (
    <div className="text-center w-52 h-90 bg-white border-[1px] border-border rounded px-4 py-4 hover:border-b-4 hover:border-b-primary500 cursor-pointer hover:scale-110 hover:shadow-md ease-in-out duration-100">
      <div className="py-3">
        <Image src={bolt} alt="bolt" />
      </div>
      <p className="text-testiContent font-['Roboto'] leading-[24px] ">
        In our get creative course you will learn the fundamentals of design
        thinking and creative problem solving
      </p>
      <div className="py-3">
        <Image src={testiImage} alt="testi" />
      </div>
      <div className="py-3">
        <p className="text-[14px] text-testiName ">{name}</p>
        <p className="text-[12px] font-semibold text-testiContent ">
          Amazon Professor
        </p>
      </div>
    </div>
  );
};

export default TestimonialsItem;
