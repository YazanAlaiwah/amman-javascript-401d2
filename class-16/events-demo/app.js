const EventEmitter = require('events');
const events = new EventEmitter();

// Register to events (2)
events.on('save', handleSave);
events.on('update', (payload) => logIt('update', payload));
events.on('delete', (payload) => logIt('delete', payload));

// fire the event  (1)
events.emit('save', { id: 4 });
events.emit('update', { id: 5 });

// Action functions (3)
function handleSave(payload) {
  console.log(`Record ${payload.id} was saved`);
  events.emit('delete', payload);
}

function logIt(event, payload) {
  const time = new Date();
  console.log({ event, time, payload });
}
