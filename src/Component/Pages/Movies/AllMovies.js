import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Favorite from "../../../Shared/Favorite/Favorite";
import Search from "../../Search";

const AllMovies = () => {
  const { data: allMovies } = useQuery({
    queryKey: ["allMovies"],
    queryFn: async () => {
      const res = await fetch(`https://cineplanet-server.vercel.app/movies`);
      const data = await res.json();

      return data;
    },
  });
  return (
    <div>
      <div className="pt-10 flex justify-end pr-6">
       
      </div>
      <div>
        <div className="lg:ml-auto  mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <div className="px-6 md:px-16 lg:px-6 pl-20 md:pl-80 lg:pl-5 pt-6 2xl:container">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 mt-6 md:mt-12 gap-10">
              {allMovies?.map((movie) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
