import React from "react";
import { BiShowAlt } from "react-icons/bi";

const MostViewed = ({ info }) => {
  const { viewed } = info;

  return (
    <>
      <div className="flex gap-2 items-center">
        <BiShowAlt className="w-6 h-6 bg-red-600 p-1 rounded" />{" "}
        {viewed} View
      </div>
    </>
  );
};

export default MostViewed;
