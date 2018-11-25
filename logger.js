const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{

  logFunction(message){

    console.log(message);
    this.emit('messageLogged', {id: 1, url: 'http://www.google.com', param: 'various parameters'})
  
  }

}

module.exports = Logger;
