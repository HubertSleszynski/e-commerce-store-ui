import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import bannerImg from "/assets/banner.png";

const Banner = () => {
  return (
    <div className="xl:px-28 px-4 mx-auto container pt-28">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center ">
        <div className="md:w-1/2">
          <img
            src={bannerImg}
            alt=""
            className="mx-auto h-full md:h-[562px] md:w-[442px] w-full"
          />
        </div>

        <div className="md:w-1/2 w-full ">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            Dive into our carefully curated collections, each designed to
            capture a unique style and mood. From timeless classics to
            trendsetting pieces, explore our diverse range of fashion stories.
          </p>
          <button className="bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold flex gap-2 items-center rounded-sm">
            <FaShoppingBag className="inline-flex" /> Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
