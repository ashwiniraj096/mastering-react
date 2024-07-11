import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

// Composing Comopnentss
const Title = () => (
  <h1 className="text-[35px] font-bold font-mono ">
    <span className="text-yellow-700">R</span>
    <span className="text-red-800">aa</span>
    <span className="text-purple-900">b</span>'
    <span className="text-orange-700">s</span>
  </h1>
);

const Header = () => {
  const [loginText, setLoginText] = useState(true);
  return (
    <div className="header flex justify-between m-4 items-center bg-white border-solid border-white border-2">
      <Title />
      <div className="nav-items">
        <ul className="flex p-4">
          <li className="px-2 underline font-semibold text-black-500 hover:text-yellow-600 text-base">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-2 underline font-semibold text-black-500 hover:text-yellow-600 text-base">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2 underline font-semibold text-black-500 hover:text-yellow-600 text-base">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 underline font-semibold text-black-500 hover:text-yellow-600 text-base">
            Cart
          </li>
          <button
            className="login px-2 underline font-semibold text-black-500 hover:text-yellow-600 text-base"
            onClick={() => setLoginText(!loginText)}
          >
            {loginText ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
