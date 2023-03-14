import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import Swal from 'sweetalert2'
import { AiOutlineComment, AiOutlineLike } from "react-icons/ai";

const Like = ({ info }) => {
    const {like, _id} = info
  const { user } = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState(like);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (user?.email) {
      fetch(`http://localhost:5000/movieLike/${_id}`, {
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
  return <>
  <div className="flex gap-3 items-center justify-center">
            <div
              onClick={() => handleLike(liked._id)}
              className="flex gap-2 items-center"
            >
              <AiOutlineLike /> {likeCount} Like
            </div>
            <div className="flex gap-2 items-center">
              <AiOutlineComment /> Comment
            </div>
          </div></>;
};

export default Like;
