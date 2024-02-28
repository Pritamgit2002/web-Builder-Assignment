"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsTrophy } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import BuilderListCard from "../Cards/BuilderListCard/BuilderListCard";

const BuilderList = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-y-10">
      <BuilderListCard />

      <BuilderListCard />
    </div>
  );
};

export default BuilderList;
