import Image from "next/image";
import newsletter from "../../public/newsletter.png";
const Newsletter = () => {
  return (
    <section className="flex justify-between items-center px-24 py-24">
      <div>
        <Image src={newsletter} alt="newsletter" />
      </div>
      <div className="w-1/2 ">
        <div className="mb-5">
          <p className="font-bold text-[44px] text-font500 leading-[60px] w-2/3">
            Subscribe Our Newsletter
          </p>
          <p className="text-[18px] text-font500">
            For new awesome courses & special promotion campaign!
          </p>
        </div>
        <form className="flex flex-col">
          <input
            type="email"
            className="text-[14px] text-testiContent border-border border-[1px] outline-none p-2 mb-3"
            placeholder="Your email"
          />
          <button className="bg-testiName text-white cursor-pointer py-2">
            ENROLL NOW
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
