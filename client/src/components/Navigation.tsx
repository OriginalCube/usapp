import React from "react";

const Navigation = () => {
  return (
    <div className="h-auto bg-gray-800 w-full">
      <div className="h-screen w-full flex flex-col ">
        <div className="h-16 w-5/6 mt-10 mx-auto flex items-center">
          <img src="./assets/megumin.jpg" className="w-auto h-full" alt="" />
          <p className="text-4xl text-center w-full">Hanashi</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
