import Image from "next/image";
import React from "react";

type ChooseUsItemProps = {
  icon: string;
  title: string;
  subtitle: string;
};
export default function ChooseUsItem(props: ChooseUsItemProps) {
  const { icon, title, subtitle } = props;
  return (
    <div className="flex flex-col space-y-2 bg-white max-w-[272px] p-4 w-full hover:shadow-xl cursor-pointer items-center md:items-start">
      <Image src={icon} alt={title} height={50} width={50} />
      <h3 className="text-lg font-medium text-[#737373]">{title}</h3>
      <p className="text-xs text-[#A6A6A6] w-[200px] text-center md:text-left">
        {subtitle}
      </p>
    </div>
  );
}
