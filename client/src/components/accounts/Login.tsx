import React from "react";
import LoginFormat from "./LoginFormat";
import RegisterFormat from "./RegisterFormat";
import axios from "axios";

const Login = () => {
  const api_url = "/api/v1/accounts/";
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

  const onSubmit = async (e: string) => {
    if (e === "login") {
      const onLogin = await axios.post(api_url + "login", loginInput);
      try {
        localStorage.setItem("usappToken", onLogin.data.token);
      } catch (err) {
        console.log(err);
      }
    } else if (e === "register") {
      const onRegister = await axios.post(api_url + "login", registerInput);
      try {
        localStorage.setItem("usappToken", onRegister.data.token);
      } catch (err) {
        console.log(err);
      }
    }
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
                onSubmit={onSubmit}
              />
            ) : (
              <RegisterFormat
                onChangeRegister={onChangeRegister}
                registerInput={registerInput}
                onSubmit={onSubmit}
              />
            )}
          </div>
          <div className="w-2/6 h-full bg-gray-800">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-5/6 h-5/6 flex-col">
                <div className="border-2 h-60 w-60 m-auto rounded-full overflow-hidden">
                  <img
                    src={`./assets/icons/${
                      hasAccount ? "register" : "login"
                    }.webp`}
                    className="w-full h-full"
                    alt=""
                  />
                </div>
                <div className="w-full h-1/2 mt-4">
                  <div className="h-full w-5/6 m-auto">
                    <p className="text-center text-2xl font-medium">
                      Welcome to UsApp!
                    </p>
                    <p className="pt-2 text-center text-base font-thin">
                      {hasAccount ? (
                        <span>
                          Don't have an account yet?
                          <br />
                          <span
                            onClick={() => setHasAccount(false)}
                            className="text-blue-400 hover:font-semibold hover:cursor-pointer"
                          >
                            Create now
                          </span>
                        </span>
                      ) : (
                        <span>
                          Already have an account?
                          <br />
                          <span
                            onClick={() => setHasAccount(true)}
                            className="text-blue-400 hover:font-semibold hover:cursor-pointer"
                          >
                            login now
                          </span>
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
