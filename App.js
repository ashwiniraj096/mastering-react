import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { class: "heading" }, "h1 tag"),
    React.createElement("h1", { class: "heading" }, "hhhhhhhh1 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { class: "heading" }, "h1 tag"),
    React.createElement("h1", { class: "heading" }, "h1 tag"),
  ]),
]);

const h1heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// React.createElement returns an Object
// this Object is converted to element by "render"
