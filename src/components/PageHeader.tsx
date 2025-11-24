import React from "react";

interface Props {
  title: string;
}

const PageHeader: React.FC<Props> = ({ title }) => {
  return (
    <header className="bg-primary text-white h-52 sm:h-52 md:h-64 flex items-end">
      <div className="max-w-6xl mx-auto px-6 w-full pb-10">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-center">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default PageHeader;
