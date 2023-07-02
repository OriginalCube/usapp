import React from "react";

const ChatBox = (props: any) => {
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState([]);
  const { room, username, socket, picture } = props;

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        picture: picture,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      messageList.push(messageData);
      setMessageList([...messageList]);
      setCurrentMessage("");
    }
  };

  React.useEffect(() => {
    console.log(messageList);
  }, [messageList]);

  React.useEffect(() => {
    socket.on("receive_message", (data: any) => {
      messageList.push(data);
      setMessageList([...messageList]);
    });
  }, [socket]);

  const MessageTemplate = () => {
    return <div className="w-full "></div>;
  };

  return (
    <div className="w-5/6 h-full flex-col">
      <div className="h-5/6">
        {messageList.length !== 0
          ? messageList.map((e, index) => <MessageTemplate />)
          : null}
      </div>
      <div className="h-16 w-full mt-8 shadow-xl border-gray-800 border-2 rounded-md flex items-center justify-center">
        <input
          type="text"
          style={{ width: "95%" }}
          className="h-5/6 p-4 text-xl outline-none"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <div
          style={{ width: "5%" }}
          className="h-3/5 flex items-center justify-center"
        >
          <img
            onClick={sendMessage}
            alt=""
            src="./assets/icons/paper-plane.png"
            className="h-full w-auto cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
