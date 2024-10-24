import Image from "next/image";
import React from "react";
//Get a card component from shadcn and use it to create services card

type TServicesCardProps = {
  service: {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    cta: {
      label: string;
      href: string;
    };
  };
};
export default function ServicesCard(props: TServicesCardProps) {
  const {
    service: {
      thumbnail,
      title,
      description,
      cta: { label, href },
    },
  } = props;
  const height = 272;
  const width = 382;
  return (
    // <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md border border-gray-200 ">
    <div className="flex flex-col bg-[#F3F3F1] border border-lightgray max-w-sm">
      <div>
        <Image src={thumbnail} alt={title} width={width} height={height} />
      </div>
      <div className="flex flex-col p-6 gap-4"> 
        <h3 className="text-2xl font-bold font-manrope leading-10">{title}</h3>
        <p className="text-[#636363] leading-5">{description}</p>
        <a className="text-[#FF540E] text-base  font-semibold leading-4" href={href}>{label}</a>
      </div>
    </div>
  );
}
