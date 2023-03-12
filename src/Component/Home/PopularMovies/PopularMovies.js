import React from "react";
import Title from "../../Title/Title";
import { BsCollectionFill } from "react-icons/bs";
import { useQuery } from "react-query";
import Popular from "./Popular";

const PopularMovies = () => {
  const { data: movies, refetch } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/movies`);
      const data = await res.json();

      return data;
    },
  });
  refetch()
  console.log(movies);
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
