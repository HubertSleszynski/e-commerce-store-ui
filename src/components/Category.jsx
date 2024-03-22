import React from "react";
import { Link } from "react-router-dom";

const companyLogo = [
  { id: 1, img: "/assets/category-brand1.png" },
  { id: 2, img: "/assets/category-brand2.png" },
  { id: 3, img: "/assets/category-brand3.png" },
  { id: 4, img: "/assets/category-brand4.png" },
  { id: 5, img: "/assets/category-brand5.png" },
];

const Category = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 py-16">
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      <div className=" max-sm:hidden flex flex-col md:flex-row items-center gap-4 mt-8">
        <div className="md:w-1/3 flex flex-col gap-2">
          <div className="max-md:w-3/4 max-md:mx-auto grid grid-cols-2 gap-2 ">
            <Link to="/">
              <img
                src="/assets/category-image2.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/assets/category-image3.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/assets/category-image4.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/assets/category-image5.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>

          <Link to="/">
            <img
              src="/assets/category-image7.png"
              alt=""
              className="w-full hover:scale-105 transition-all duration-200 max-md:w-3/4 max-md:mx-auto"
            />
          </Link>
        </div>
        <div className="md:w-1/3 flex flex-col gap-2">
          <Link to="/">
            <img
              src="/assets/category-image1.png"
              alt=""
              className="w-full hover:scale-105 transition-all duration-200 max-md:w-3/4 max-md:mx-auto"
            />
          </Link>
          <div className="max-md:w-3/4 max-md:mx-auto grid grid-cols-2 gap-2">
            <Link to="/">
              <img
                src="/assets/category-image8.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/assets/category-image9.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/assets/category-image10.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/assets/category-image11.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 flex max-md:hidden flex-col gap-4">
          <Link to="/">
            <img
              src="/assets/category-image6.png"
              alt=""
              className="w-full hover:scale-105 transition-all duration-200 "
            />
          </Link>
          <Link to="/">
            <img
              src="/assets/category-image12.png"
              alt=""
              className="w-full hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
