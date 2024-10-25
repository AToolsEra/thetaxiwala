import Image from "next/image";
import React from "react";
//Get a card component from shadcn and use it to create testimonial card

type TTestimonialCardProps = {
  testimonial: {
    id: number;
    userName: string;
    UserProfile: string;
    FeedbackDescription: string;
    Source: string;
  };
};
export default function TestimonialCard(props: TTestimonialCardProps) {
  const {
    testimonial: {
      UserProfile,
      userName,
      FeedbackDescription,
      Source
    },
  } = props;

  console.log('userProfile', UserProfile)
  const profileAvatarSize = 46;
  return (
    <div className="justify-between flex flex-col gap-5 bg-white p-7 rounded-lg shadow-md border border-gray-200 max-w-[500px]">
      <div>
        <p className="text-lg font-normal leading-7 text-[#3A3A41]">{FeedbackDescription}</p>
      </div>
      <div className="flex flex-col gap-1 ">
        <h3 className="text-base text-[#0F0F18] font-bold leading-6">{userName}</h3>
        <p className="text-sm text-[#6E6E72] font-normal leading-5 whitespace-nowrap overflow-hidden text-ellipsis">{Source}</p>
        <div className="mt-1">
          <Image src={UserProfile} alt={userName} width={profileAvatarSize} height={profileAvatarSize} />
        </div>
      </div>
    </div>
  );
}
