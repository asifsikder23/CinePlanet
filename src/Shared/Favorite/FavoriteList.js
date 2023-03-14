import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Context/UserContext";
import FavouriteListInfo from "./FavouriteListInfo";

const FavoriteList = () => {
  const { user } = useContext(AuthContext);

  const { data: info = [], refetch } = useQuery({
    queryKey: ["info"],
    queryFn: async () => {
      const res = await fetch(
        `https://cineplanet-server.vercel.app/favorite?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(info);
  const Head =
    "text-xs text-left text-gray-800 font-semibold px-6 py-2 upperCase";
  
  return (
    <div>
      <div className="overflow-x-scroll overflow-hidden relative w-full">
        <table className="w-full table-auto border border-border divide-y divide-border ">
          <thead>
            <tr className="bg-white">
              <th scope="col" className={`${Head} text-center`}>
                Image
              </th>
              <th scope="col" className={`${Head} text-center`}>
                Movie Name
              </th>
              <th scope="col" className={`${Head} text-center`}>
                Category
              </th>
              <th scope="col" className={`${Head} text-center`}>
                Duration
              </th>
              <th scope="col" className={`${Head} text-center`}>
                Release Date
              </th>
              <th scope="col" className={`${Head}  text-center`}>
                Actions
              </th>
            </tr>
          </thead>
          
            {
              info?.map((list, index)=>(
                <FavouriteListInfo
                key={index}
                list={list}
                refetch={refetch}></FavouriteListInfo>
              ))
            }
          
        </table>
      </div>
    </div>
  );
};

export default FavoriteList;
