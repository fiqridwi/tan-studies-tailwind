import React from "react";
import Image from "next/image";
import simak from "../../public/jelajah/simak.png";
import tpa from "../../public/jelajah/tpa.png";
import ekolaha from "../../public/jelajah/ekolaha.png";
import jelajah from "../../public/jelajah/undraw_book_lover_mkck.png";
const Jelajah = () => {
  return (
    <section className="flex px-24 pt-24 justify-between items-center">
      <div>
        <Image src={jelajah} alt="jelajah" />
      </div>
      <div>
        <p className="font-bold text-[44px] text-center text-font500 pb-9">
          Instagram Jelajah<span className="text-primary500">Studies</span>
        </p>
        <div>
          <Image src={simak} alt="book" />
          <Image src={tpa} alt="book" />
          <Image src={ekolaha} alt="book" />
        </div>
      </div>
    </section>
  );
};

export default Jelajah;
