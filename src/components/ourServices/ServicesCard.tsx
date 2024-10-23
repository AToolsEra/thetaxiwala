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
  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <div>
        <Image src={thumbnail} alt={title} width={100} height={100} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={href}>{label}</a>
      </div>
    </div>
  );
}
