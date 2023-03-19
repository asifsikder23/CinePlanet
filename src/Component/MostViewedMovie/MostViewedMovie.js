import React from "react";
import { BiShowAlt } from "react-icons/bi";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Favorite from "../../Shared/Favorite/Favorite";
import ViewAllBtn from "../button/ViewAllBtn";
import Title from "../Title/Title";

const MostViewed = () => {
  const { data: mostView } = useQuery({
    queryKey: ["mostView"],
    queryFn: async () => {
      const res = await fetch(`https://cineplanet-server.vercel.app/mostViewed`);
      const data = await res.json();
      return data;
    },
  });
  console.log(mostView);
  return (
    <div className="my-16">
      <Title title="Top Viewed" Icon={BiShowAlt} />
      <div className="mt-10">
        <div className=" mt-6 md:mt-12">
          <Swiper
            spaceBetween={40}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={2000}
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
            modules={[Pagination, FreeMode, Autoplay]}
          >
            {mostView?.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className="border border-border p-1 hover:scale-95 transition relative rounded overflow-hidden">
                  <Link to={`/watch/${movie._id}`} className="w-full">
                    <img src={movie.titleImg} alt="" className="w-full h-44" />
                  </Link>
                  <div className="absolute flex justify-between gap-2 bottom-0 right-0 left-0 bg-slate-900 bg-opacity-60 text-white px-4 py-3">
                    <h3 className="font-semibold truncate">{movie.name}</h3>
                    <Favorite movie={movie}></Favorite>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex justify-center mt-10">
      <Link
        to={`/movies/topViewed`}

        className="relative px-5 py-2 font-medium text-white group"
      >
        <ViewAllBtn/>
      </Link>
      </div>
    </div>
  );
};

export default MostViewed;
