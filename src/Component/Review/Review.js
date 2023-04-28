import React, { useContext, useState } from "react";

import { BsBookmarkStarFill } from "react-icons/bs";
import Title from "../Title/Title";
import { Select } from "./UsedInput";
import Star from "../Home/TopRated/Star";
import { useQuery } from "react-query";
import { AuthContext } from "../../Context/UserContext";
import moment from "moment/moment";
import UserReview from "./UserReview";
import axios from "axios";
import { toast } from "react-hot-toast";

const Review = ({ movie }) => {
  const { user } = useContext(AuthContext);
  const { _id } = movie;

  const { data, isLoading, refetch } = useQuery("blogs", () =>
    axios(`https://cineplanet-server.vercel.app/review/${_id}`)
  );
  refetch()
  console.log(data);

  const [rating, setRating] = useState();
  

  const Ratings = [
    {
      title: "0 - Poor",
      value: 0,
    },
    {
      title: "1 - Fair",
      value: 1,
    },
    {
      title: "2 - Good",
      value: 2,
    },
    {
      title: "3 - Very Good",
      value: 3,
    },
    {
      title: "4 - Excellent",
      value: 4,
    },
    {
      title: "5 - Masterpiece",
      value: 5,
    },
  ];

  const [comment, setComment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting comment: ${comment}`);
    const commentInfo = {
      userName: user?.displayName,
      photo: user?.photoURL,
      comment,
      postId: _id,
      time: moment().format("LL"),
      email: user?.email,
      rate: rating,
    };

    fetch(`https://cineplanet-server.vercel.app/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("hit inside");
        if (data.acknowledged) {
          refetch();
          toast.success("review added successful");
        }
      });
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="my-12">
      <Title title="Review" Icon={BsBookmarkStarFill} />
      <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-slate-900 sm:p-10 py-10 px-2 md:p-20 rounded">
        {/* review */}
        <div className="xl:col-span-2 w-full flex flex-col gap-8">
          <h3 className="text-xl text-white font-semibold">
            Review "{movie?.name}"
          </h3>
          <p className="text-sm leading-7 font-medium text-gray-500">
            Write a review for this movie. It will be posted on this page.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="text-sm w-full">
              <Select
                label="Select Rating"
                options={Ratings}
                onChange={(e) => setRating(e.target.value)}
              >
                <div className="flex mt-4 text-lg gap-2 text-yellow-500">
                  <Star value={rating} />
                </div>
              </Select>
            </div>
            <div className="text-sm w-full">
              <label
                className="text-gray-400 font-semibold"
                label="Message"
              ></label>
              <textarea
                value={comment}
                onChange={handleCommentChange}
                className="w-full bg-black  h-40 mt-2 p-6 border border-gray-700 rounded"
                placeholder="Make it short and sweet ...."
              ></textarea>
            </div>

            {/* submit */}
            <button className="bg-red-600 hover:bg-red-800 text-white py-3 w-full flex-colo rounded mt-5">
              Submit
            </button>
          </form>
        </div>
        {/* Reviews */}
        <div className="col-span-3 flex flex-col gap-6">
          <h3 className="text-xl text-white font-semibold">
            Reviews ({data?.data?.length})
          </h3>
          <div className="w-full flex flex-col bg-black gap-6 rounded-lg md:p-12 p-6 h-96 overflow-y-scroll">
            {data?.data?.map((userReview, i) => (
              <UserReview key={i} userReview={userReview} isLoading={isLoading}></UserReview>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
