import Image from "next/image";
import trialIll from "../../public/triall-ill.png";
import trialVideo from "../../public/trial video.png";

const Trial = () => {
  return (
    <section className="flex px-24 py-24">
      <div className="w-1/2 p-5">
        <div>
          <Image src={trialIll} alt="trial" />
        </div>
        <div className="text-font500">
          <p className="font-bold text-[44px]">Video Trial TryOut Online</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            sed facilisis volutpat faucibus. Elit consectetur tempus, nunc sit
            purus diam. Facilisis platea molestie consectetur mattis molestie
            amet a volutpat. Et mollis at montes, adipiscing mi integer massa
            faucibus.
          </p>
        </div>
      </div>
      <div className="cursor-pointer">
        <Image src={trialVideo} alt="video" />
      </div>
    </section>
  );
};

export default Trial;
