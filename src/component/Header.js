import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="bg-white p-2 md:p-4 lg:p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="logo-container">
          <img className="w-16 md:w-24" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex p-2 md:p-4 lg:p-6 space-x-4">
            <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>
            <button
              className="login-btn"
              onClick={() => {
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
              }}
            >
              {btnNameReact}
            </button>
          </ul>
          <button className="md:hidden">☰</button>{" "}
          {/* Mobile menu toggle button */}
        </div>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <ul className="block p-4 space-y-2">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
