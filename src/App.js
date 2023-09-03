import Header from "./component/Header";
import Body from "./component/Body";
import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(<AppLayout />);
