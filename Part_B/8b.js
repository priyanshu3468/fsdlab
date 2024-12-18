const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define an event listener function
const greetListener = (name) => {
  console.log(`Hello, ${name}!`);
};
// Add the event listener for the 'greet' event
eventEmitter.on('greet', greetListener);
// Emit the 'greet' event
eventEmitter.emit('greet', 'Priyanshu'); // Output: Hello, Aditya!

// Remove the event listener for the 'greet' event
eventEmitter.removeListener('greet', greetListener);
// Emit the 'greet' event again (no output since listener is removed)
eventEmitter.emit('greet','Priyanshu');