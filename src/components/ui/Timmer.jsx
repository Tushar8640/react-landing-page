import React from "react";

const Timmer = () => {
  return (
    <div className="flex items-center gap-x-3 ml-5 text-[#554FA6] text-[14px] font-bold">
      <div className="flex justify-center items-center bg-[#D3D1F3] px-3 h-10 rounded ">
        <span>2d</span>
      </div>
      <span>:</span>
      <div className="flex justify-center items-center bg-[#D3D1F3] px-3 h-10 rounded ">
        <span>15h</span>
      </div>
      <span>:</span>
      <div className="flex justify-center items-center bg-[#D3D1F3] px-3 h-10 rounded ">
        <span>21m</span>
      </div>
      <span>:</span>
      <div className="flex justify-center items-center bg-[#D3D1F3] px-3 h-10 rounded ">
        <span>47s</span>
      </div>
    </div>
  );
};

export default Timmer;
