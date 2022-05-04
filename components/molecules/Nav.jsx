const Nav = () => {
  return (
    <nav className="h-[79px] border-t-[1px] flex items-center border-font50 border-opacity-10">
      <ol className="uppercase cursor-pointer flex text-[16px] text-font500 font-bold leading-5 justify-between w-screen px-24">
        <li className="hover:text-primary500">Home</li>
        <li className="hover:text-primary500">tentang kami</li>
        <li className="hover:text-primary500">produk kami</li>
        <li className="hover:text-primary500">e-store</li>
        <li className="hover:text-primary500">jadwal bimbel offline</li>
        <li className="hover:text-primary500">blog</li>
        <li className="hover:text-primary500">faq</li>
        <li className="hover:text-primary500">contact us</li>
      </ol>
    </nav>
  );
};

export default Nav;
