import React, { useContext, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";

const Like = ({ info }) => {
  const { like, _id } = info;
  const { user } = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState(like);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (user?.email) {
      fetch(`https://cineplanet-server.vercel.app/movieLike/${_id}`, {
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
  return (
    <>
      <div
        onClick={() => handleLike(liked._id)}
        className="flex gap-2 items-center cursor-pointer"
      >
        <AiOutlineLike className="w-6 h-6 bg-red-600 p-1 rounded"/> {likeCount} Like
      </div>
    </>
  );
};

export default Like;
