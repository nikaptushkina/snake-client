// requirements
const net = require("net");
const { IP, PORT, NAME } = require("./constants");

// connection with game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // event triggered upon connection
  conn.on('connect', (connect) => {
    console.log('Successfully connected to game server');
  });

  // handles incoming data and console.logs it to the player
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // prints name to server & sends snake up (removed)
  conn.on('connect', () => {
    conn.write(`Name: ${NAME}`);
    /* conn.write('Move: up'); */
  });

  return conn;
};

// export
module.exports = { connect };