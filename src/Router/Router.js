import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MovieInfo from "../Component/Home/Hero/MovieInfo";
import Watch from "../Component/Home/Hero/Watch";
import Home from "../Component/Home/Home";
import About from "../Component/Pages/About/About";
import Contact from "../Component/Pages/Contact/Contact";
import Main from "../Layout/Main";
import FavoriteList from "../Shared/Favorite/FavoriteList";
import SignIn from "../Shared/SignIn/SignIn";
import SignUp from "../Shared/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/watch/:id",
        element: <Watch/>,
      },
      {
        path: "/watchMovie/:id",
        element: <MovieInfo/>,
      },
      {
        path: "/favorite",
        element: <FavoriteList/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/signUp",
        element: <SignUp/>
      },
      {
        path: "/signIn",
        element: <SignIn/>
      },
    ],
  },
]);

export default router;
