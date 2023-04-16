var url = 'http://mylogger.io';
function log(message)
{
    //send a http message
    console.log(message);
}

module.exports.log = log;
