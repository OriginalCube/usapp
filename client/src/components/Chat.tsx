import React from "react";
import io from "socket.io-client";
import ChatBox from "./chat/ChatBox";

const socket = io("http://localhost:5000/");
const Chat = () => {
  const [roomCode, setRoomCode] = React.useState("");

  React.useEffect(() => {
    console.log(socket);
  }, []);

  const onJoin = () => {
    if (roomCode !== "") {
      socket.emit("join_room", roomCode);
    }
  };

  return (
    <div className="h-full w-full text-black flex items-center justify-center">
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
      <ChatBox socket={socket} username={"Mitzu"} room={roomCode} />
    </div>
  );
};

export default Chat;
