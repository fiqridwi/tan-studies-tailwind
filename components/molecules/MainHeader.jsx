import Image from "next/image";
import logo from "../../public/Frame 732.png";
import searchIcon from "../../public/search.png";
const MainHeader = () => {
  return (
    <header className="flex justify-between items-center h-[100px] w-screen px-24 ">
      <div>
        <Image src={logo} alt="tan-logo" />
      </div>

      <div>
        <input
          className="relative border-[1px] h-[36px] w-[527px] rounded-[3px] pl-3"
          type="text"
          placeholder="Search"
        />
        <div className="fixed top-10 right-[460px]">
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
