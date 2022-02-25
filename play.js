// requirements
const { connect } = require('./client');
const net = require("net");

console.log("Connecting ...");

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function(command) {
    if(command === '\u0003') {
      process.exit();
    } else {
      conn.write(command)
    }
  };
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
};

setupInput(connect());;
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

