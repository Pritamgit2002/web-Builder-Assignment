import React from "react";
import RelatedCard from "../Cards/RelatedCard/RelatedCard";

const RelatedList = () => {
  return (
    <div className="flex flex-wrap gap-y-12 w-full md:w-[768px] xl:w-[1024px] py-6 ">
      <span className="  text-3xl text-left mx-3 sm:mx-0  ">
        Related deals you might like for
      </span>

      <div className=" w-full flex flex-wrap items-center justify-center sm:justify-between gap-y-10 ">
        {[...Array(3)].map((_, index) => (
          <RelatedCard key={index} />
        ))}
      </div>

      <div className=" w-full mx-3 flex flex-wrap items-center justify-between gap-y-6 py-10 ">
        <span className="text-[#5C6874] text-3xl xl:w-96 ">
          Sign up and get exclusive special deals
        </span>
        <div className="flex flex-wrap items-center justify-center">
          <input
            type="text"
            className=" w-60 xl:w-80 h-12 rounded-l-xl bg-white "
          />
          <button className=" text-sm text-white hover:text-gray-50 rounded-r-xl text-center bg-[#1B88F4] hover:bg-[#1B88F4]/90 p-4  ">
            sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedList;
