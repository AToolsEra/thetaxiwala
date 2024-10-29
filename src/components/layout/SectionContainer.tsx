import React from "react";
import { Montserrat, Manrope } from "next/font/google";

type SectionContainerProps = {
  introduction?: {
    title: string;
    subtitle: string;
  };
  classnames?: string;
  children?: React.ReactNode;
  id?: string;
};

const manrope = Manrope();
const montserrat = Montserrat();

export default function SectionContainer(props: SectionContainerProps) {
  const { introduction, children, classnames } = props;
  const { title, subtitle } = introduction || {};

  return (
    <div
      className={`scroll-mt-16 flex flex-col px-4 sm:px-6 py-8 sm:py-12 ${
        classnames ? classnames : ""
      }`}
      id={props?.id ? props.id : ""}
    >
      <div className="flex flex-col max-w-screen-xl mx-auto w-full overflow-x-hidden">
        {introduction ? (
          <div className="flex flex-col max-w-3xl mx-auto w-full">
            <h2
              className={`text-3xl sm:text-5xl font-bold text-left sm:text-center text-primary-foreground ${manrope.className}`}
            >
              {title}
            </h2>
            <p
              className={`mt-2 sm:mt-4 text-sm sm:text-xl text-left sm:text-center text-secondary-foreground ${montserrat.className}`}
            >
              {subtitle}
            </p>
          </div>
        ) : null}
        {children && (
          <div className="mt-6 max-w-6xl mx-auto w-full">{children}</div>
        )}
      </div>
    </div>
  );
}
