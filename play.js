// requirements
const { connect } = require('./client');
const net = require("net");

console.log("Connecting ...");
connect();
/* moved the function below to client.js:
// connection with game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handles incoming data and console.logs it to the player
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};
*/