import React, { useEffect, useState } from "react";
import ParagraphText from "../ficher/ParagraphText";
import PinkBtn from "../ficher/PinkBtn";

const ChangeBackground = (props) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % props.carousel.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gray-100">
      <div
        className="w-full h-24 lg:h-screen flex items-center justify-center text-white text-xl font-bold transition-all duration-1000"
        style={{
          backgroundImage: `url(${props.carousel[index].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <PinkBtn>شما هم شروع کنید !</PinkBtn>
      </div>
    </div>
  );
};

export default ChangeBackground;
