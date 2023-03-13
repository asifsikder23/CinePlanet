import React, { useState } from "react";
import { BsBookmarkStarFill } from "react-icons/bs";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../Title/Title";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Star from "./Star";
import { Autoplay, FreeMode, Pagination } from "swiper";

const TopRated = () => {
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
      <Title title="Top Rated" Icon={BsBookmarkStarFill} />
      <div className="mt-10">
        <Swiper
          spaceBetween={40}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
        >
          {movies?.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="md:p-4 hovered border border-border bg-slate-900 rounded-lg overflow-hidden">
                <img
                  src={movie.poster}
                  className="w-full h-full object-cover rounded-lg"
                  alt={movie.name}
                />
                <div className="px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0 py-48">
                  <div className="flex justify-center items-center pb-2">
                    <button className="w-12 h-12 flex flex-col justify-center items-center transition hover:bg-red-600 rounded-full bg-white bg-opacity-30 text-white">
                      <FaHeart />
                    </button>
                  </div>
                  <Link
                    to={`/watch/${movie._id}`}
                    className="font-semibold text-xl"
                  >
                    {movie.name}
                  </Link>
                  <div className="flex gap-2 text-yellow-600 justify-center pt-2">
                    <Star value={movie.rate} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopRated;
