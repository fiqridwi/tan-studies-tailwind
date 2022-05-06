import Image from "next/image";
import logo from "../../public/Frame 732.png";
import searchIcon from "../../public/search.png";
const MainHeader = () => {
  return (
    <header className="flex justify-between items-center h-[100px] w-full px-24 ">
      <div>
        <Image src={logo} alt="tan-logo" />
      </div>

      <div className="flex  justify-between items-center border-[1px] h-[36px] w-1/3 rounded-[3px] pl-3">
        <input
          type="text"
          placeholder="Search"
          className="focus:outline-none text-font500"
        />
        <div className="pr-5 flex items-center cursor-pointer">
          <Image src={searchIcon} alt="search" />
        </div>
      </div>
      <div className="flex cursor-pointer font-bold uppercase text-font500 text-[14px]">
        <p className="hover:text-primary500">Login </p>
        <p className="px-2 cursor-default text-font50">|</p>
        <p className="hover:text-primary500">Register</p>
      </div>
    </header>
  );
};

export default MainHeader;
