// requirements
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
connect();

setupInput();

// moved const connect, handleUserInput, and handleUserInput out to client.js and input.js

