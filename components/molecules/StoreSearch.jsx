import React from "react";
import Image from "next/image";
import paperIcon from "../../public/icon/paper.png";
import menuIcon from "../../public/icon/keypad.png";
import searchIcon from "../../public/search.png";

const StoreSearch = () => {
  return (
    <div className="w-full">
      <div>
        <p className="uppercase font-bold text-[14px] text-testiName mb-5">
          cari produk
        </p>

        <div className="flex justify-between items-center w-full border-[1px] h-[36px] rounded-[3px] pl-3 mb-3">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none text-font500"
          />
          <div className="pr-5 flex items-center cursor-pointer">
            <Image src={searchIcon} alt="search" />
          </div>
        </div>

        <div className="flex justify-end w-full bg-storeRecBg py-2">
          <p className="text-testiContent text-[14px]">Sort by:</p>
          <form className="flex items-center">
            <input
              list="sort"
              name="sort"
              className="w-36 border-[1px] border-testiContent rounded flex items-center"
            />
            <datalist id="sort">
              <option value="None" selected>
                None
              </option>
              <option value="Date Newest" />
              <option value="Date Oldest" />
              <option value="Price Highest" />
              <option value="Price Lowest" />
            </datalist>
          </form>
          <div className="flex px-2">
            <div className="mr-2">
              <Image src={paperIcon} alt="paper" />
            </div>
            <div>
              <Image src={menuIcon} alt="menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSearch;
