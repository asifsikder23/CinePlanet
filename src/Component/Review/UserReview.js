import React from "react";
import Star from "../Home/TopRated/Star";

const UserReview = ({ userReview, isLoading }) => {
  return (
    <div>
      {
        isLoading ?
        <p>Loading</p>
        :
        <div className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-black p-4 border border-gray-800 rounded-lg">
        <div className="col-span-2 hidden md:block">
          <img
            src={userReview?.photo}
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <div className="col-span-7 flex flex-col gap-2">
          <div className="flex justify-between">
            <h2>{userReview?.userName}</h2>
            <p className="text-xs">{userReview?.time}</p>
          </div>
          <p className="text-xs leading-6 font-medium text-white">
            {userReview?.comment}
          </p>
        </div>
        <div className="col-span-3 flex flex-row items-center justify-center border-l border-gray-700 text-xs gap-1 text-yellow-500">
          <Star value={userReview?.rate} />
        </div>
      </div>
      }
    </div>
  );
};

export default UserReview;
