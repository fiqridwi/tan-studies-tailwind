import React from "react";
import Link from "next/link";

const LoginModal = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded px-10 py-5">
        <div className="flex justify-between">
          <Link href="/login/siswa">
            <div className="hover:border-b-2 border-border cursor-pointer ">
              <p className="text-storeAu hover:text-primary500 font-bold">
                Login Sebagai Siswa
              </p>
            </div>
          </Link>
          <Link href="login/pengajar">
            <div className="hover:border-b-2 border-border cursor-pointer ">
              <p className="text-storeAu hover:text-primary500 font-bold">
                Login Sebagai Pengajar
              </p>
            </div>
          </Link>
        </div>
        <p className="text-center text-[29px] text-font500 font-bold py-5">
          Login Siswa TAN Studies
        </p>
        <div className="flex flex-col py-2 mb-5">
          <input
            type="text"
            className="border-border py-1 border-2 rounded mb-2"
          />
          <input type="text" className="border-border py-1 border-2 rounded" />
        </div>
        <div className="flex justify-center flex-col ">
          <button className="w-full py-2 text-white bg-primary500 rounded-sm">
            LOGIN
          </button>
          <p className="text-center text-testiContent py-2">
            Forgot your password?
          </p>
        </div>
        <div className="w-full h-[1px] bg-storeAu my-7"></div>
        <div className="flex flex-col justify-center">
          <p className="text-testiContent text-center py-2">
            Belum punya akun?
          </p>
          <button className="w-full bg-blue-400 text-white uppercase py-2 mb-2 rounded-sm">
            daftar siswa
          </button>
          <button className="w-full bg-blue-500 text-white uppercase py-2 rounded-sm">
            daftar pengajar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
