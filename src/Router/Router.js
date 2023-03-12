import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Watch from "../Component/Home/Hero/Watch";
import Home from "../Component/Home/Home";
import Main from "../Layout/Main";
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
