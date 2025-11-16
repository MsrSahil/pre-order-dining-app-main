import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    
      <div className="h-16 bg-slate-900/30 backdrop-blur-sm border-b border-slate-800/20 flex justify-between items-center px-4 fixed top-0 left-0 w-full z-50">
        <div>
          <Link
            to="/"
            className="text-slate-100 text-xl font-bold flex items-center h-full"
          >
            Pre-Order Dining
          </Link>
        </div>
       <div className="flex justify-center">
         <Link
          to="/about"
          className="text-slate-100 text-xl font-bold ml-4 flex items-center h-full hover:text-amber-300 transition-colors"
        >
          About
        </Link>
        <Link
          to="/restaurant"
          className="text-slate-100 text-xl font-bold ml-4 flex items-center h-full hover:text-amber-300 transition-colors"
        >
          Restaurant
        </Link>
        <Link
          to="/login"
          className="text-slate-100 text-xl font-bold ml-4 flex items-center h-full hover:text-amber-300 transition-colors"
        >
          Login
        </Link>
       </div>
      </div>
    </>
  );
};
export default Navbar;
