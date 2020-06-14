const events = require('./events.js');

events.on('save', handleSave);

function handleSave(payload) {
  console.log(`record ${payload.id} was saved`);
}
