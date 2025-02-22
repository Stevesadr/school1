import React from "react";

const PinkBtn = (props) => {
  return (
    <button className="bg-pink-500  text-sm text-white p-3 lg:text-lg rounded-lg">
      {props.children}
    </button>
  );
};

export default PinkBtn;
