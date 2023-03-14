import React, { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useQuery } from "react-query";
import { AuthContext } from "../../Context/UserContext";
import FavoriteList from "./FavoriteList";

const FavoriteNotification = () => {
    const { user } = useContext(AuthContext);
    const {
        data: info = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["info", user?.email],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:5000/favorite?email=${user?.email}`,
            {
              headers: {},
            }
          );
          const data = await res.json();
    
          refetch();
          return data;
        },
      });
      console.log(info);
  return (
    <div className="mr-5">
      <span className="indicator-item text-lg font-bold">{info.length}</span>
    </div>
  );
};

export default FavoriteNotification;
