import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="h-auto bg-gray-800 w-full">
      <div className="h-screen w-full flex flex-col ">
        <div className="h-16 w-5/6 mt-10 mx-auto flex items-center">
          <img src="./assets/megumin.jpg" className="w-auto h-full" alt="" />
          <p className="text-4xl text-center w-full">Hanashi</p>
        </div>
        <div className="h-48 w-5/6 mt-10 mx-auto flex-col items-center justify-center">
          <p className="font-medium opacity-80 text-sm">Navigation</p>
          <Link to="login">
            <p className="font-normal text-2xl opacity-90 leading-loose tracking-thight">
              Profile
            </p>{" "}
          </Link>
          <p className="font-normal text-2xl opacity-90 leading-loose tracking-thight">
            Chat
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
