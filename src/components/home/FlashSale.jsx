import React from "react";
import BoxTitle from "../ui/BoxTitle";
import Timmer from "../ui/Timmer";
import FlashSaleCard from "../card/FlashSaleCard";
import bigsale from "../../assets/bigsale.png";

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
      image: "/src/assets/bluesofa.png",
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
      image: "/src/assets/protin.png",
    },
    {
      id: 3,
      title: "Fabitech Sonata MH90 Multi-Platform RGB Gaming Headset",
      category: "Headphone",
      rating: 5.0,
      price: 150.0,
      discountPrice: 124.0,
      new: false,
      image: "/src/assets/earbud.png",
    },
    {
      id: 4,
      title: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      category: "Headphone",
      rating: 5.0,
      price: 3000.0,
      discountPrice: 2036.0,
      new: false,
      image: "/src/assets/foxsofa.png",
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
      image: "/src/assets/router.png",
    },
  ];
  return (
    <>
      <section className="container  mx-auto my-16">
        <div className="grid grid-cols-12 justify-center gap-x-4">
          <div className="col-span-10">
            <div>
              <div className="flex items-center">
                <BoxTitle bold={"Flash"} normal={"Sale Product"} />
                <Timmer />
              </div>
              <div className="grid grid-cols-5 gap-[20px]">
                {products?.map((product) => (
                  <FlashSaleCard key={product?.id} product={product} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2  mt-14 ">
            <img src={bigsale} className="w-full h-full" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FlashSale;
