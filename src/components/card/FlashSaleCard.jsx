import React, { useState } from "react";

const FlashSaleCard = ({ product }) => {
  const [over, setOver] = useState(false);
  const {
    title,
    category,
    rating,
    image,
    price,
    discountPrice,
    new: sale,
  } = product || {};

  return (
    <>
      <div
        className={`max-w-[280] h-[450px] ${
          !over && "ring-[1px]"
        } ring-[#F2F2F2] bg-white text-gray-900  relative`}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        <div className={`p-[10px] ${over && "ring-[1px]"} ring-[#F2F2F2]`}>
          <span
            className={` ${
              sale
                ? "text-[#17201D] bg-[#E8E9E8]"
                : "text-[#DB2F06] bg-[#FAE8E4]"
            }  flex justify-center items-center h-6 px-2 rounded text-[12px]  absolute top-3 left-3 z-10`}
          >
            {sale ? "New" : "Sale"}
          </span>

          {/* slider button on hover  */}
          {over && (
            <button className="bg-black rounded-full text-white p-2 absolute top-[85px] left-2 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 26 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </button>
          )}
          {over && (
            <button className="bg-black rounded-full text-white p-2 absolute top-[85px] right-2 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          )}
          {/* slider dot button  */}
          {over && (
            <div className="absolute top-40 z-10 flex justify-center items-center gap-x-1 right-[110px]">
              <div className="w-[6px] h-[6px] bg-black rounded-full"></div>

              <div className="w-[6px] h-[6px] bg-gray-300 rounded-full"></div>

              <div className="w-[6px] h-[6px] bg-gray-300 rounded-full"></div>
            </div>
          )}
          <img
            src={image}
            alt=""
            className={`object-contain object-center w-full rounded-md h-[131px] bg-white my-2 ${
              over && "transform -scale-x-100"
            }`}
          />
          <div className="mt-6 mb-1 flex flex-col justify-between ">
            <span className="block text-[12px]  text-[#8B928F] mb-2">
              {category}
            </span>
            <h2 className="text-[16px] text-[#17201D] font-normal  tracking-wide">
              {title}
            </h2>
          </div>
        </div>
        <div className={`${!over ? "visible" : "hidden"}  p-2 h-[80px`}>
          <div className="flex gap-x-2">
            <div className="flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F6C441"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F6C441]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F6C441"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F6C441]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F6C441"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F6C441]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F6C441"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F6C441]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F6C441"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F6C441]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
            </div>
            <span className="text-[#8B928F]">({rating}.00)</span>
          </div>
          <div className="mt-4">
            <span className="font-extrabold text-[#5B9982]">
              $ {discountPrice}
            </span>{" "}
            <span className="line-through text-[#A3A9A7] text-[12px]">
              $ {price}
            </span>
          </div>
        </div>

        {/* button show on hover  */}
        <div
          className={`${
            over ? "visible" : "hidden"
          } flex justify-around  p-2 h-[80px] items-center`}
        >
          <div className="border-r-2  pr-3 flex justify-center items-center">
            <button className=" hover:bg-black rounded-full h-10 w-10 flex justify-center items-center group transition-all duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:text-white transition-all duration-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
          <div className=" flex justify-center items-center ">
            <button className="  hover:bg-black rounded-full h-10 w-10 flex justify-center items-center group transition-all duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:text-white transition-all duration-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>
          <div className=" border-l-2 pl-2">
            <button className=" hover:bg-black rounded-full h-10 w-10 flex justify-center items-center group transition-all duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:text-white transition-all duration-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`p-[10px] ${over && "ring-[1px] h-[85px]"} ring-[#F2F2F2]`}
        >
          <button className="w-full bg-[#96AEA1]/10 mt-2 py-3 text-[#5B9982] font-medium text-[15px] flex justify-center items-center gap-x-2 rounded hover:bg-[#5B9982] hover:text-white">
            Add To Cart{" "}
            <span>
              <svg
              className="hover:text-white"
                width="20px"
                height="20px"
                viewBox="-4.56 -4.56 33.12 33.12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    opacity="1"
                    d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    opacity="1"
                    d="M15.4945 12H15.5035"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    opacity="1"
                    d="M8.49451 12H8.50349"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FlashSaleCard;
