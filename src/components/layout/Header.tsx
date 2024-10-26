import React from "react";
import { Button } from "../ui/button";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat();

export default function Header() {
  return (
    <div
      className={`flex justify-center items-center py-5 h-20 ${montserrat.className}`}
    >
      <div className="max-w-screen-xl w-full items-center justify-between px-6 hidden lg:flex">
        <h1 className="font-bold text-4xl">Logo</h1>
        <nav className="flex justify-between items-center font-semibold">
          <ul className="flex">
            <li className="mr-5">Home</li>
            <li className="mr-5">Our Services</li>
            <li className="mr-5">Why Us</li>
            <li className="mr-5">Testimonials</li>
            <li className="mr-5">Contact Us</li>
          </ul>
          <Button variant={"accent1"}>Book Now</Button>
        </nav>
      </div>
      <h1 className="block lg:hidden">Logo</h1>
    </div>
  );
}
