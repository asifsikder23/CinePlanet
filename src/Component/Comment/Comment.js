import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import MovieComment from "./MovieComment";

const Comment = ({ info }) => {
  const { _id } = info;
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState("");

  const queryKey = ["moviesComment"];
  const queryFn = async () => {
    const response = await fetch(
      `https://cineplanet-server.vercel.app/movieComment/${_id}`
    );
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: moviesCommentData, refetch } = useQuery(queryKey, queryFn);

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

    fetch(`https://cineplanet-server.vercel.app/moviesComment`, {
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
          alert("Comment added successful");
        }
      });
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  return (
    <div>
      <div className="col-span-4 pl-2">
        <div>
          <div className="h-96">
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
            className="bg-[#660000] rounded-lg p-4 hover:shadow-lg"
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
              <Link to={"/signIn"}>
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
  );
};

export default Comment;
