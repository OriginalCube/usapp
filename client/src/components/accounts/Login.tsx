import React from "react";
import LoginFormat from "./LoginFormat";
import RegisterFormat from "./RegisterFormat";

const Login = () => {
  const [hasAccount, setHasAccount] = React.useState(true);
  const [registerInput, setRegisterInput] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    number: "",
    birthday: "",
  });
  const [loginInput, setLoginInput] = React.useState({
    username: "",
    password: "",
  });

  const onChangeRegister = (e: any, ev: string) => {
    setRegisterInput({ ...registerInput, [ev]: e.target.value });
  };

  const onChangeLogin = (e: any, ev: string) => {
    setLoginInput({ ...loginInput, [ev]: e.target.value });
  };

  return (
    <div className="h-auto w-full">
      <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
        <div className="w-2/3 h-4/6  shadow-xl border-4 border-gray-800 m-auto flex rounded-xl overflow-hidden">
          <div className="w-4/6 h-full">
            {hasAccount ? (
              <LoginFormat
                onChangeLogin={onChangeLogin}
                loginInput={loginInput}
              />
            ) : (
              <RegisterFormat
                onChangeRegister={onChangeRegister}
                registerInput={registerInput}
              />
            )}
          </div>
          <div className="w-2/6 h-full bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
