import Image from "next/image";
import logo from "../../public/Frame 732.png";
import searchIcon from "../../public/search.png";
import Link from "next/link";
const MainHeader = () => {
  return (
    <header className="flex xl:justify-between justify-end items-center h-[70px] xl:h-[100px] w-full xl:px-24 px-10 ">
      <div className="hidden xl:block">
        <Image src={logo} alt="tan-logo" />
      </div>

      <div className="hidden xl:flex justify-between items-center border-[1px] h-[36px] w-1/3 rounded-[3px] pl-3">
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
        <Link href="/login">
          <p className="hover:text-primary500">SIGN IN </p>
        </Link>
        <p className="px-2 cursor-default text-font50">|</p>{" "}
        <Link href="/login">
          <p className="hover:text-primary500">SIGN UP</p>
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
