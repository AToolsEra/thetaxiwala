import Image from "next/image";
import React from "react";
//Get a card component from shadcn and use it to create services card

type TContactUsCardProps = {
    contact: {
        id: number;
        contactTypeIcon: string;
        contactValue: string;
        title: string;
    };
};
export default function ContactUsCard(props: TContactUsCardProps) {
    const {
        contact: {
            contactTypeIcon,
            contactValue,
            title
        },
    } = props;
    const iconSize = 30;
    return (
        <div className="flex flex-row w-[90%] items-center gap-7 mt-3 p-2">
            <Image src={contactTypeIcon} alt={title} width={iconSize} height={iconSize} className="" />
            <p className="font-medium text-xl leading-6 text-[#808080]">{contactValue}</p>
        </div>
    );
}
