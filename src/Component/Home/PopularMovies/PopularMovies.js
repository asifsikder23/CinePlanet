import React from "react";
import { BsCollectionFill } from "react-icons/bs";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Favorite from "../../../Shared/Favorite/Favorite";
import ViewAllBtn from "../../button/ViewAllBtn";
import Title from "../../Title/Title";

const PopularMovies = () => {

  const { data: popular } = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const res = await fetch(`https://cineplanet-server.vercel.app/popular`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="my-16">
      <Title title="Popular Movies" Icon={BsCollectionFill} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 md:mt-12 gap-10">
        {popular?.map((movie) => (
          <div className="border border-border p-1 hover:scale-95 transition relative rounded overflow-hidden">
            <Link to={`/watch/${movie._id}`} className="w-full">
              <img src={movie.titleImg} alt="" className="w-full h-44" />
            </Link>
            <div className="absolute flex justify-between gap-2 bottom-0 right-0 left-0 bg-slate-900 bg-opacity-60 text-white px-4 py-3">
              <h3 className="font-semibold truncate">{movie.name}</h3>
              <Favorite movie={movie}></Favorite>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to={`/movies/popular`}

          className="relative px-5 py-2 font-medium text-white group"
        >
          <ViewAllBtn />
        </Link>
      </div>
    </div>
  );
};

export default PopularMovies;
