const events = require('./events.js');

events.on('save', (payload) => logIt('save', payload));
events.on('update', (payload) => logIt('update', payload));
events.on('delete', (payload) => logIt('delete', payload));

function logIt(event, payload) {
  const time = new Date();
  console.log({ event, time, payload });
}
