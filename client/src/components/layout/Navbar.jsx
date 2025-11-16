import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    
      <div className="h-16 bg-amber-600 flex justify-between items-center px-4 fixed top-0 left-0 w-full z-50  ">
        <div>
          <Link
            to="/"
            className="text-white text-xl font-bold flex items-center h-full"
          >
            Pre-Order Dining
          </Link>
        </div>
       <div className="flex justify-center">
         <Link
          to="/about"
          className="text-white text-xl font-bold ml-4 flex items-center h-full"
        >
          About
        </Link>
        <Link
          to="/restaurant"
          className="text-white text-xl font-bold ml-4 flex items-center h-full"
        >
          Restaurant
        </Link>
        <Link
          to="login"
          className="text-white text-xl font-bold ml-4 flex items-center h-full"
        >
          Login
        </Link>
       </div>
      </div>
    </>
  );
};
export default Navbar;
