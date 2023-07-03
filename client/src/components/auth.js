import axios from "axios";

const api_url = "/api/v1/accounts/";

const authCheck = async () => {
  const auth = await axios.get(api_url + "profile", {
    headers: {
      authorization: `Bearer ${localStorage.getItem("kitappToken")}`,
    },
  });
  console.log(auth);
};
