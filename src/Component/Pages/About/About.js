import React from "react";
import Head from "./Head";

const About = () => {
  return (
    <div>
      <Head title={"About Us"} />
      <div className="px-4 py-10 lg:py-20">
        <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          <div className="mt-10 lg:mt-0 hidden lg:flex">
            <img
              src="https://i.ibb.co/YtDnbgy/about2.jpg"
              alt=""
              className="w-full h-max rounded-lg object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
              Welcome To Our CinePlanet
            </h3>
            <div className="mt-3 text-sm leading-8 text-white">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-8 bg-slate-900 rounded-lg">
                <span className="text-3xl block font-extrabold">10K</span>
                <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                <p className="mb-0 text-white leading-7 text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="p-8 bg-slate-900 rounded-lg">
                <span className="text-3xl block font-extrabold">8K</span>
                <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                <p className="mb-0 text-white leading-7 text-sm">
                  Completely free, without registration! Lorem is Simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
