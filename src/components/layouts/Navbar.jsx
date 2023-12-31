import Logo from "../../assets/Spices.png";
import { Link } from "react-router-dom";
import Button from "../elements/button/Button";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={"fixed top-0 w-full z-20 bg-slate-950"}>
      <nav className=" flex w-full py-2 md:py-3 px-4 md:px-20 justify-between items-center text-white font-bold ">
        <Link
          to={"/"}
          className="flex items-center justify-center cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          <img
            src={Logo}
            alt="logo"
            className="hidden md:block w-8 h-8 lg:w-10 lg:h-10 mr-2"
          />
          SPICES
        </Link>
        <ul className="hidden md:flex text-white gap-6 ">
          <li>
            <Link
              to="/"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Home
            </Link>
          </li>
          <li>
            <a href="#recipes">Explore</a>
          </li>
        </ul>
        <Button
          classname="block md:hidden text-white text-xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </Button>
      </nav>
      <div
        className={`${
          open ? "flex" : "hidden"
        } bg-transparent flex flex-col py-4 text-white gap-6 text-[14px] border-t-2 font-semibold`}
      >
        <Link to="/" className="w-full flex items-center justify-center">
          Home
        </Link>
        <Link
          to="/#recipes"
          className="w-full flex items-center justify-center"
        >
          Explore
        </Link>
        <Link
          to="/#favorites"
          className="w-full flex items-center justify-center"
        >
          Favorites
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
