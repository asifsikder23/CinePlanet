import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { GrView } from "react-icons/gr";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
  AiFillLike,
} from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { SlUserFollow } from "react-icons/sl";
import { TfiComment } from "react-icons/tfi";
import ReactPlayer from "react-player";
import { AuthContext } from "../../context/ContextProvider/ContextProvider";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import MovieComment from "./MovieComment";
import Loader from "../../component/Loader/Loader";
const PlayMovie = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const movie = useLoaderData();

  const {
    Views,
    title,
    channel,
    description,
    like,
    posted_date,
    videoLink,
    _id,
  } = movie;

  const [comment, setComment] = useState("");
  const [likeCount, setLikeCount] = useState(like);
  const [liked, setLiked] = useState(false);
  // console.log(comment);

  const queryKey = ["moviesComment"];
  const queryFn = async () => {
    const response = await fetch(
      `https://stream-tube-server-leoarafat.vercel.app/movieComment/${_id}`
    );
    const jsonData = await response.json();
    return jsonData;
  };

  const {
    data: moviesCommentData,
    isLoading,
    isError,
    refetch,
  } = useQuery(queryKey, queryFn);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting comment: ${comment}`);
    const commentInfo = {
      userName: user?.displayName,
      comment,
      postId: _id,
      time: new Date(),
      email: user?.email,
    };
    // console.log('comment')

    fetch(`https://stream-tube-server-leoarafat.vercel.app/moviesComment`, {
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
          toast.success("Comment added successful");
        }
      });
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleLike = (id) => {
    if (user?.email) {
      fetch(`https://stream-tube-server-leoarafat.vercel.app/movieLike/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user?.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "movie liked successfully") {
            setLiked(!liked);
            setLikeCount((prevLikeCount) => prevLikeCount + (liked ? -1 : 1));
          } else if (data.message === "movie unliked successfully") {
            setLiked(!liked);
            setLikeCount((prevLikeCount) => prevLikeCount - 1);
          } else {
            Swal.fire({
              icon: "error",
              title: "Unable to like movie",
            });
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Please login first",
      });
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>{toast.error("Error loading data")}</div>;
  }
  const handleShare = (item) => {
    const postData = { item, email: user?.email };
    if (user?.email) {
      Swal.fire({
        title: "Do you want to share this post?",
        showCancelButton: true,
        confirmButtonText: "share",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch("https://stream-tube-server-leoarafat.vercel.app/sharePost", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(postData),
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data)
              if (data.acknowledged) {
                toast.success("Shared");
              }
            });
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Please login first",
      });
    }
  };
  return (
    <div className="bg-gradient-to-r from-[#141e30] to-[#243b55] p-3 ">
      <div className="md:grid grid-cols-12 mt-[100px]">
        <div className="col-span-8">
          <div className="card bg-gradient-to-r from-[#006663] to-[#111111] bg-base-100 shadow-xl">
            <ReactPlayer
              playing
              width={"100%"}
              height={"50%"}
              controls
              url={videoLink}
            />
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <div className="">
                <p className="flex items-center text-lg">
                  <BsCalendarEvent className="h-6 w-6" />
                  <span>{posted_date} year ago</span>
                </p>
                <p className="flex items-center text-lg">
                  <TfiComment className="h-6 w-6" />
                  <span className="ml-1">
                    {moviesCommentData?.length} Comments
                  </span>
                </p>
                <p className="flex items-center text-lg">
                  <GrView className="h-6 w-6" />
                  <span className="ml-1">{Views} Viewers</span>
                </p>
              </div>
              <ul className="flex justify-center items-center shadow-md  rounded-sm">
                <li onClick={() => handleLike(_id)} className="p-2 mr-5">
                  <div className="indicator">
                    {liked ? (
                      <AiFillLike className="w-8 h-8" />
                    ) : (
                      <AiOutlineLike className="w-8 h-8" />
                    )}

                    <span className="badge badge-sm indicator-item">
                      {likeCount}
                    </span>
                  </div>
                </li>
                <li className="p-2 mr-5">
                  <div className="indicator">
                    <AiOutlineDislike className="w-8 h-8" />

                    <span className="badge badge-sm indicator-item"></span>
                  </div>
                </li>
                <li onClick={() => handleShare(movie)}>
                  <AiOutlineShareAlt className="w-8 h-8" />
                </li>
              </ul>
            </div>
            <div className="p-5">
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">{channel}</h1>
                <p>
                  <SlUserFollow className="h-8 w-8" />
                </p>
              </div>
              <hr className="mt-2" />
              <div>
                <h2 className="text-xl">Movie description:</h2>{" "}
                <p className="text-lg">{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 pl-2">
          <div>
            <div>
              {moviesCommentData?.map((comment) => (
                <MovieComment
                  key={comment._id}
                  _id={comment._id}
                  comment={comment.comment}
                  postId={comment.postId}
                  time={comment.time}
                />
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-r from-[#006663] to-[#111111] rounded-lg p-4 hover:shadow-lg"
            >
              <textarea
                value={comment}
                onChange={handleCommentChange}
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Write a comment"
              />
              {user?.email ? (
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-2"
                >
                  Submit
                </button>
              ) : (
                <Link to={"/login"}>
                  <button
                    type="submit"
                    className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative text-base font-semibold text-white dark:text-dark">
                      LogIn
                    </span>
                  </button>
                </Link>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayMovie;