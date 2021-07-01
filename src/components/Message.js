import { useEffect, useState } from "react";

const Message = ({ user }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      getMessage();
    }
  }, [user]);

  async function getMessage() {
    const response = await fetch("api/message");
    const responseJson = await response.json();
    setMessage(responseJson.message);
  }

  return <h1 className="is-size-1">{message}</h1>;
};

export default Message;
