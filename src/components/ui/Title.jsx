import React from "react";

const Title = ({ bold, normal }) => {
  return (
    <h1 className="text-[24px] m-2 inline-block py-1 px-2">
      <span className="font-black">{bold} </span>
      {normal}
    </h1>
  );
};

export default Title;
