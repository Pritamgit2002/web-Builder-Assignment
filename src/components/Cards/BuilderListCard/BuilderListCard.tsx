"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsTrophy } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoStar } from "react-icons/io5";
const BuilderListCard = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className=" w-[1024px] h-max bg-white rounded-xl  ">
      <div className="relative">
        <div className="absolute flex flex-col items-start justify-start gap-y-4 ">
          <div className="w-max rounded-r-lg flex items-center justify-center gap-2 text-white bg-[#FF7724] px-2 py-1 ">
            <BsTrophy />
            <span className=" text-base ">Best Choice</span>
          </div>
          <span className="h-2 w-2 p-4 text-xl border flex items-center justify-center border-gray-300 rounded-full text-[#626E79] -translate-x-1/2  ">
            1
          </span>
        </div>
        <div className="w-[1024px] min-h-80 h-max flex items-center justify-between ">
          <div className="flex flex-col items-center justify-center  h-full w-full  ">
            <Image
              src="/image.png"
              alt="image"
              width={2000}
              height={2000}
              className=" aspect-square object-contain "
            />
            <span>CDK</span>
          </div>
          <div className="flex items-center justify-start flex-wrap px-4  max-w-max  ">
            <p>
              <span className=" font-bold  ">
                WixPro 72-Inch Responsive Website Builder -
              </span>
              <span>
                {" "}
                Comprehensive Digital Platform Creation Tool, Streamlined Design
                Interface for Professional Websites and Online Stores
                (Black/Blue)
              </span>
            </p>

            <span className="font-bold py-2 ">Main Highlights</span>
            <span className="pl-3">
              [What You Get]: Gain access to the SiteCraft design studio,
              featuring a robust selection of design elements, SEO optimization
              tools, and e-commerce integrations.
            </span>

            {showMore && (
              <div>
                <span className="pl-3 py-1">
                  [What You Get]: Gain access to the SiteCraft design studio,
                  featuring a robust selection of design elements, SEO
                  optimization tools, and e-commerce integrations.
                </span>
              </div>
            )}
            <button
              onClick={() => setShowMore(!showMore)}
              className="pl-2 mt-4 text-[#1B88F4] text-base flex items-center justify-center gap-1 p-1 hover:bg-blue-100/60 rounded-md "
            >
              {showMore ? "Show less" : "Show more"}
              {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          <div className="flex flex-col items-center gap-y-20 h-full w-full ">
            <div className="flex flex-col items-center justify-center gap-y-4 w-32 h-32 bg-[#F3F9FF] text-[#074786] rounded-b-lg ">
              <div>
                <span className=" text-3xl ">9.8</span>
              </div>

              <span className="text-sm">Exceptional</span>
              <span className="flex items-center justify-center text-sm text-yellow-400 gap-1 ">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
            </div>
            <div className=" w-56 py-3 bg-[#1B88F4] hover:bg-[#1B88F4]/80 rounded-lg text-center text-white cursor-pointer ">
              View
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderListCard;
