"use client";

import React from "react";
import { Button } from "../ui/button";

import { Montserrat } from "next/font/google";
import useActiveSection from "@/hooks/useActiveSection";

const montserrat = Montserrat();

export default function Header() {
  const activeSection = useActiveSection();
  const getClassName = (section: string) =>
    activeSection === section ? "text-accent1" : "";
  return (
    <div
      className={`flex justify-center items-center py-5 h-20 ${montserrat.className}`}
    >
      <div className="max-w-screen-xl w-full items-center justify-between px-6 hidden lg:flex">
        <h1 className="font-bold text-4xl">Logo</h1>
        <nav className="flex justify-between items-center font-semibold">
          <ul className="flex">
            <li className="mr-5">
              <a href="#home" className={`nav-link ${getClassName("home")}`}>
                Home
              </a>
            </li>
            <li className="mr-5">
              <a
                href="#services"
                className={`nav-link ${getClassName("services")}`}
              >
                Our Services
              </a>
            </li>
            <li className="mr-5">
              <a href="#whyUs" className={`nav-link ${getClassName("whyUs")}`}>
                Why Us
              </a>
            </li>
            <li className="mr-5">
              <a
                href="#testimonials"
                className={`nav-link ${getClassName("testimonials")}`}
              >
                Testimonials
              </a>
            </li>
            <li className="mr-5">
              <a
                href="#contactUs"
                className={`nav-link ${getClassName("contactUs")}`}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <Button variant={"accent1"}>Book Now</Button>
        </nav>
      </div>
      <h1 className="block lg:hidden">Logo</h1>
    </div>
  );
}
