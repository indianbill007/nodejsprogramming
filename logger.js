const EventEmitter = require('events');

var url = 'http://mylogger.io';

class Logger extends EventEmitter{

    log(message)
    {
        //send a http message
        console.log(message);
    
        //Raise an event
    this.emit('messageLogged',{id:1,url:'http://testurl'});
    }
}


module.exports = Logger;
