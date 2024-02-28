"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsTrophy } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import BuilderListCard from "../Cards/BuilderListCard/BuilderListCard";
const content = [
  {
    promo: "Best Choice",
    image: "/image.png",
    image_name: "Builder 1",
    heading: "WixPro 72-Inch Responsive Website Builder - ",
    desc: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlight1:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    highlight2:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    rating: "9.8",
    pack: "Exceptional",
    starFull: 5,
    starHalf: 0,
    starEmpty: 0,
  },
  {
    promo: "Best Value",
    image: "/image.png",
    image_name: "Builder ",
    heading: "SiteCraft 68-Inch Ultimate Web Design Studio - ",
    desc: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    highlight1:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    highlight2:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    rating: "9.5",
    pack: "Excellent",
    starFull: 4,
    starHalf: 1,
    starEmpty: 0,
  },
  {
    image: "/image.png",
    image_name: "Builder 1",
    heading: "WixPro 72-Inch Responsive Website Builder - ",
    desc: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlight1:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    highlight2:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    rating: "9.3",
    pack: "Exceptional",
    starFull: 5,
    starHalf: 0,
    starEmpty: 0,
  },
  {
    image: "/image.png",
    image_name: "CDK",
    heading: "CDK Responsive Builder : ",
    desc: " An extensive library of widgets and apps, and detailed step-by-step guides",
    rating: "9.1",
    pack: "Very Good",
    starFull: 4,
    starHalf: 0,
    starEmpty: 1,
  },
];

const BuilderList = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10">
      {content.map((item, i) => (
        <div key={i}>
          <BuilderListCard
            id={i + 1}
            promo={item.promo}
            image={item.image}
            image_name={item.image_name}
            heading={item.heading}
            desc={item.desc}
            highlight1={item.highlight1}
            highlight2={item.highlight2}
            rating={item.rating}
            pack={item.pack}
            starFull={item.starFull}
            starHalf={item.starHalf}
            starEmpty={item.starEmpty}
          />
        </div>
      ))}
    </div>
  );
};

export default BuilderList;
