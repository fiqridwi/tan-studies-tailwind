import Link from "next/link";
const Nav = () => {
  return (
    <nav className="h-[79px] uppercase border-t-[1px] flex justify-between items-center border-font50 border-opacity-10 w-full px-24 text-[16px] text-font500 font-bold leading-5 shadow-lg  ">
      <Link href="/">
        <a className="hover:text-primary500 cursor-pointer">Home</a>
      </Link>

      <a className="hover:text-primary500 cursor-pointer">tentang kami</a>
      <a className="hover:text-primary500 cursor-pointer">produk kami</a>
      <Link href="/store">
        <a className="hover:text-primary500 cursor-pointer">e-store</a>
      </Link>

      <a className="hover:text-primary500 cursor-pointer">
        jadwal bimbel offane
      </a>
      <a className="hover:text-primary500 cursor-pointer">blog</a>
      <a className="hover:text-primary500 cursor-pointer">faq</a>
      <a className="hover:text-primary500 cursor-pointer">contact us</a>
    </nav>
  );
};

export default Nav;
