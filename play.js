// requirements
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");

setupInput(connect());

// moved const connect, handleUserInput, and handleUserInput out to client.js and input.js

