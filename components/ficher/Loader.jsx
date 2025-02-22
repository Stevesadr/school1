import React from "react";
import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <BeatLoader color="#ffffff" size={12} />
    </div>
  );
};

export default Loader;
