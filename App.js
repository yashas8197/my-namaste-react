import React from "react";
import ReactDOM from "react-dom/client";

// React.creatElement => Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log(heading);

// JSX - HTML-like syntax but not HTML

const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(jsxHeading);

// root.render(heading);
