import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="head">Namaste React 🚀</h1>;

const Title2 = function () {
  return <h2>heading using function keyword</h2>;
};

//function component
//component composition
const HeadingComponent = () => (
  <div id="containerOfH1">
    <Title />
    {Title()}
    <Title></Title>
    <h1 className="heading">Namaste React functional component</h1>
    <Title2 />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(<HeadingComponent />);
