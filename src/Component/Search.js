import React, { useEffect, useState } from "react";

const Search = () => {
  const [allMoviesSearch, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, setFilterVal] = useState("");

  useEffect(() => {
    fetch("https://cineplanet-server.vercel.app/allsearch")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setSearchApiData(res);
      });
  }, []);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData(searchApiData);
    } else {
      const filterSearch = searchApiData.filter((it) =>
        it?.name?.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(filterSearch);
    }
    setFilterVal(e.target.value);
  };

  return (
    <div>
      <div className="dropdown mx-8">
        <label tabIndex={0}>
          <input
            type="text"
            placeholder="Search"
            value={filterVal}
            onInput={(e) => handleFilter(e)}
            className="input lg:block w-40 lg:w-96 h-10 rounded-lg border-white bg-transparent"
          />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-slate-900 rounded-box w-52 lg:w-96 "
        >
          <li>
            {allMoviesSearch?.slice(0, 3).map((it) => {
              return (
                <a href={`/watch/${it._id}`} key={it._id}>
                  <div className="flex justify-between items-center w-full gap-5">
                    <div className="w-20 lg:w-40">
                      <img src={it.titleImg} alt="" className="w-40 h-20" />
                    </div>
                    <p className="text-left w-1/2">{it.name.toLowerCase()}</p>
                  </div>
                </a>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
