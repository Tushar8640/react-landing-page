import React from "react";
import BoxTitle from "../ui/BoxTitle";
import Timmer from "../ui/Timmer";
import FlashSaleCard from "../card/FlashSaleCard";
import bigsale from "/images/bigsale.png";

const FlashSale = () => {
  const products = [
    {
      id: 1,
      title: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      category: "Smart TV",
      rating: 5.0,
      price: 3000.0,
      discountPrice: 2036.0,
      new: false,
      images: [
        "/images/bluesofa.png",
        "/images/protin.png",
        "/images/earbud.png",
      ],
    },
    {
      id: 2,
      title:
        "Lomitech F310 - Wifi & USB RGB Dual Gamepad - for smooth experience",
      category: "Cosmetics",
      rating: 5.0,
      price: 40.0,
      discountPrice: 36.0,
      new: true,
      images: [
        "/images/protin.png",
        "/images/bluesofa.png",
        "/images/earbud.png",
      ],
    },
    {
      id: 3,
      title: "Fabitech Sonata MH90 Multi-Platform RGB Gaming Headset",
      category: "Headphone",
      rating: 5.0,
      price: 150.0,
      discountPrice: 124.0,
      new: false,
      images: [
        "/images/earbud.png",
        "/images/protin.png",
        "/images/bluesofa.png",
      ],
    },
    {
      id: 4,
      title: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      category: "Headphone",
      rating: 5.0,
      price: 3000.0,
      discountPrice: 2036.0,
      new: false,
      images: [
        "/images/foxsofa.png",
        "/images/protin.png",
        "/images/bluesofa.png",
      ],
    },
    {
      id: 5,
      title:
        "Lomitech F310 - Wifi & USB RGB Dual Gamepad - for smooth experience",
      category: "Gaming",
      rating: 5.0,
      price: 36.0,
      discountPrice: 40.0,
      new: false,
      images: [
        "/images/router.png",
        "/images/protin.png",
        "/images/bluesofa.png",
      ],
    },
  ];
  return (
    <>
      <section className="container  mx-auto md:my-16 my-8" >
        <div className="grid grid-cols-12 justify-center gap-x-4 p-3">
          <div className="col-span-12 md:col-span-10 lg:col-span-10">
            <div>
              <div
                className="flex flex-col
               md:flex-row md:items-center justify-between"
              >
                <div className="flex flex-col md:flex-row  md:items-center">
                  <BoxTitle bold={"Flash"} normal={"Sale Product"} />
                  <Timmer />
                </div>
                <div className="md:flex gap-x-2 hidden md:visible">
                  {" "}
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 26 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                      />
                    </svg>
                  </button>
                  <button className="bg-black rounded-full text-white p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-[20px] my-4">
                {products?.map((product) => (
                  <FlashSaleCard key={product?.id} product={product} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-2   relative p-4">
            <button className="absolute top-[350px] md:top-72 left-[150px] md:left-[80px] text-yellow-400 flex items-center justify-center gap-x-2">
              Shop Now{" "}
              <span>
                {" "}
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
              </span>
            </button>
            <img src={bigsale} className="md:w-full h-full " alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FlashSale;
