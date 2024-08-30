import { useState } from "react";
const active = "bg-blue-600 text-white";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="bg-white h-24 py-5 px-5 flex items-center justify-between w-full transition-[top] duration-500 border">
      <div className="logo border">
        <img src={"/logo.svg"} alt="header-logo" width="150" height="50" />
      </div>
      kkk
    </header>
  );
};

export default Header;
