import React from "react";

const BoxTitle = ({ bold, normal }) => {
  return (
    <h1 className="text-[34px] outline m-2 inline-block py-1 px-2">
      <span className="font-black">{bold} </span>
      {normal}
    </h1>
  );
};

export default BoxTitle;
