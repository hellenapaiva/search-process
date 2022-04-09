import React from "react";

const Process = ({
  title,
  titleSecondary,
  subtitle,
  date,
  details,
  subject,
}) => {
  return (
    <>
      <div className="flex flex-col ">
        <span className="text-red-700 uppercase font-bold text-2xl">
          {title}
        </span>
        <span className="mt-2">{titleSecondary}</span>

        <span className="text-gray-500 mt-2 mb-8">{date}</span>
      </div>
      <div className="flex flex-col my-4">
        <span className="text-lg font-bold ">Detalhes do processo</span>
        <div className=" flex flex-col mt-4">
          <span className="text-sm font-sm text-gray-500">{subtitle}</span>
          <span className="text-sm font-sm text-gray-500 mb-4">{subject}</span>
          {details.map((item, index) => {
            return(
              <span key={index}className="text-sm font-sm text-gray-500"> - {item}</span>
            )})}
        </div>
      </div>
    </>
  );
};

export default Process;
