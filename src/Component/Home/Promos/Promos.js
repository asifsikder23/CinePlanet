import React from "react";
import { FiUser } from "react-icons/fi";
import img from "../../../Assets/mobile.png";

const Promos = () => {
  return (
    <div className="my-20 py-10 px-8 md:px-20 bg-slate-900">
      <div className="grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="flex gap-6 lg:gap-10 flex-col">
          <h1 className="text-xl lg:text-3xl capitalize font-sans font-medium lg:leading-relaxed">
            Download Your Movies Watch Offline <br /> Enjoy on Your Mobile
          </h1>
          <p className="text-white text-sm  leading-6 lg:leading-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            repudiandae, eaque nihil commodi repellendus consectetur
            exercitationem veniam eveniet nemo quis vitae sapiente illum dolorem
            voluptates nulla saepe expedita? Similique, ex? sapiente illum
            dolorem voluptates nulla saepe expedita....
          </p>
          <div className="flex gap-4 text-sm md:text-lg">
            <div className="flex-col bg-black text-red-600 px-6 py-3 rounded font-bold">
              HD 4K
            </div>
            <div className="flex items-center flex-row  gap-4 bg-black text-red-600 px-6 py-3 rounded font-bold">
              <FiUser /> 2K
            </div>
          </div>
        </div>
        <img src={img} alt="" className="w-full object-contain"/>
      </div>
    </div>
  );
};

export default Promos;
