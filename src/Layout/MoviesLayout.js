import React, { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GoEye } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { RiLoginCircleLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import logo from "../Assets/logo.png";
import { FaVideo } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import Hero from "../Component/Home/Hero/Hero";
import Search from "../Component/Search";
import MovieBanner from "./MovieBanner";
import FavoriteNotification from "../Shared/Favorite/FavoriteNotification";

const MoviesLayout = () => {
  const { user, logOut } = useContext(AuthContext);

  //   const [isAdmin] = useAdmin(user?.email);

  const signOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="flex justify-end py-5 mr-8">
        <Search />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pl-10 md:pl-36">
        <MovieBanner/>
      </div>
      <Outlet />
      <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 shadow-2xl h-full transition-all duration-300 border-none z-10 sidebar bg-red-900 text-white">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
              <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center ">
                    <img src={logo} className="" alt="" />
                  </div>
                </li>
                <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm tracking-wide text-Primary font-bold uppercase">
                      Movies
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent  hover:border-red-700 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <AiOutlineHome className="w-6 h-6" />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Home
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/movies/allMovie"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent  hover:border-red-700 pr-6 active"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaVideo size={"1.25rem"}></FaVideo>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      All Movies
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/movies/topRated"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent  hover:border-red-700 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <TbMovie size={"1.25rem"}></TbMovie>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Popular
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/movies/topViewed"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent  hover:border-red-700 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <GoEye size={"1.25rem"}></GoEye>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Top Viewed
                    </span>
                  </Link>
                </li>
              </ul>
              <div className="lg:flex justify-between">
                <div>
                  {user?.uid ? (
                    <>
                      <p className="mb-2">
                        <button
                          onClick={signOut}
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent  hover:border-red-700 pr-6"
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <FiLogOut className="w-6 h-6" />
                          </span>
                          <span className="ml-3 text-sm tracking-wide truncate">
                            Logout
                          </span>
                        </button>
                      </p>
                    </>
                  ) : (
                    <p className="mb-2">
                      <Link
                        to={"/signIn"}
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent  hover:border-red-700 pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <RiLoginCircleLine className="w-6 h-6" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Login
                        </span>
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MoviesLayout;
