import React from "react";

const CategoryInput = ({ title, number }) => {
  return (
    <div className="text-testiContent text-[14px] flex w-full justify-between">
      <div>
        <input
          type="checkbox"
          name="sd"
          id="sd"
          className="mr-2 accent-primary500 checked:border-white checked:bg-primary500"
        />
        <label htmlFor="sd">{title}</label>
      </div>
      <p>{number}</p>
    </div>
  );
};

export default CategoryInput;
