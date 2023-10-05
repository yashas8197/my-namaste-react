import Header from "./component/Header";
import Body from "./component/Body";
import React from "react";
import ReactDOM from "react-dom/client";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  <Error />,
]);

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(<RouterProvider router={appRouter} />);
