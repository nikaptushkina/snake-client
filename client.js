const net = require("net");

// connection with game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
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

  //prints name to server
  conn.on('connect', () => {
    conn.write('Name: NIK');
  });

  return conn;
};

// export
module.exports = {  connect };