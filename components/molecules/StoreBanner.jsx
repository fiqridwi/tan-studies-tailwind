import Image from "next/image";

import banner1 from "../../public/store/store-banner-1.png";
import banner2 from "../../public/store/banner2.png";

const StoreBanner = () => {
  return (
    <div className="w-1/2 p-5 ">
      <div className="bg-primary500 flex text-white rounded mb-2">
        <div className="p-5 w-2/3">
          <p className="uppercase font-extrabold text-[24px] tracking-[2px] ">
            lOREM IPSUM BANNER
          </p>
          <p className="text-[12px] text-justify py-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            urna, viverra porttitor odio tellus gravida adipiscing massa
            sagittis. Nulla cras orci, consectetur fames nibh id lacus, felis
            massa. Ac amet massa ullamcorper sed augue mauris ut. Lorem nec
            dolor nulla tincidunt.
          </p>
          <button className="bg-yellow uppercase w-full rounded py-2 ">
            read more
          </button>
        </div>
        <div className="flex items-end">
          <Image src={banner1} alt="banner" />
        </div>
      </div>
      <div className="bg-testiName flex text-white rounded">
        <div className="p-5 w-2/3">
          <p className="uppercase font-extrabold text-[24px] tracking-[2px] ">
            lOREM IPSUM BANNER
          </p>
          <p className="text-[12px] text-justify py-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            urna, viverra porttitor odio tellus gravida adipiscing massa
            sagittis. Nulla cras orci, consectetur fames nibh id lacus, felis
            massa. Ac amet massa ullamcorper sed augue mauris ut. Lorem nec
            dolor nulla tincidunt.
          </p>
          <button className="bg-yellow uppercase w-full rounded py-2 ">
            read more
          </button>
        </div>
        <div className="flex items-end">
          <Image src={banner1} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default StoreBanner;
