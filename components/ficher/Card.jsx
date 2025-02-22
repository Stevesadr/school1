import React from "react";
import noprofile from "@/public/Userprofile.jpg";
import Image from "next/image";

const Card = (props) => {
  console.log(props.teacher);
  return (
    <div
      key={props.teacher.id}
      className="bg-white rounded-lg  shadow-lg overflow-hidden max-w-xl m-3  "
    >
      {props.teacher.image !== null ? (
        <img
          src={props.teacher.image}
          alt={`${props.teacher.name} ${props.teacher.last_name}`}
          className="w-full h-48 object-cover"
        />
      ) : (
        <Image
          src={noprofile}
          className="w-full h-48 object-cover"
          alt="mother"
          loading="lazy"
        />
      )}

      <div className="p-4">
        <h2 className="text-xl font-semibold">
          {props.teacher.name} {props.teacher.last_name}
        </h2>
        <p className="text-gray-600 mt-2">{props.teacher.expertise}</p>
      </div>
    </div>
  );
};

export default Card;
