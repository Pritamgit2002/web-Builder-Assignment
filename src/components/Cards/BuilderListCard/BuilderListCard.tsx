"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsTrophy } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosStarHalf,
  IoIosStarOutline,
} from "react-icons/io";
import { IoCheckmarkCircle, IoCheckmarkOutline, IoStar } from "react-icons/io5";

// const content = [
//   {
//     heading: "WixPro 72-Inch Responsive Website Builder - ",
//     desc: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
//     highlight1:
//       "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
//     highlight2:
//       "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
//     rating: "9.8",
//     pack: "Exceptional",
//     star: "",
//   },
//   {
//     heading: "SiteCraft 68-Inch Ultimate Web Design Studio - ",
//     desc: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
//     highlight1:
//       "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
//     highlight2:
//       "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
//     rating: "9.5",
//     pack: "Excellent",
//     star: "",
//   },
//   {
//     heading: "WixPro 72-Inch Responsive Website Builder - ",
//     desc: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
//     highlight1:
//       "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
//     highlight2:
//       "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
//     rating: "9.3",
//     pack: "Exceptional",
//     star: "",
//   },
// ];

const BuilderListCard = ({
  id,
  promo,
  image,
  image_name,
  heading,
  desc,
  highlight1,
  highlight2,
  rating,
  pack,
  starFull,
  starHalf,
  starEmpty,
}: any) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className=" flex flex-col w-full md:w-[768px] xl:w-[1024px] bg-white h-max rounded-xl  ">
      <div className="relative">
        <div className="absolute flex flex-col items-start justify-start gap-y-4 ">
          {promo && (
            <>
              <div className="w-max rounded-r-lg flex items-center justify-center gap-2 text-white bg-[#FF7724] px-2 py-1 ">
                <BsTrophy />
                <span className=" text-base ">{promo}</span>
              </div>
            </>
          )}
          <span className="h-2 w-2 p-4 text-xl border flex items-center justify-center border-gray-300 rounded-full text-[#626E79] xl:-translate-x-1/2  ">
            {id}
          </span>
        </div>
        <div className="w-full md:w-[768px] xl:w-[1024px] min-h-80 h-max flex flex-col sm:flex-row items-center justify-between ">
          <div className="flex flex-col items-center justify-center  h-full w-full ">
            <Image
              src={image}
              alt="image"
              width={2000}
              height={2000}
              className=" aspect-square object-contain "
            />
            <span>{image_name}</span>
          </div>
          <div className="flex items-start justify-start flex-wrap px-4  max-w-max  ">
            <p>
              <span className=" font-bold ">{heading}</span>
              <span> {desc}</span>
            </p>

            {id == 4 && (
              <span className=" text-sm text-[#074786] p-1 bg-gray-100/95 my-1 rounded-md ">
                26% Off
              </span>
            )}
            <div className="">
              <span className="font-bold py-2 ">Main Highlights</span>
              {highlight1 && (
                <div className="space-y-4 ">
                  <span className="pl-3">{highlight1}</span>

                  {showMore && (
                    <div>
                      <span className="pl-3 py-1">{highlight2}</span>
                    </div>
                  )}
                </div>
              )}
              {id == 4 && (
                <div className="">
                  <div className=" bg-[#FFF4ED] p-2 rounded-lg ml-4 mt-2 pl-3 flex flex-col justify-start items-start gap-y-1 w-80  xl:w-[500px]  ">
                    <div className="flex items-center justify-start gap-2 ">
                      <span className="bg-white text-sm  text-[#1B88F4] rounded-lg py-[1.2px] px-1 text-center ">
                        9.9
                      </span>
                      <span className=" text-base text-[#4B5665] ">
                        Building Responsive
                      </span>
                    </div>
                    <div className="flex items-center justify-start gap-2 ">
                      <span className="bg-white  text-sm text-[#1B88F4] rounded-lg  py-[1.2px] px-1 text-center ">
                        8.9
                      </span>
                      <span className=" text-base text-[#4B5665] ">Cool</span>
                    </div>
                    <div className="flex items-center justify-start gap-2 ">
                      <span className="bg-white  text-sm text-[#1B88F4] rounded-lg  py-[1.2px] px-1 text-center ">
                        8.9
                      </span>
                      <span className=" text-base text-[#4B5665] ">Docs</span>
                    </div>
                  </div>
                  <span className=" font-bold ">Why we love it</span>
                  {showMore && (
                    <div className=" flex flex-col mx-auto items-center sm:items-start justify-center gap-y-1  ">
                      <div className="sm:pl-3">
                        <div className="flex items-center justify-start gap-2 ">
                          <IoCheckmarkOutline className="p-1 text-[#0855A1] text-lg bg-[#0855A1]/20 rounded-full " />

                          <span className=" text-sm ">Documentation</span>
                        </div>
                        <div className="flex items-center justify-start gap-2 ">
                          <IoCheckmarkOutline className="p-1 text-[#0855A1] text-lg bg-[#0855A1]/20 rounded-full " />

                          <span className=" text-sm ">Easy Use</span>
                        </div>
                        <div className="flex items-center justify-start gap-2 ">
                          <IoCheckmarkOutline className="p-1 text-[#0855A1] text-lg bg-[#0855A1]/20 rounded-full " />

                          <span className=" text-sm ">Out of box</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <button
              onClick={() => setShowMore(!showMore)}
              className="pl-2 my-4 sm:my-0 mt-4 text-[#1B88F4] text-base flex items-center justify-center gap-1 p-1 hover:bg-blue-100/60 rounded-md "
            >
              {showMore ? "Show less" : "Show more"}
              {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          <div className="flex flex-row sm:flex-col items-end sm:items-center justify-between sm:justify-center  sm:gap-y-36 h-full w-full  ">
            <div className="flex flex-col items-center justify-center gap-y-4 w-32 h-32 bg-[#F3F9FF] text-[#074786] rounded-lg sm:rounded-b-lg ">
              <div>
                <span className=" text-3xl ">{rating}</span>
              </div>

              <span className="text-sm">{pack}</span>
              <span className="flex items-center justify-center text-sm text-yellow-400 gap-1 ">
                {Array.from({ length: starFull }, (_, index) => (
                  <IoStar key={index} />
                ))}
                {Array.from({ length: starHalf }, (_, index) => (
                  <IoIosStarHalf key={index} />
                ))}
                {Array.from({ length: starEmpty }, (_, index) => (
                  <IoIosStarOutline key={index} />
                ))}
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
