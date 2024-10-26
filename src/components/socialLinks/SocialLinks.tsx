import { socialLinksData } from "@/app/data";
import Image from "next/image";
import React from "react";

export default function SocialLinks() {
  return (
    <div className="flex flex-row mt-10 sm:mt-16">
      {
        socialLinksData.map(({ id, socialTypeIcon, socialLinks, title }) => (
          <div key={id} className="flex flex-row px-2">
            <a href={socialLinks}>
              <Image
                src={socialTypeIcon}
                alt={title}
                width={30}
                height={30}
              />
            </a>
          </div>
        ))
      }
    </div>
  );
}
