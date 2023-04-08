import React from "react";
import BoxTitle from "../ui/BoxTitle";
import TrendingProductCard from "../card/TrendingProductCard";
import Title from "../ui/Title";

const Trending = () => {
  const products = [
    {
      id: 1,
      title: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      category: "Smart TV",
      rating: 5.0,
      price: 3000.0,
      discountPrice: 2036.0,
      new: false,
      image: "/src/assets/trend1.png",
    },
    {
      id: 2,
      title: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      category: "Cosmetics",
      rating: 5.0,
      price: 40.0,
      discountPrice: 36.0,
      new: true,
      image: "/src/assets/trend2.png",
    },
    {
      id: 3,
      title: "Fabitech Sonata MH90 Multi-Platform RGB Gaming Headset",
      category: "Headphone",
      rating: 5.0,
      price: 150.0,
      discountPrice: 124.0,
      new: false,
      image: "/src/assets/trend3.png",
    },
    {
      id: 4,
      title: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      category: "Headphone",
      rating: 5.0,
      price: 3000.0,
      discountPrice: 2036.0,
      new: false,
      image: "/src/assets/trend4.png",
    },
    {
      id: 5,
      title: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      category: "Gaming",
      rating: 5.0,
      price: 36.0,
      discountPrice: 40.0,
      new: false,
      image: "/src/assets/trend5.png",
    },
    {
      id: 6,
      title: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      category: "Gaming",
      rating: 5.0,
      price: 36.0,
      discountPrice: 40.0,
      new: false,
      image: "/src/assets/trend6.png",
    },
    {
      id: 7,
      title: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      category: "Gaming",
      rating: 5.0,
      price: 36.0,
      discountPrice: 40.0,
      new: false,
      image: "/src/assets/trend7.png",
    },
    {
      id: 8,
      title: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      category: "Gaming",
      rating: 5.0,
      price: 36.0,
      discountPrice: 40.0,
      new: false,
      image: "/src/assets/trend8.png",
    },
    {
      id: 9,
      title: "Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television",
      category: "Gaming",
      rating: 5.0,
      price: 36.0,
      discountPrice: 40.0,
      new: false,
      image: "/src/assets/trend9.png",
    },
  ];
  return (
    <section className="bg-gray-50 py-20 container mx-auto p-3">
      <div>
        <BoxTitle bold={"Trending"} normal={"Product"} />
        <div className="md:grid hidden md:visible  md:grid-cols-3  justify-center">
          <div className="flex justify-between items-center">
            <Title bold={"Fashion"} normal={"For Woman"} />
            <div className="flex justify-center items-center mx-3 gap-x-3">
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
          <div className="flex justify-between items-center">
            <Title bold={"Food"} normal={"For Helth"} />
            <div className="flex justify-center items-center mx-3 gap-x-3">
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
          <div className="flex justify-between items-center">
            <Title bold={"Cosmetics"} normal={"For Winter"} />
            <div className="flex justify-center items-center mx-3 gap-x-3">
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
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-3 divide-x-2 divide-[#F2F2F2]  justify-center ">
          <div className="px-4">
            <div className="md:hidden">
              <Title bold={"Cosmetics"} normal={"For Winter"} />
            </div>
            {products?.slice(0, 3)?.map((product) => (
              <TrendingProductCard product={product} />
            ))}
            <button className="bg-black w-full  rounded text-white py-3 mt-5">
              View All
            </button>
          </div>
          <div className="px-4">
            <div className="md:hidden">
              <Title bold={"Fashion"} normal={"For Woman"} />
            </div>
            {products?.slice(3, 6)?.map((product) => (
              <TrendingProductCard product={product} />
            ))}
            <button className="bg-black w-full  rounded text-white py-3 mt-5">
              View All
            </button>
          </div>
          <div className="px-4">
            <div className="md:hidden">
              <Title bold={"Food"} normal={"For Helth"} />
            </div>
            {products?.slice(6, 9)?.map((product) => (
              <TrendingProductCard product={product} />
            ))}
            <button className="bg-black w-full  rounded text-white py-3 mt-5">
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
