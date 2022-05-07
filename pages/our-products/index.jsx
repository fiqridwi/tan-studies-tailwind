import Image from "next/image";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import voucher from "../../public/products/voucher.png";
import OurProductsFlat from "../../components/molecules/OurProductsFlat";
import OurProductsPattern from "../../components/molecules/OurProductsPattern";

const OurProduct = () => {
  return (
    <section>
      <Header />
      <div className="py-10">
        <p className="text-[40px] text-center font-bold ">
          Layanan dan Produk Kami
        </p>
      </div>

      <div className="our-products-bg w-screen mb-16">
        <OurProductsFlat
          title1="Jelajah Voucher"
          title2="Jelajah Video Belajar"
          ill1="voucher"
          ill2="video"
        />
        <OurProductsPattern
          title1="Jelajah Private Online"
          title2="Jelajah Group Online"
          ill1="private"
          ill2="group"
        />
        <OurProductsFlat
          title1="Jelajah Private Tatap Muka"
          title2="Jelajah TryOut Online"
          ill1="tatap"
          ill2="tryout"
        />
        <OurProductsPattern
          title1="Jelajah Kelas Online"
          title2="Jelajah Online Store"
          ill1="kelas"
          ill2="store"
        />
      </div>
      <Footer />
    </section>
  );
};

export default OurProduct;
