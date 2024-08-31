import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../../../context/authContext";
const Header = () => {
  const con = useContext(AuthContext);
  console.log(con, "con");
  const [showNav, setShowNav] = useState(false);
  const pathname = useLocation().pathname;
  return (
    <header className="bg-white h-24 py-5 px-5 flex items-center justify-between w-full transition-[top] duration-500 border">
      <div className="logo border">
        <img src={"/logo.svg"} alt="header-logo" width="150" height="50" />
      </div>
      <p>logged in as {con.auth.email}</p>
      <button>Logout</button>
    </header>
  );
};

export default Header;
// a@a.com eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGEuY29tIiwiZXhwIjoxNzI1MDQzNzE2NTY0LCJpYXQiOjE3MjUwNDAxMTZ9.nf0AlqT-31DcRHpWoDPQLiTovhMuaG9osrKnkroKlog
