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
      className={`flex flex-col px-6 py-12 min-h-[500px] ${
        background ? background : ""
      }`}
    >
      <div className="flex flex-col">
        <h2 className="text-3xl font-semibold text-center">{title}</h2>
        <p className="mt-4 text-lg text-center text-gray-500">{subtitle}</p>
      </div>
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
