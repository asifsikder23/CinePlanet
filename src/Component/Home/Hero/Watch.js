import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const Watch = () => {
  const params = useParams();
  const id = params.id;
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(id);

  useEffect(() => {
    setLoading(true);
    fetch(`https://cineplanet-server.vercel.app/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
        setLoading(false);
      });
  }, [id]);
  console.log(details);
  return (
    <div>
      <div className="container mx-auto flex flex-wrap ">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <article className="flex flex-col shadow w-full">
            {details?.map((movie) => (
              <div>
                <div className="flex justify-center">
                <ReactPlayer
                  controls
                  playing
                  volume
                  playIcon
                  playbackRate
                  fallback
                  url={movie?.video}
                />
                </div>
                <div className="flex flex-col justify-start p-6">
                  <p className="text-blue-700 text-sm font-bold uppercase pb-4">
                    {movie?.category}
                  </p>
                  <p className="text-3xl font-bold hover:text-red-600 pb-4">
                    {movie?.name}
                  </p>
                  <p className="text-sm pb-8">
                  Directed By{" "}
                    <span className="font-semibold hover:text-red-600">
                      {movie?.Director}
                    </span>
                    , Published on {movie?.year}
                  </p>

                  <p className="pb-3">{movie?.desc}</p>
                </div>
              </div>
            ))}
          </article>
        </section>
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <div className="w-full shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <p className="pb-2">
            A film – also called a movie, motion picture, moving picture, picture, photoplay or flick – is a work of visual art that simulates experiences and otherwise communicates ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images.
            </p>
            <a
              href="/about"
              className="w-full bg-red-800 text-white font-bold text-sm uppercase rounded hover:bg-red-600 flex items-center justify-center px-2 py-3 mt-4"
            >
              Get to know us
            </a>
          </div>

          <div className="w-full shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Instagram</p>
            <div className="grid grid-cols-3 gap-3">
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
                alt=""
              />
            </div>
            <a
              href="/"
              className="w-full bg-red-800 text-white font-bold text-sm uppercase rounded hover:bg-red-600 flex items-center justify-center px-2 py-3 mt-6"
            >
              <i className="fab fa-instagram mr-2"></i> Follow ScheduPlannr
            </a>
          </div>
        </aside>
      </div>

      {details.gallery?.map((galleries, index) => (
        <img src={galleries} alt="" className="" key={index} />
      ))}
    </div>
  );
};

export default Watch;
