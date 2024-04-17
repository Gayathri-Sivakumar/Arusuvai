import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import { FaUserAlt } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { BsCart4 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h6 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Link to={"/"}>
            <Logo h={50} w={90} />
          </Link>
        </div>
        <Search />

        <div className="flex item-center gap-5 p-4">
          <div className="text-3xl cursor-pointer relative flex justify-center">
            <FaRegUser />
          </div>
          <div className="text-3xl relative">
            <span>
              <BsCart4 />
            </span>
            <div className=" bg-green-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            <Link
              to={"/login"}
              className="px-3 bg-green-600 py-1 rounded-full hover:bg-green-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
