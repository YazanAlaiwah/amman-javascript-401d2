const events = require('./events.js');
require('./logger.js');
require('./dashboard.js');

events.emit('save', { id: 55 });
