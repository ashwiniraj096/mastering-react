import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { ThemeContext, UserContext } from "../utils/contexts";

// Composing Comopnentss
const Title = () => (
  <h1 className="text-[45px] font-bold font-mono pl-8">
    <span className="text-purple-900">R</span>
    <span className="text-red-800">aa</span>
    <span className="text-yellow-600">b</span>'
    <span className="text-orange-700">s</span>
  </h1>
);

const navItems = [
  { Home: "/" },
  { About: "/about" },
  { Contact: "/contact" },
  { Cart: null },
];

const Header = () => {
  const [loginText, setLoginText] = useState(true);
  const { user, setUser } = useContext(UserContext);
  const theme = useContext(ThemeContext);
  // console.log(theme, "theme");

  return (
    <div className="header flex justify-between  items-center bg-white border-solid border-white border-2 shadow-xl shadow-gray-100 h-24">
      <Title />
      <div className="nav-items">
        <ul className="flex p-4">
          <li>
            {" "}
            <label htmlFor="input">Dark Theme</label>
            <input
              type="checkbox"
              checked={theme === "light"}
              onClick={(e) => {
                console.log(e.target.checked);
              }}
            />
          </li>
          {navItems.map((item, index) => (
            <li
              className="px-2 underline font-semibold text-black-500 hover:text-yellow-600 text-base"
              key={index}
            >
              <Link to={item[Object.keys(item)[0]]}>
                {Object.keys(item)[0]}
              </Link>
            </li>
          ))}

          <button
            className="login px-2 underline font-semibold text-black-500 hover:text-yellow-600 text-base"
            onClick={() => {
              setLoginText(!loginText);
              setUser({ name: "Chandan" });
            }}
          >
            {loginText ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
