import React from "react";
import Heroimg from "../assets/heroimg.jpg";
const Homepage = () => {
  return (
    <>
      <div className="">
        <img className="w-full h-screen object-cover object-center" src={Heroimg} alt="heroimg" />
      </div>
    </>
  );
};

export default Homepage;
