import facebook from "../../public/footer/Facebook.png";
import twitter from "../../public/footer/Linked.png";
import google from "../../public/footer/Google.png";
import youtube from "../../public/footer/Youtube.png";
import pinterest from "../../public/footer/Pinterest.png";
import linkedin from "../../public/footer/Linked (1).png";
import Image from "next/image";
const FooterSocial = () => {
  return (
    <div className="flex justify-center">
      <div className="px-2">
        <Image src={linkedin} alt="linkedin" />
      </div>
      <div className="px-2">
        <Image src={facebook} alt="facebook" />
      </div>
      <div className="px-2">
        <Image src={twitter} alt="twitter" />
      </div>
      <div className="px-2">
        <Image src={google} alt="google" />
      </div>
      <div className="px-2">
        <Image src={youtube} alt="youtube" />
      </div>
      <div className="px-2">
        <Image src={pinterest} alt="pinterest" />
      </div>
    </div>
  );
};

export default FooterSocial;
