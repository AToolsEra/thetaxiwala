import Image from "next/image";
import React from "react";

export default function HeroSection() {


  return (
    <div
      className="relative overflow-hidden w-full h-full"
    >
      <div
        className="hidden md:block h-screen w-full"
      >
        <Image src={'images/hero/banner.svg'} alt={'Hero Desktop'} layout="fill" objectFit="cover" />
      </div>
      <div
        className="md:hidden h-[760px] "
      >
        <Image
          src={'images/hero/bannerPhone.svg'} alt={'Hero Mobile'} layout="fill" objectFit="cover" />
      </div>

    </div>
  );
}
