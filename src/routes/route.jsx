import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../components/Layouts/HomeLayout";
import Errorpage from "../components/Errorpage";
import Home from "../components/Home";
import Work from "../components/Work";
import About from "../components/About";
import Contact from "../components/Contact";

const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement: <Errorpage></Errorpage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "work",
            element: <Work></Work>,
        },
        {
            path: "about",
            element: <About></About>,
        },
        {
            path: "contact",
            element: <Contact></Contact>,
        },
      ]
    },
  ]);

export default route;