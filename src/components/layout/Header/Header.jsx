import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/authContext";
import Icons from "../../../UI/Icons/Icons";
import ICONTYPES from "../../../UI/Icons/types";

const navLinks = [
  {
    name: "Product Listing",
    path: "/product-listing",
  },
  {
    name: "Sign In",
    path: "/sign-in",
  },
  {
    name: "Sign Up",
    path: "/sign-up",
  },
];

const NavLinks = ({ className, close }) => {
  const { auth, clearAuthData } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <nav className={className}>
      {navLinks.map((link) => {
        if (
          auth.email &&
          (link.path === "/sign-in" || link.path === "/sign-up")
        ) {
          return;
        } else if (link.path == "/product-listing") {
          return;
        }
        return (
          <Link
            key={link.name}
            to={link.path}
            className={`p-4 text-xl ${
              pathname === link.path ? "text-blue-500" : "text-black"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
      {auth.email && (
        <button
          onClick={() => {
            clearAuthData();
            navigate("/sign-in");
          }}
          className="p-4 text-xl hover:text-blue-500"
        >
          Logout
        </button>
      )}
      <button
        onClick={() => close(false)}
        className="absolute top-4 right-4 md:hidden"
      >
        <Icons type={ICONTYPES.CLOSE} />
      </button>
    </nav>
  );
};
const Header = () => {
  const { setAuthData } = useContext(AuthContext);
  const [showNav, setShowNav] = useState(false);

  // useEffect(() => {
  //   let auth = JSON.parse(localStorage.getItem("auth"));
  //   if (auth) setAuthData(auth.email, auth.token);
  // }, []);

  return (
    <header className="bg-white h-24 py-5 px-5 flex items-center justify-between w-full transition-[top] duration-500 ">
      <div className="logo ">
        <img src={"/logo.svg"} alt="header-logo" width="150" height="50" />
      </div>
      <NavLinks
        key={"desktop"}
        close={setShowNav}
        className="hidden gap-5 *:p-3 md:flex"
      />
      <button className="md:hidden" onClick={() => setShowNav(true)}>
        {<Icons type={ICONTYPES.MENU} />}
      </button>
      {showNav && (
        <NavLinks
          close={setShowNav}
          key={"mobile"}
          className={`p-5 absolute top-0 right-0 bg-white h-screen w-full max-w-80 flex flex-col border z-50 items-center justify-center md:scale-0 `}
        />
      )}
    </header>
  );
};

export default Header;
