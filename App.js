import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML-like syntax but not HTML
//JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const heading = <h1 className="heading">Namaste React using JSX 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(heading);
