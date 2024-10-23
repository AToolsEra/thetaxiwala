import React from "react";

type SectionContainerProps = {
  options: {
    title: string;
    subtitle: string;
    background?: string;
  };
  children?: React.ReactNode;
};

export default function SectionContainer(props: SectionContainerProps) {
  const {
    options: { title, subtitle, background },
    children,
  } = props;

  return (
    <div
      className={`flex flex-col px-4 sm:px-6 py-8 sm:py-12 min-h-[400px] sm:min-h-[500px] ${
        background ? background : ""
      }`}
    >
      <div className="flex flex-col max-w-3xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold text-left sm:text-center text-gray-900">
          {title}
        </h2>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg text-left sm:text-center text-gray-600">
          {subtitle}
        </p>
      </div>
      {children && (
        <div className="mt-6 sm:mt-8 max-w-6xl mx-auto w-full">{children}</div>
      )}
    </div>
  );
}
