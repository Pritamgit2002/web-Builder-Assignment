import Image from "next/image";
import Link from "next/link";
import { PiMagnifyingGlassLight } from "react-icons/pi";

const navLinks = [
  { title: "Categories", link: "/categories" },
  { title: "Website Builders", link: "/websiteBuilders" },
  { title: "Today's Deals", link: "/today'sDeals" },
];
export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-center gap-8 bg-[#212731] mx-auto h-16 ">
      <div className="w-64 h-9 bg-white flex items-center justify-center gap-1 border-[1px] rounded-lg pl-2 ">
        <div className=" text-xl sm:text-2xl ">
          <PiMagnifyingGlassLight />
        </div>
        <input
          type="text"
          placeholder="Search"
          className=" w-full h-full flex items-center justify-center rounded-r-lg peer-disabled focus:outline-none "
        />
      </div>
      <div className=" flex items-center justify-center gap-8 ">
        {navLinks.map((item, i) => (
          <Link href={item.link} key={i}>
            <div className=" text-[#D1D6DA] hover:text-white ">
              <h1 className=" text-sm  ">{item.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
