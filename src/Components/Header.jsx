import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
