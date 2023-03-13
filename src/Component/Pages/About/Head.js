import React from "react";

const Head = ({title}) => {
  return (
    <div className="w-full bg-gray-900 h-40 lg:h-64 relative overflow-hidden rounded-md">
      <img
        src="https://i.ibb.co/PQdJrYr/head.png"
        alt="head"
        border="0"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-16 lg:top-24 w-full flex-colo">
        <h1 className="text-2xl lg:text-5xl text-white text-center font-bold">
            {title && title}
        </h1>
      </div>
    </div>
  );
};

export default Head;
