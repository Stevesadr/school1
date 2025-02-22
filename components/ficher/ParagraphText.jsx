import React from "react";

const ParagraphText = (props) => {
  return (
    <div className="flex items-center  justify-center max-w-[75%] mx-4  ">
      <span className="text-center  text-gray-600 relative text-sm font-medium lg:text-lg lg:px-4 mx-4 md:z-40   bg-gray-100">
        {props.children}
      </span>
      <div className="hidden lg:block absolute w-[75%] border-t border-gray-300"></div>
    </div>
  );
};

export default ParagraphText;
