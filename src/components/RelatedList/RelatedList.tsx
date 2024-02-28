import React from "react";
import RelatedCard from "../Cards/RelatedCard/RelatedCard";

const RelatedList = () => {
  return (
    <div className="w-[1024px]  ">
      <span className=" text-3xl text-left ">
        Related deals you might like for
      </span>

      <div className=" w-full flex items-center justify-between ">
        {[...Array(3)].map((_, index) => (
          <RelatedCard key={index} />
        ))}
      </div>

      <div className=" w-full mx-3 flex items-center justify-between py-10 ">
        <span className="text-[#5C6874] text-3xl w-96 ">
          Sign up and get exclusive special deals
        </span>
        <div>
          <input type="text" className=" w-80 h-12 rounded-l-xl bg-white " />
          <button className=" text-sm text-white rounded-r-xl text-center bg-[#1B88F4] p-4  ">
            sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedList;
