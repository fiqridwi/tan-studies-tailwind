import Image from "next/image";
import map from "../../public/footer/map.png";
import googleApp from "../../public/footer/google.png";
import appStore from "../../public/footer/apple.png";
import wa from "../../public/footer/whatsapp-logo.png";

const FooterMenu = () => {
  return (
    <div className="flex py-14 justify-between">
      <div className="w-1/4">
        <div className="bg-white text-[28px] font-bold w-15 px-3 py-2 w-40 ">
          <p>Company</p>
        </div>
        <p className="font-['Roboto'] text-fontFooter leading-[24px] py-5  ">
          Jl. H. Yahya Nuih No. 20A RT 01 RW 05, Margonda Raya, Kemiri Muka,
          Kecamatan Beji, Kota Depok, Jawa Barat 16423
        </p>
        <div>
          <Image src={map} alt="map" />
        </div>
      </div>

      <div>
        <p className="text-[22px] text-white pb-3">Menu</p>
        <div className="cursor-pointer font-['Roboto'] text-fontFooter leading-[24px]">
          <p className="hover:text-primary500">Produk</p>
          <p className="hover:text-primary500">Partner</p>
          <p className="hover:text-primary500">Jadwal Bimbel</p>
          <p className="hover:text-primary500">Tentang Kami</p>
        </div>
      </div>

      <div>
        <p className="text-[22px] text-white pb-3">Download Aplikasi</p>
        <div className="flex flex-col">
          <div>
            <Image src={googleApp} alt="google" />
          </div>
          <div>
            <Image src={appStore} alt="app-store" />
          </div>
        </div>
      </div>

      <div>
        <p className="text-[22px] text-white pb-3">Get in touch</p>
        <p className="font-['Roboto'] text-fontFooter leading-[24px]">
          Contact us if you need help with anything
        </p>
        <div className="w-36 bg-primary500 cursor-pointer rounded flex justify-between  items-center py-2 px-3 text-white font-bold text-[14px] my-2">
          <div>
            <Image src={wa} alt="wa" />
          </div>
          <p>08123456789</p>
        </div>
        <div className="w-36 bg-primary500 cursor-pointer rounded flex justify-between  items-center py-2 px-3 text-white font-bold text-[14px] my-2">
          <div>
            <Image src={wa} alt="wa" />
          </div>
          <p>08123456789</p>
        </div>
        <div className="w-36 bg-primary500 cursor-pointer rounded flex justify-between  items-center py-2 px-3 text-white font-bold text-[14px] my-2">
          <div>
            <Image src={wa} alt="wa" />
          </div>
          <p>08123456789</p>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
