import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { restrautList } from "./utils/constants";

//Config Driven UI

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)

const Footer = () => {
  return <h4></h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body restrautList={restrautList} />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
