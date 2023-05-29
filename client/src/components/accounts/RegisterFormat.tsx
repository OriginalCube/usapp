import React from "react";

const RegisterFormat = (props: any) => {
  const formSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-full flex items-center justify-center text-black font-normal">
      <form onSubmit={formSubmit} className="w-5/6 h-5/6 flex-col">
        <div className="h-1/5 w-full flex justify-evenly gap-2 items-center ">
          <input
            onChange={(e) => props.onChangeRegister(e, "firstname")}
            value={props.registerInput.firstname}
            className="w-5/6 p-2 h-3/6 outline-none border-2 border-gray-500 shadow-md"
            placeholder="First Name"
            type="text"
          />
          <input
            onChange={(e) => props.onChangeRegister(e, "lastname")}
            value={props.registerInput.lastname}
            className="w-5/6 p-2 h-3/6 outline-none border-2 border-gray-500 shadow-md"
            placeholder="Last Name"
            type="text"
          />
        </div>
        <div className="h-1/5 w-full flex justify-evenly gap-2 items-center ">
          <input
            onChange={(e) => props.onChangeRegister(e, "username")}
            value={props.registerInput.username}
            className="w-5/6 p-2 h-3/6 outline-none border-2 border-gray-500 shadow-md"
            placeholder="Username"
            type="text"
          />
          <input
            onChange={(e) => props.onChangeRegister(e, "password")}
            value={props.registerInput.password}
            className="w-5/6 p-2 h-3/6 outline-none border-2 border-gray-500 shadow-md"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="h-1/5 w-full flex justify-center items-center">
          <input
            onChange={(e) => props.onChangeRegister(e, "email")}
            value={props.registerInput.email}
            className="w-full p-2 h-3/6 outline-none border-2 border-gray-500 shadow-md"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="h-1/5 w-full flex justify-evenly gap-2 items-center ">
          <input
            onChange={(e) => props.onChangeRegister(e, "number")}
            value={props.registerInput.number}
            className="w-5/6 p-2 h-3/6 outline-none border-2 border-gray-500 shadow-md"
            placeholder="Phone Number"
            type="number"
          />
          <input
            onChange={(e) => props.onChangeRegister(e, "birthday")}
            value={props.registerInput.birthday}
            className="w-5/6 p-2 h-3/6 outline-none border-2 border-gray-500 shadow-md"
            placeholder="Birthday"
            type="date"
          />
        </div>
        <div className="h-1/6 w-full flex justify-center items-center">
          <button
            className="p-4 w-1/3 text-center shadow-md font-semibold m-auto text-gray-700
           rounded-md border-2 border-gray-500 hover:text-gray-200 hover:bg-gray-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterFormat;
