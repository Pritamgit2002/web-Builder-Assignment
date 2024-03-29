"use client";
import Link from "next/link";
import React, { useState } from "react";
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
import { Check } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";
const category = [
  { title: "Web Builder", link: "webBuilder" },
  { title: "Hosting", link: "hosting" },
  { title: "Data Center", link: "dataCenter" },
  { title: "Robotic-Automation", link: "roboticAutomotion" },
];

const contact = [
  { title: "Contact", link: "contact" },
  { title: "Privacy Policy", link: "privacyPolicy" },
  { title: "Terms Of Services", link: "termsServices" },
  { title: "Categories", link: "categories" },
  { title: "About", link: "about" },
];

const filter_one = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "hindi", label: "Hindi" },
  { value: "bengali", label: "Bengali" },
  { value: "french", label: "French" },
];

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="w-full h-max xl:h-[452px] flex items-start xl:items-center justify-center gap-x-12 sm:gap-x-32 bg-[#212731] mx-auto pt-10 xl:pt-0 ">
      <div className="w-max py-6 flex flex-col-reverse xl:flex-row items-start justify-center gap-y-16 gap-x-40 -translate-y-8 ">
        <div className="h-full flex flex-col items-start justify-center text-left gap-y-6 w-max ">
          <span className="text-white text-lg ">Categories</span>
          <div className=" flex flex-col gap-y-5 ">
            {category.map((item, i) => (
              <Link
                href={item.link}
                className="text-sm text-[#B6BDC4] hover:text-white hover:underline "
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="h-full flex flex-col items-start justify-center text-left gap-y-6 w-max  ">
          <span className="text-white text-lg ">Contacts</span>
          <div className=" flex flex-col gap-y-5 ">
            {contact.map((item, i) => (
              <Link
                href={item.link}
                className="text-sm text-[#B6BDC4] hover:text-white hover:underline "
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="xl:-translate-y-20">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className=" w-[120px] sm:w-[160px] justify-between border-none bg-transparent text-white "
            >
              {value
                ? filter_one.find((framework) => framework.value === value)
                    ?.label
                : "English"}
              <FaChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[120px] sm:w-[160px] p-0 ">
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
                        value === framework.value ? "opacity-100" : "opacity-0"
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
  );
};

export default Footer;
