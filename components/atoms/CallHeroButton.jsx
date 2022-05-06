import React from "react";
import chatIcon from "../../public/chat.png";
import Image from "next/image";
const CallHeroButton = () => {
  return (
    <button className="absolute bottom-[-124px] right-[120px]  flex items-center justify-between px-4 py-2 bg-primary500 hover:bg-primary50 shadow-lg rounded-[50px] text-white font-bold leading-[33px] text-[20px]">
      <div className="pr-2 flex items-center">
        <Image src={chatIcon} alt="chat" />
      </div>
      Hubungi Kami
    </button>
  );
};

export default CallHeroButton;
