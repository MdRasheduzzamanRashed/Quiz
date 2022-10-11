import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="px-3 flex justify-between items-center h-12 text-white bg-slate-400">
      <div>
        <h3 className="text-2xl font-medium">Know Your Programming Knowledge</h3>
      </div>
      <div>
        <NavLink className='px-3 py-1 font-medium' to="/">Home</NavLink>
        <NavLink className='px-3 py-1 font-medium' to="/statistics">Statistics</NavLink>
        <NavLink className='px-3 py-1 font-medium' to="/blog">Blog</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
