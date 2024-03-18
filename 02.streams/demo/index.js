const events = require('events');

const publisher = new events.EventEmitter();

function raiseEvents() {
    publisher.emit('ping', 'Hello world!');
    publisher.emit('ping', 'Hello again');
    publisher.emit('pong', 5, 8);
}

module.exports = {
    raiseEvents,
    publisher
};