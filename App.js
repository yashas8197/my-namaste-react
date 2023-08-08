import React from "react";
import ReactDOM from "react-dom/client";

// Create a parent React element with an 'id' attribute of 'parent'
const parent = React.createElement("div", { id: "parent" }, [
  // Create a child div with an 'id' attribute of 'child'
  React.createElement("div", { id: "child" }, [
    // Create an 'h1' element with the text "I'm a h1 tag"
    React.createElement("h1", {}, "This is namaste React"),
    // Create an 'h2' element with the text "i'm a h2 tag"
    React.createElement("h2", {}, "by Akshay saini"),
  ]),
  // Create another child div with an 'id' attribute of 'child2'
  React.createElement("div", { id: "child2" }, [
    // Create an 'h1' element with the text "I'm a h1 tag"
    React.createElement("h1", {}, "I'm a h1 tag"),
    // Create an 'h2' element with the text "i'm a h2 tag"
    React.createElement("h2", {}, "i'm a h2 tag"),
  ]),
]);

// Find the container element in the HTML and create a React root to render the components
const root = ReactDOM.createRoot(document.getElementById("container"));

// Render the parent element using the React root
root.render(parent);
