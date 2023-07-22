import Logo from "../../assets/Spices.png";
import { Link } from "react-router-dom";
import Button from "../elements/button/Button";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header
      className={`w-full fixed z-20  bg-black ${visible ? "top-0" : ""}`}
    >
      <nav className=" flex w-full py-2 md:py-3 px-4 md:px-20 justify-between items-center text-white  ">
        <Link
          to={"/"}
          className="flex items-center justify-center cursor-pointer"
        >
          <img
            src={Logo}
            alt="logo"
            className="hidden md:block w-8 h-8 lg:w-10 lg:h-10 mr-2"
          />
          SPICES
        </Link>
        <ul className="hidden md:flex text-white gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#explore">Explore</Link>
          </li>
          <li>
            <Link to="/#favorites">Favorites</Link>
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
        } bg-transparent flex flex-col py-4 text-white gap-6 text-[14px] border-t-2`}
      >
        <Link to="/" className="w-full flex items-center justify-center">
          Home
        </Link>
        <Link
          to="/#explore"
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
