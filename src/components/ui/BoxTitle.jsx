import React from "react";

const BoxTitle = ({ bold, normal }) => {
  return (
    <h1 className="text-[24px] w-[300px] md:text-[34px] outline md:m-2 inline-block py-1 px-2">
      <span className="font-black">{bold} </span>
      {normal}
    </h1>
  );
};

export default BoxTitle;
