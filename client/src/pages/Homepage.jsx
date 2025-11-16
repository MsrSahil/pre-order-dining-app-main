import React from "react";
import { Link } from "react-router-dom";
import Heroimg from "../assets/heroimg1.jpg";

const Homepage = () => {
  return (
    <>
      <section className="relative w-full h-screen">
        <img
          className="w-full h-full object-cover object-center"
          src={Heroimg}
          alt="heroimg"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/60 backdrop-blur-sm"></div>

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-3xl text-center text-slate-100">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Pre-Order Dining — Skip the Line, Savor the Moment
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-6">
              Browse local restaurants, pre-order your meal, and pick up hot food
              without waiting. Ideal for busy schedules, group orders, and
              contactless pickup.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Link
                to="/restaurant"
                className="bg-amber-300 text-slate-900 px-6 py-3 rounded-md font-semibold shadow-md hover:bg-amber-400 transition"
              >
                Browse Restaurants
              </Link>

              <Link
                to="/about"
                className="border border-slate-200/30 text-slate-100 px-5 py-3 rounded-md hover:bg-slate-800/40 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
