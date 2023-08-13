import React from "react";
import ReactDom from "react-dom/client";

// React Element -> Object
const ele = React.createElement("h1", { id: "h1tag" }, "I'm a h1 tag");
//jsx: html alike syntax
//JSX is transpiled into JS before it reaches JS engine(browser)
// Parcel does this transpilation by Babel
// JSX converted to React element(object) which inturn converts to html element
// Babel is JS compiler
const jsxHeading = <h1 className="h1"> this is from jsx h1</h1>;

const Title = () => {
  return (
    <>
      <h1 className="h1" tabIndex={2}>
        this is from title
      </h1>
    </>
  );
};

const FunctionalComponent = () => {
  return (
    <>
      <h1 className="h1" tabIndex={2}>
        this is from functional component
      </h1>
      {jsxHeading}
      <Title />
      {Title()}
      {/**writing JS inside JSX */}
      {console.log(jsxHeading)}
      {100 + 200 * 56}
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

//ReactDOM converts the react element into html element and replace the content of root with react element
root.render(<FunctionalComponent />);
