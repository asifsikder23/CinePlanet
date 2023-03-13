import React from "react";
import { FaHeart } from "react-icons/fa";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import FlexMovieItems from "./FlexMovieItems";

const Hero = () => {
  const { data: movies, refetch } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await fetch(`https://cineplanet-server.vercel.app/movies`);
      const data = await res.json();

      return data;
    },
  });
  console.log(movies);

  return (
    <div className="relative w-full">
      <Swiper
        direction="vertical"
        slidesPerview={1}
        loop={true}
        speed={3000}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-48 lg:h-64 xl:h-96"
      >
        {movies?.map((movie, index) => (
          <SwiperSlide key={index} className="relative rounded overflow-hidden">
            <img
              src={movie.img}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute linear-bg pl-8 md:pl-32 xl:pl-52 top-0 bottom-0 right-0 left-0 flex flex-col justify-center gap-4 md:gap-5 lg:gap-8">
              <h1 className="text-xl md:text-2xl font-bold xl:text-4xl truncate capitalize font-sans">
                {movie.name}
              </h1>
              <div className="flex gap-5 items-center text-white">
                <FlexMovieItems movie={movie} />
              </div>
              <div className="flex gap-5 items-center">
                <Link
                to={`/watch/${movie._id}`}
                  class="relative px-5 py-2 font-medium text-white group"
                >
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-red-500 group-hover:bg-red-700 group-hover:skew-x-12"></span>
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-red-700 group-hover:bg-red-500 group-hover:-skew-x-12"></span>

                  <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-red-600 -rotate-12"></span>
                  <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-red-400 -rotate-12"></span>
                  <span class="relative">Watch</span>
                </Link>
                <button className="bg-white hover:text-red-600 text-white px-4 py-3 rounded text-sm bg-opacity-30">
                  <FaHeart/>

                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
