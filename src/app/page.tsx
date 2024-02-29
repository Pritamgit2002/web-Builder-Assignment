import BuilderList from "@/components/BuilderList/BuilderList";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import RelatedList from "@/components/RelatedList/RelatedList";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#FBFCFD] ">
      {/* <Navbar /> */}
      <Navbar />
      <Hero />
      <BuilderList />
      <RelatedList />
      <Footer />
    </div>
  );
};

export default page;
