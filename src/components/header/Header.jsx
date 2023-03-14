import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../reusables/Button";

const Header = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "MY NOTES", link: "/mynotes" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex flex items-center justify-evenly bg-white py-4">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 duration-500">
          <span className="text-3xl text-pink-600 mr-1 pt-2">
            <ion-icon name="heart"></ion-icon>
          </span>
          <Link to="/">NotesStore</Link>
        </div>
        <form>
          <div class="md:w-64 px-4 w-32">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Search"
            />
          </div>
        </form>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static 
        bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 
        transition-all ease-in duration-500 ${
          open ? "top-20 opacity-100" : "top-[-490px] opacity-0 md:opacity-100"
        }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <Button>Ankit Ojha</Button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
