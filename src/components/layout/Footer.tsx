import React from "react";
import FooterSubSection from "./FooterSubSection";
import { FooterSubSectionData } from "@/app/data";

export default function Footer() {


  console.log("footer", FooterSubSectionData)
  const footerSubText = 'We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...'
  return (
    <div className="py-12 px-6 bg-black ">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-white text-2xl">TheTaxiWala</h1>
        <p className="text-sm text-GreyText font-normal leading-4">
          {footerSubText} <span className="text-ReadMoreText">Read More</span>
        </p>
      </div>
      <div className="mt-5">
        <FooterSubSection footerData={FooterSubSectionData} />
      </div>
      <div><p className="text-sm font-normal text-GreyText">© 2000-2021, All Rights Reserved</p></div>
    </div>);
}
