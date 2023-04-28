import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MovieInfo from "../Component/Home/Hero/MovieInfo";
import UploadMovies from "../Component/Home/Hero/UploadMovies";
import Watch from "../Component/Home/Hero/Watch";
import Home from "../Component/Home/Home";
import About from "../Component/Pages/About/About";
import Contact from "../Component/Pages/Contact/Contact";
import Main from "../Layout/Main";
import FavoriteList from "../Shared/Favorite/FavoriteList";
import SignIn from "../Shared/SignIn/SignIn";
import SignUp from "../Shared/SignUp/SignUp";
import MoviesLayout from "../Layout/MoviesLayout";
import Popular from "../Component/Pages/Movies/Popular";
import AllMovies from "../Component/Pages/Movies/AllMovies";
import TopViewed from "../Component/Pages/Movies/TopViewed";
import TopRated from "../Component/Pages/Movies/TopRated";
import UpcomingMovieUpload from "../Component/Home/Upcoming Movie/UpcomingMovieUpload";
import UpcomingMovieDetails from "../Component/Home/Upcoming Movie/UpcomingMovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watch/:id",
        element: <Watch />,
      },
      {
        path: "/watchMovie/:id",
        element: <MovieInfo />,
      },
      {
        path: "/upcoming/:id",
        element: <UpcomingMovieDetails />,
      },
      {
        path: "/upload",
        element: <UploadMovies />,
      },
      {
        path: "/uploadUpcoming",
        element: <UpcomingMovieUpload/>,
      },
      {
        path: "/favorite",
        element: <FavoriteList />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/movies",
    element: <MoviesLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/movies/allMovie",
        element: <AllMovies />,
      },
      {
        path: "/movies/popular",
        element: <Popular />,
      },
      {
        path: "/movies/topViewed",
        element: <TopViewed />,
      },
      {
        path: "/movies/topRated",
        element: <TopRated />,
      },
    ],
  },
]);

export default router;
