import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="px-3 py-2 text-center md:flex justify-between w-full fixed top-0 items-center text-white bg-slate-400">
      <div>
        <h3 className="text-xl md:text-2xl font-medium">Programming Knowledge</h3>
      </div>
      <div className="mt-3 md:mt-0">
        <NavLink className='px-3 py-1 font-medium bg-white text-slate-700 mx-2 rounded-lg' to="/">Home</NavLink>
        <NavLink className='px-3 py-1 font-medium bg-white text-slate-700 mx-2 rounded-lg' to="/statistics">Statistics</NavLink>
        <NavLink className='px-3 py-1 font-medium bg-white text-slate-700 mx-2 rounded-lg' to="/blog">Blog</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
