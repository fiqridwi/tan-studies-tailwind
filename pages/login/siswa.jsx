import React from "react";
import LoginHeader from "../../components/molecules/LoginHeader";
import Image from "next/image";
import upload from "../../public/icon/upload-image.png";
import Footer from "../../components/organisms/Footer";

const Siswa = () => {
  return (
    <div>
      <div className="shadow-md">
        <LoginHeader />
      </div>

      <div className="bg-white w-screen flex flex-col justify-center items-center">
        <p className="text-[29px] text-font500 text-center py-7">
          Registrasi Siswa
        </p>
        <div className="w-4/5 rounded shadow-2xl mb-10 flex justify-center flex-col items-center">
          <p className="font-bold text-font500 py-5">Informasi Pribadi Anda</p>
          <div className="text-center">
            <div>
              <Image src={upload} alt="upload" />
            </div>
            <p className="text-font500">
              Clik tombol di atas untuk upload foto anda
            </p>
          </div>
          <div className="w-full px-36">
            <div className="py-2">
              <p className="text-font500">Nama Lengkap</p>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="border-border border-2 w-full rounded-sm py-2 px-2"
              />
            </div>
            <div className="py-2">
              <p className="text-font500">Nama Panggilan</p>
              <input
                type="text"
                placeholder="Nama Panggilan"
                className="border-border border-2 w-full rounded-sm py-2 px-2"
              />
            </div>
            <div className="py-2">
              <p className="text-font500">Jenis Kelamin</p>
              <input
                type="text"
                placeholder="Jenis Kelamin"
                className="border-border border-2 w-full rounded-sm py-2 px-2"
              />
            </div>
            <div className="py-2">
              <p className="text-font500">Nomer Telepon</p>
              <input
                type="text"
                placeholder="Nomer Telepon"
                className="border-border border-2 w-full rounded-sm py-2 px-2"
              />
            </div>
            <div className="py-2">
              <p className="text-font500">Nomer Whatsapp</p>
              <input
                type="text"
                placeholder="Nomer Whatsapp"
                className="border-border border-2 w-full rounded-sm py-2 px-2"
              />
            </div>
            <div className="py-2">
              <p className="text-font500">Pilih Provinsi</p>
              <input
                type="text"
                placeholder="Pilih Provinsi"
                className="border-border border-2 w-full rounded-sm py-2 px-2"
              />
            </div>
            <div className="py-2">
              <p className="text-font500">Pilih Kota/Kabupaten</p>
              <input
                type="text"
                placeholder="Pilih Kota/Kabupaten"
                className="border-border border-2 w-full rounded-sm py-2 px-2"
              />
            </div>
            <div className="py-2">
              <p className="text-font500">Pilih Kecamatan</p>
              <input
                type="text"
                placeholder="Pilih Kecamatan"
                className="border-border border-2 w-full rounded-sm py-2 px-2"
              />
            </div>
            <div className="py-2">
              <p className="text-font500">Alamat Anda</p>
              <input
                type="text"
                placeholder="Alamat Anda"
                className="border-border border-2 w-full rounded-sm py-2 px-2"
              />
            </div>
            <div className="py-5">
              <input
                type="checkbox"
                name="sd"
                id="sd"
                className="mr-2 accent-primary500 checked:border-white checked:bg-primary500"
              />
              <label htmlFor="sd">
                By clicking create account you are agree to our terms and
                privacy policy.
              </label>
            </div>
            <div className="flex justify-end py-5">
              <button className="uppercase px-7 py-2 bg-primary500 text-white rounded-sm font-bold">
                save data
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Siswa;
