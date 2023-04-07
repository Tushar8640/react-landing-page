import React from "react";
import BoxTitle from "../ui/BoxTitle";
import TrendingProductCard from "../card/TrendingProductCard";
import Title from "../ui/Title";

const Trending = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div>
        <BoxTitle bold={"Trending"} normal={"Product"} />
        <div className="grid grid-cols-3  justify-center">
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
        <div className="grid grid-cols-3 divide-x-2 justify-center ">
          <div className="px-4">
            <TrendingProductCard />
            <TrendingProductCard />
            <TrendingProductCard />
            <button className="bg-black w-full  rounded text-white py-3 mt-5">View All</button>
          </div>
          <div className="px-4">
         
            <TrendingProductCard />
            <TrendingProductCard />
            <TrendingProductCard />
            <button className="bg-black w-full  rounded text-white py-3 mt-5">View All</button>
        
          </div>
          <div className="px-4">
           
            <TrendingProductCard />
            <TrendingProductCard />
            <TrendingProductCard />
            <button className="bg-black w-full  rounded text-white py-3 mt-5">View All</button>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
