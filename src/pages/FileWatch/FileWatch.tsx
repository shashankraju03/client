import { useState } from "react";
import { io } from "socket.io-client";

export const FileWatch = () => {
  const [fileData, setFileData] = useState("");
  const socket = io(process.env.REACT_APP_WEB_SOCKET_HOST, {
    transports: ["websocket"], // Use WebSocket transport explicitly
    reconnectionAttempts: 5, // Retry connection 5 times
    timeout: 20000, // Set connection timeout to 20 seconds
  });

  // Listen for connection
  socket.on("connect", () => {
    console.log("Connected to WebSocket server:", socket.id);
  });

  // Listen for an event from the server
  socket.on("file-changes", (data) => {
    console.log("Received data:", data);
    setFileData(data);
  });

  // Handle connection errors
  socket.on("connect_error", (err) => {
    console.error("Connection error:", err.message);
  });

  // Listen for disconnect
  socket.on("disconnect", () => {
    console.log("Disconnected from WebSocket server");
  });

  return (
    <>
      <div>File Watch</div>
      <div>{fileData}</div>
    </>
  );
};
