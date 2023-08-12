import React from "react";
import ReactDom from "react-dom/client";

const ele = React.createElement("div", "I'm a h1 tag");

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<h1>Im h1 element</h1>);
