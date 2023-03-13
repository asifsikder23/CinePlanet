import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import FlexMovieItems from "./FlexMovieItems";
import "./watch.css";

const MovieInfo = () => {
  const params = useParams();
  const id = params.id;
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(id);

  useEffect(() => {
    setLoading(true);
    fetch(`https://cineplanet-server.vercel.app/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
        setLoading(false);
      });
  }, [id]);
  return (
    <div>
      {details?.map((movie) => (
        <div className="w-full lg:h-screen relative text-white">
          <img
            src={movie?.titleImg}
            alt={movie?.name}
            className="w-full h-full hidden lg:inline-block object-cover"
          />
          <div className="bg-slate-900 lg:bg-black lg:bg-opacity-90 lg:absolute top-0 left-0 right-0 bottom-0">
            <h1 className="text-2xl md:text-5xl font-bold tbl-header text-center py-5">
              {movie?.name}
            </h1>
            
            <div className="flex justify-center">
              <ReactPlayer
                controls
                playing
                volume
                playIcon
                playbackRate
                fallback
                url={movie?.video}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieInfo;
