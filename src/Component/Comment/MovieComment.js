import React from "react";
import { BiUserCircle } from "react-icons/bi";

const MovieComment = ({ comment, name, time }) => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <BiUserCircle className="w-10 h-10" />
          </div>
        </div>
        <div className="chat-header">
          {name}
          <time className="text-xs opacity-50">
            {new Date(time).toLocaleTimeString()}
          </time>
        </div>
        <div className="chat-bubble">{comment}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};

export default MovieComment;