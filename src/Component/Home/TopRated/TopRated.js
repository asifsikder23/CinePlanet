import React, { useState } from "react";
import { BsBookmarkStarFill,BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../Title/Title";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Star from "./Star";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";


const TopRated = () => {

  const { data: movies } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await fetch(`https://cineplanet-server.vercel.app/movies`);
      const data = await res.json();

      return data;
    },
  });
  console.log(movies);
  return (
    <div className="my-16">
      <Title title="Top Rated" Icon={BsBookmarkStarFill} />
      <div className="mt-10 flex justify-center">
        <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
          slidesPerView={"auto"}
          spaceBetween={40}
          grabCursor={true}
        centeredSlides={true}
          speed={1000}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow]}
        >
          {movies?.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="md:p-4 hovered border-border bg-slate-900 rounded-lg overflow-hidden">
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
                        <Star value={movie.rate}/>
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
