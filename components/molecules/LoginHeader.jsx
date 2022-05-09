import React from "react";
import Image from "next/image";
import profile from "../../public/icon/profile-icon.png";
import Link from "next/link";

const LoginHeader = () => {
  return (
    <div className="shadow-md z-10">
      {/* header */}
      <div className="px-24 py-5">
        <div className="flex justify-between">
          <Link href="/">
            <p className="text-[28px] font-bold text-font500 cursor-pointer">
              TAN Studies
            </p>
          </Link>

          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center">
              <Image src={profile} alt="profile" />
            </div>
            <p className="text-font50 pl-2">John Doe</p>
          </div>
        </div>
      </div>
      {/* nav */}
      <div className="flex justify-center items-center py-5">
        <p className="font-bold text-font50 hover:text-primary500 cursor-pointer mx-5 uppercase">
          Dashboard
        </p>
        <p className="font-bold text-font50 hover:text-primary500 cursor-pointer mx-5 uppercase">
          categories
        </p>
        <p className="font-bold text-font50 hover:text-primary500 cursor-pointer mx-5 uppercase">
          voucher saya
        </p>
        <p className="font-bold text-font50 hover:text-primary500 cursor-pointer mx-5 uppercase">
          cara order
        </p>
      </div>
    </div>
  );
};

export default LoginHeader;
