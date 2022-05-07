import React from "react";
import CategoryInput from "../atoms/CategoryInput";

const StoreCategory = () => {
  return (
    <div className="w-1/4 mr-10 ">
      <div>
        <p className="text-[24px] text-testiName py-2">Jenjang</p>
        <div>
          <CategoryInput title="SD" number="125" />
          <CategoryInput title="SMP" number="125" />
          <CategoryInput title="SMA" number="125" />
          <CategoryInput title="SBMPTN" number="125" />
          <CategoryInput title="SIMAK UI S1" number="125" />
          <CategoryInput title="SIMAK UI S2" number="125" />
          <CategoryInput title="UMUM" number="125" />
        </div>
      </div>
      <div>
        <p className="text-[24px] text-testiName py-2">Kelas</p>
        <div>
          <CategoryInput title="10" number="125" />
          <CategoryInput title="11" number="125" />
          <CategoryInput title="12" number="125" />
          <CategoryInput title="UN SMA" number="125" />
        </div>
      </div>
      <div>
        <p className="text-[24px] text-testiName py-2">Program</p>
        <div>
          <CategoryInput title="IPA" number="125" />
          <CategoryInput title="IPS" number="125" />
          <CategoryInput title="SNMPTN" number="125" />
          <CategoryInput title="SBMPTN" number="125" />
          <CategoryInput title="TPA" number="125" />
        </div>
      </div>
      <div>
        <p className="text-[24px] text-testiName py-2">Mata Pelajaran</p>
        <div>
          <CategoryInput title="Matematika" number="125" />
          <CategoryInput title="Bahasa Indonesia" number="125" />
          <CategoryInput title="Bahasa Inggris" number="125" />
          <CategoryInput title="Fisika" number="125" />
          <CategoryInput title="Biologi" number="125" />
          <CategoryInput title="Kimia" number="125" />
        </div>
      </div>
    </div>
  );
};

export default StoreCategory;
