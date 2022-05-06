const Nav = () => {
  return (
    <nav className="h-[79px] uppercase border-t-[1px] flex justify-between items-center border-font50 border-opacity-10 w-full px-24 text-[16px] text-font500 font-bold leading-5 shadow-lg  ">
      <a className="hover:text-primary500">Home</a>
      <a className="hover:text-primary500">tentang kami</a>
      <a className="hover:text-primary500">produk kami</a>
      <a className="hover:text-primary500">e-store</a>
      <a className="hover:text-primary500">jadwal bimbel offane</a>
      <a className="hover:text-primary500">blog</a>
      <a className="hover:text-primary500">faq</a>
      <a className="hover:text-primary500">contact us</a>
    </nav>
  );
};

export default Nav;
