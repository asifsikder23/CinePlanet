import React from 'react';
import { MdDelete } from 'react-icons/md';

const FavouriteListInfo = ({list, refetch}) => {
    const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://cineplanet-server.vercel.app/favorite/${list._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        alert("Successfully delete user");
      });
  };
    return (
        <>
            <tbody className="bg-black divide-y-gray-800 ">
            <tr>
              <th scope="col" className={`${Text}`}>
                <div className="w-12 p-1 bg-slate-900 border-border h-12 rounded overflow-hidden">
                  <img
                    src={list.posterImg}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </th>
              <th scope="col" className={`${Text} truncate text-center`}>
                {list.movieName}
              </th>
              <th scope="col" className={`${Text} text-center`}>
                {list.categoryName}
              </th>
              <th scope="col" className={`${Text} text-center`}>
                {list.duration}
              </th>
              <th scope="col" className={`${Text} text-center`}>
                {list.release}
              </th>
              <th scope="col" className={`${Text} flex justify-center`}>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 text-white flex-colo rounded w-10 h-10"
                > 
                 
                 <MdDelete className='w-6 h-6'/>
                 
                
                </button>
              </th>
            </tr>
            </tbody>
        </>
    );
};

export default FavouriteListInfo;