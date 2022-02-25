const { connect } = require("./client");

// setup interface to handle user input from stdin

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function(command) {
    if(command === '\u0003') {
      process.exit();
    } else if(command === 'w') {
      conn.write('Move: up');
    } else if(command === 'a') {
      conn.write('Move: left');
    } else if(command === 's') {
      conn.write('Move: down');
    } else if(command === 'd') {
      conn.write('Move: right');
    }
  };
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
};

// export
module.exports = { setupInput };