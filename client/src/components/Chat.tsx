import React from "react";
import io from "socket.io-client";
import ChatBox from "./chat/ChatBox";
import axios from "axios";
import authCheck from "./auth";

const socket = io("http://localhost:5000/");
const Chat = (props: any) => {
  const api_url = "/api/v1/accounts/";
  const [roomCode, setRoomCode] = React.useState("");
  const [active, setActive] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState({
    username: "",
    picture: "",
  });

  const getDetails = async () => {
    const userDetail = await axios.get(api_url + "profile", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("kitappToken")}`,
      },
    });
    console.log(userDetail.data);
    setUserDetails(userDetail.data);
  };

  const asy = async () => {
    const data = await authCheck.authCheck();
    console.log(data);
  };

  React.useEffect(() => {
    console.log(socket);
    asy();
    getDetails();
  }, []);

  const onJoin = () => {
    if (roomCode !== "") {
      socket.emit("join_room", roomCode);
      setActive(true);
    }
  };

  return (
    <div className="h-full w-full text-black flex items-center justify-center">
      {!active ? (
        <div className="h-2/6 w-5/6 border-gray-800 shadow-md rounded-md border-2 flex items-center justify-center">
          <div className="w-1/2 h-3/6 flex-col">
            <p className="text-3xl font-light w-full text-center">
              Enter Room Code
            </p>
            <input
              className="border-2 border-gray-800 w-full p-4 mt-2 text-center"
              type="text"
              onChange={(e) => setRoomCode(e.target.value)}
              value={roomCode}
            />
            <button
              onClick={onJoin}
              className="border-2 border-gray-800 bg-gray-800 text-white rounded-md text-xl w-1/2 p-2 m-auto relative left-1/4 mt-4
          font-medium hover:text-gray-800 hover:bg-white "
            >
              Join
            </button>
          </div>
        </div>
      ) : (
        <ChatBox
          socket={socket}
          username={userDetails.username}
          room={roomCode}
          picture={userDetails.picture}
        />
      )}
    </div>
  );
};

export default Chat;
