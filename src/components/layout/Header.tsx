import React from "react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="flex justify-center items-center py-5 h-20">
      <div className="max-w-screen-xl w-full items-center justify-between px-6 hidden lg:flex">
        <h1>Logo</h1>
        <nav className="flex justify-between items-center">
          <ul className="flex">
            <li className="mr-5">Home</li>
            <li className="mr-5">Our Services</li>
            <li className="mr-5">Why Us</li>
            <li className="mr-5">Testimonials</li>
            <li className="mr-5">Contact Us</li>
          </ul>
          <Button className="rounded-full">Book Now</Button>
        </nav>
      </div>
      <h1 className="block lg:hidden">Logo</h1>
    </div>
  );
}
