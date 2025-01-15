import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center p-4 bg-white shadow-md rounded-b-lg fixed w-full top-0 z-50">
      <ul className="flex gap-6 text-lg font-semibold">
        <li>
          <a href="#" className="hover:text-blue-500">
            Beranda
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Data Story
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
