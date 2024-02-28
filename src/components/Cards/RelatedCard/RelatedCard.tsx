import Image from "next/image";
import React from "react";

const RelatedCard = () => {
  return (
    <div>
      <div className="p-3 flex flex-col gap-y-2 rounded-lg bg-white w-80  ">
        <Image
          src="/image.png"
          alt="image"
          width={2000}
          height={2000}
          className="  mx-auto object-contain aspect-video "
        />
        <div className="flex items-center justify-start  text-sm text-[#074786] gap-3 ">
          <div className="bg-gray-100 hover:bg-gray-100/65 px-2 py-1 rounded-md cursor-pointer ">
            20% Off
          </div>
          <div className="bg-gray-100 hover:bg-gray-100/65 px-2 py-1 rounded-md cursor-pointer ">
            Limited Offer
          </div>
        </div>
        <div className=" font-bold text-center text-base ">Webbuilder1</div>
        <span className=" text-base ">
          Computer Modern clasic with wix support
        </span>
        <div className="flex items-end justify- text-left gap-4 w-full ">
          <span className=" text-xl text-[#5C6874] ">$39.98</span>
          <span className=" text-sm text-[#9FA9B3] ">$49.96</span>
          <span className="text-sm text-[#EF4C5D] ">(20% Off)</span>
        </div>
        <div className=" w-72 py-3 bg-[#1B88F4] hover:bg-[#1B88F4]/80 rounded-lg text-center text-white cursor-pointer mx-auto ">
          View Deal
        </div>
      </div>
    </div>
  );
};

export default RelatedCard;
