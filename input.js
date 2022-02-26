// requirements
const { UP, LEFT, RIGHT, DOWN, MESSAGE } = require('./constants');

// for TCP connection onject
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function(command) {
    if(command === '\u0003') {
      process.exit();
    } else if(command === UP) {
      conn.write('Move: up');
    } else if(command === LEFT) {
      conn.write('Move: left');
    } else if(command === DOWN) {
      conn.write('Move: down');
    } else if(command === RIGHT) {
      conn.write('Move: right');
    } else if(MESSAGE[command]) {
      conn.write(MESSAGE[command])
    }
  };
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
};

// export
module.exports = { setupInput };