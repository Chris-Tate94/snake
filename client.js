const net = require("net");
const { IP, PORT } = require("./constants");
//establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("data", (data) => {
    console.log(`Server data: ${data}`);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: GO LEAFS GO");

    // setInterval(() => {
    //   conn.write("Move: left");
    // }, 100);
  });

  conn.on("end", () => {
    console.log("Disconnected");
  });

  conn.setEncoding("utf8");
  return conn;
};
module.exports = { connect };
