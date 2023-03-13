import React from "react";
import { BsCollectionFill } from "react-icons/bs";
import { useQuery } from "react-query";
import Title from "../../Title/Title";
import Popular from "./Popular";

const PopularMovies = () => {
  const { data: movies } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await fetch(`https://cineplanet-server.vercel.app/movies`);
      const data = await res.json();

      return data;
    },
  });
  return (
    <div className="my-16">
      <Title title="Popular Movies" Icon={BsCollectionFill} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 md:mt-12 gap-10">
        {movies?.map((popular) => (
          <Popular key={popular._id} popular={popular}></Popular>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
