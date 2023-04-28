import React from "react";
import { FaPlay, FaShareAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import FlexMovieItems from "./FlexMovieItems";

import { useQuery } from "react-query";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import MostViewed from "../../MostViewed/MostViewed";
import Review from "../../Review/Review";
import Star from "../TopRated/Star";
import Favorite from "../../../Shared/Favorite/Favorite";

const Watch = () => {
  const params = useParams();
  const id = params.id;

  const { data: details, refetch } = useQuery({
    queryKey: ["details"],
    queryFn: async () => {
      const res = await fetch(
        `https://cineplanet-server.vercel.app/movies/${id}`
      );
      const data = await res.json();
      refetch();
      return data;
    },
  });

  const handleViewed = (id) => {
    console.log("hit outside");
    fetch(`https://cineplanet-server.vercel.app/viewed/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        if (data.modifiedCount > 0) {
        }
      });
  };
  return (
    <div>
      {details?.map((movie) => (
        <>
          <div className="w-full lg:h-screen relative text-white">
            <img
              src={movie?.titleImg}
              alt={movie?.name}
              className="w-full h-full hidden lg:inline-block object-cover"
            />
            <div className="bg-slate-900 lg:bg-black flex-colo lg:bg-opacity-90 lg:absolute top-0 left-0 right-0 bottom-0">
              <div className="container px-3 mx-auto lg:px-32 lg:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
                <div className="lg:col-span-1 w-full lg:order-none order-last h-header bg-slate-900 border border-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={movie?.poster}
                    alt={movie?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
                  <div className="col-span-3 flex flex-col gap-10">
                    <div className="flex gap-5 items-center">
                      <h1 className="lg:text-4xl capitalize font-sans text-2xl font-bold">
                        {movie?.name}
                      </h1>{" "}
                      <Favorite movie={movie} />
                    </div>
                    <div className="flex items-center gap-4 font-medium text-white">
                      <div className="flex-colo bg-red-600 text-xs px-2 py-1">
                        HD 4K
                      </div>
                      <FlexMovieItems movie={movie && movie}></FlexMovieItems>
                      <div className="flex gap-3 items-center justify-center">
                        {details?.map((info) => (
                          <MostViewed key={info.id} info={info}></MostViewed>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-white text-sm leading-7 mb-5">
                        {movie?.desc}
                      </p>
                      <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-black border border-gray-800 rounded-lg">
                        <div className="col-span-1 flex-colo border-r border-border">
                          <label
                            htmlFor="my-modal-4"
                            className="w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20 cursor-pointer"
                          >
                            <FaShareAlt />
                          </label>
                        </div>

                        <div className="col-span-2 flex-colo font-medium text-sm">
                          <p>
                            Language :{" "}
                            <span className="ml-2 truncate">
                              {movie.language}
                            </span>
                          </p>
                        </div>
                        <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                          <Link
                            to={`/watchMovie/${id}`}
                            onClick={() => handleViewed(id)}
                            className="bg-slate-900 hover:bg-red-600 transition border-2 border-red-600 lg:rounded-full flex justify-center items-center gap-4 w-full py-3"
                          >
                            <FaPlay />
                            Watch
                          </Link>
                        </div>
                      </div>
                      <div className="flex justify-center gap-2 text-yellow-600 py-7">
                        <Star value={movie.rate} />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 md:mt-0 mt-2 flex justify-end">
                    <a
                      href={movie?.video}
                      className=" w-full md:w-1/4  relative flex-colo bg-red-600 hover:bg-transparent border-2 border-red-600 transition md:h-64 h-20 rounded font-medium"
                    >
                      <div className="flex gap-6 text-md uppercase tracking-widest absolute md:rotate-90">
                        Download <FiLogIn className="w-6 h-6" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <p className="text-center text-xl pb-3 ">Share via</p>
                <div className="flex justify-center gap-5">
                  <FacebookShareButton
                    url={`https://cineplanet-theater.web.app/watch/${movie?._id}`}
                    className=""
                  >
                    <FacebookIcon size={40} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={`https://cineplanet-theater.web.app/watch/${movie?._id}`}
                    className=""
                  >
                    <TwitterIcon size={40} />
                  </TwitterShareButton>
                  <WhatsappShareButton
                    url={`https://cineplanet-theater.web.app/watch/${movie?._id}`}
                    className=""
                  >
                    <WhatsappIcon size={40} />
                  </WhatsappShareButton>
                  <EmailShareButton
                    url={`https://cineplanet-theater.web.app/watch/${movie?._id}`}
                    className=""
                  >
                    <EmailIcon size={40} />
                  </EmailShareButton>
                  <TelegramShareButton
                    url={`https://cineplanet-theater.web.app/watch/${movie?._id}`}
                    className=""
                  >
                    <TelegramIcon size={40} />
                  </TelegramShareButton>
                </div>
              </label>
            </label>
          </div>
          <div>
            <Review movie={movie} refetch={refetch} />
          </div>
        </>
      ))}
    </div>
  );
};

export default Watch;
