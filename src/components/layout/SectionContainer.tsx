import React from "react";

type SectionContainerProps = {
  introduction?: {
    title: string;
    subtitle: string;
  };
  classnames?: string;
  children?: React.ReactNode;
};

export default function SectionContainer(props: SectionContainerProps) {
  const { introduction, children, classnames } = props;
  const { title, subtitle } = introduction || {};

  return (
    <div
      className={`flex flex-col px-4 sm:px-6 py-8 sm:py-12 min-h-[400px] sm:min-h-[500px] ${
        classnames ? classnames : ""
      }`}
    >
      <div className="flex flex-col max-w-3xl mx-auto w-full">
        <h2 className="text-3xl sm:text-5xl font-bold text-left sm:text-center text-gray-900">
          {title}
        </h2>
        <p className="mt-2 sm:mt-4 text-sm sm:text-xl text-left sm:text-center text-gray-500">
          {subtitle}
        </p>
      </div>
      {children && (
        <div className="mt-6 max-w-6xl mx-auto w-full">{children}</div>
      )}
      <div className="flex flex-col max-w-screen-xl mx-auto w-full overflow-x-hidden">
        {introduction ? (
          <div className="flex flex-col max-w-3xl mx-auto w-full">
            <h2 className="text-3xl sm:text-5xl font-bold text-left sm:text-center text-gray-900">
              {title}
            </h2>
            <p className="mt-2 sm:mt-4 text-sm sm:text-xl text-left sm:text-center text-gray-500">
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
