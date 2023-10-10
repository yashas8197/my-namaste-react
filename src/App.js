import Header from "./component/Header";
import Body from "./component/Body";
import React from "react";
import ReactDOM from "react-dom/client";
import About from "./component/About";
import Contact from "./component/Contact";
import RestaurantMenu from "./component/RestaurantMenu";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },

  <Error />,
]);

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(<RouterProvider router={appRouter} />);
