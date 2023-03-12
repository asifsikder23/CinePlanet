import React from "react";
import { useQuery } from "react-query";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const { data: movies, refetch } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/movies`
      );
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
            // spaceBetween={20}
            loop={true}
            speed={1000}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="w-full h-48 lg:h-64 xl:h-96"
          >
        {
            movies?.map((movie, index)=>(
                <SwiperSlide key={index} className="relative rounded overflow-hidden">
                    <img src={movie.img} alt="" className="w-full h-full object-cover" />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
};

export default Hero;
