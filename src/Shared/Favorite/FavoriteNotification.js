import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Context/UserContext";

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
            `https://cineplanet-server.vercel.app/favorite?email=${user?.email}`,
            {
              headers: {},
            }
          );
          const data = await res.json();
    
          refetch();
          return data;
        },
      });
      
  return (
    <div className="">
      <span className="indicator-item text-lg font-bold">{info.length}</span>
    </div>
  );
};

export default FavoriteNotification;
