import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

// Composing Comopnentss
const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={LOGO_URL} />
  </a>
);

const Header = () => {
  const [loginText, setLoginText] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>

          <li>
            <Link to={"contact"}>Contact</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={() => setLoginText(!loginText)}>
            {loginText ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
