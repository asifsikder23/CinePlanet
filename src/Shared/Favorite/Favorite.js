import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../../Context/UserContext";

const Favorite = ({ movie }) => {
  const { name, category, poster, year, time, _id } = movie;
  console.log(movie);
  const { user } = useContext(AuthContext);
  const handleFavorite = () => {
    const email = user.email;
    const userName = user.displayName;
    const movieName = name;
    const categoryName = category;
    const posterImg = poster;
    const release = year;
    const duration = time;

    const userFavorite = {
      movieName,
      categoryName,
      posterImg,
      userName,
      email,
      release,
      duration,
    };

    fetch("http://localhost:5000/favorite", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userFavorite),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Favorite added");
        console.log("test", data);
      });
  };
  return (
    <div>
      <button
        onClick={handleFavorite}
        className="h-9 w-9 text-sm flex justify-center items-center transition bg-transparent border-2 border-red-600 rounded-md hover:bg-red-600 text-white"
      >
        <FaHeart />
      </button>
    </div>
  );
};

export default Favorite;
