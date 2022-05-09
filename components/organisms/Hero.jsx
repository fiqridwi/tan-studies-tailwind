import Image from "next/image";
import playIcon from "../../public/play.png";
import tanHero from "../../public/Group 1659.png";

const Hero = () => {
  return (
    <div className="hero-image xl:h-[566px] flex justify-center w-screen">
      <div className="flex flex-col xl:flex-row justify-center items-center w-4/5   ">
        <div className="bg-white xl:w-1/2 bg-opacity-80 xl:h-[346px]  flex flex-col justify-center items-left xl:p-16 p-5">
          <h1 className="xl:text-[55px] text-[40px] font-semibold leading-[65px] text-font500">
            TAN Studies
          </h1>
          <p className="font-['Roboto'] text-font500 text-[16px] leading-[24px] tracking-[0.2px] xl:py-3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui
            mattis nascetur vitae, cras ornare ut faucibus dignissim. Neque,
            fermentum, amet, velit etiam commodo suspendisse rutrum urna. Ac
            vestibulum ut nulla magna.{" "}
          </p>

          <div className="text-center">
            <button className="uppercase text-white border-2 bg-primary500 hover:bg-primary50 text-[14px] leading-[19px] text-center font-bold rounded-[3px] px-3 py-3 mr-2">
              daftar sekarang
            </button>
            <button className=" justify-between uppercase text-font500 border-2 py-2 px-3 border-font50 text-center items-center font-bold text-[14px] leading-[19px] ">
              putar video <Image src={playIcon} alt="play" />
            </button>
          </div>
        </div>
        <div className="flex">
          <Image src={tanHero} alt="tan" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
