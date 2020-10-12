'use strict';

module.exports = function(Employer) {
    Employer.myGreet = function(msg, cb) {
        console.log(`i -  EMPR - received message: ${msg}`);
        // logger.info(`i -  EMPR - received message: ${msg}`);
        // logger.debug(`d -  EMPR - received message: ${msg}`);
        this.logger.info(`i -  EMPR - received message: ${msg}`);
        this.logger.debug(`d -  EMPR - received message: ${msg}`);
        Employer.logger.info(`i -  EMPR - received message: ${msg}`);
        Employer.logger.debug(`d -  EMPR - received message: ${msg}`);
        cb(null, 'Greetings... ' + msg);
    }
  
    Employer.greet = async function(msg) {
        return 'Greetings... ' + msg;
    }

    Employer.remoteMethod('myGreet', {
        accepts: {arg: 'msg', type: 'string'},
        returns: {arg: 'greeting', type: 'string'}
    });

    Employer.remoteMethod('greet', {
        accepts: {arg: 'msg', type: 'string'},
        returns: {arg: 'greeting', type: 'string'}
    });
};
