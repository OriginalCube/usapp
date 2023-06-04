import React from "react";
import axios from "axios";

const Main = () => {
  const api_url = "/api/v1/accounts/";

  const getProfile = async () => {
    const profileData = await axios.get(api_url + "profile", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("usappToken")}`,
      },
    });
    console.log(profileData);
  };

  React.useEffect(() => {
    getProfile();
    console.log("hello");
    console.log(localStorage.getItem("usappToken"));
  }, []);
  return (
    <div className="w-full h-auto text-3xl">
      <p>MAIN</p>
    </div>
  );
};

export default Main;
