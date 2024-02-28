"use client";
import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { GoCheckCircle } from "react-icons/go";
import { TfiInfoAlt } from "react-icons/tfi";
import { Check, ChevronsDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaChevronDown } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";

const filter_one = [
  {
    value: "relevant",
    label: "Top Relevant",
  },
  {
    value: "searched",
    label: "Top Searched",
  },
  {
    value: "liked",
    label: "Top Liked",
  },
];

const filter_two = [
  { value: "Tools" },
  { value: "AWS Builder" },
  { value: "Start Build" },
  { value: "Build Supplies" },
  { value: "Tooling" },
  { value: "BlueHosting" },
];

const filter_three = [
  { value: "Home" },
  { value: "Housing for all" },
  { value: "Hosting" },
  { value: "Hosting6" },
  { value: "Hosting5" },
];
const Hero = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col w-[1024px] py-6 ">
      <span className=" text-5xl text-[#2C384A] text-left ">
        Best Website builders in the US
      </span>
      <div className=" bg-[#E1E4E6] w-full h-[1.4px] my-3 "></div>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center justify-center gap-3 text-[#4B5665] ">
            <GoCheckCircle />
            <span className=" text-sm ">Last Updated</span>
            <div className="w-2  h-[1.5px] bg-[#4B5665] "></div>
            <span className=" text-sm ">February 22, 2020</span>
            <TfiInfoAlt />
            <span className=" text-sm ">Advertising Disclosure</span>
          </div>
          <div></div>
        </div>
        <div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[160px] justify-between border-none "
              >
                {value
                  ? filter_one.find((framework) => framework.value === value)
                      ?.label
                  : "Top Relevant"}
                <FaChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[160px] p-0 ">
              <Command>
                <CommandGroup>
                  {filter_one.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className=" bg-[#E1E4E6] w-full h-[1.5px] my-3 "></div>
      <div className="w-full flex items-center justify-start gap-12">
        {filter_two.map((item, i) => (
          <div
            key={i}
            className="hover:bg-gray-200/80 px-4 py-1 flex items-center justify-center  rounded-md cursor-pointer "
          >
            {item.value}
          </div>
        ))}
      </div>
      <div className="w-full flex  ">
        {filter_three.map((item, i) => (
          <div className="flex items-center justify-center gap-3 text-[#727D87]  py-3 hover:underline cursor-pointer ">
            {i < 4 ? (
              <div className="flex items-center justify-center gap-3  ">
                <div className="text-sm hover:text-gray-900 ">{item.value}</div>
                <HiChevronRight />
              </div>
            ) : (
              <>
                <div className="text-sm ">{item.value}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
