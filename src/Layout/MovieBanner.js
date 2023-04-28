import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import FlexMovieItems from "../Component/Home/Hero/FlexMovieItems";
import Favorite from "../Shared/Favorite/Favorite";

const MovieBanner = () => {
  const { data: movies, refetch } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await fetch(`https://cineplanet-server.vercel.app/movies`);
      const data = await res.json();

      return data;
    },
  });

    
  return (
    <div className="relative w-full">
      <Swiper
        // direction="vertical"
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
        modules={[Autoplay, FreeMode]}
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieBanner;
