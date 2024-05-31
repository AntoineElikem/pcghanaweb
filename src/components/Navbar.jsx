// Navbar.jsx
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo_long_pcghanaweb.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <img src={logo} alt="Logo" className="w-13  z-20 relative -mt-10" />
      <HiMenuAlt3
        onClick={handleNav}
        className="z-20 text-white cursor-pointer -mt-10"
        size={25}
      />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-[#173B6B]/90 py-7 px-4 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-4 cursor-pointer hover:text-gray-500">
            <Link to="/" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="font-bold text-3xl p-4 cursor-pointer hover:text-gray-500">
            <Link to="/blog" onClick={handleNav}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
