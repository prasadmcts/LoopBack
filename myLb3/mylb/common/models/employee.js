'use strict';

const {logger} = require("../../server/logger");

module.exports = function(Employee) {
    Employee.myGreet = function(msg, cb) {
        logger.info(`i - received message ${msg}`);
        logger.debug(`d - received message ${msg}`);
        cb(null, 'Greetings... ' + msg);
    }
    Employee.remoteMethod('myGreet', {
        accepts: {arg: 'msg', type: 'string'},
        returns: {arg: 'greeting', type: 'string'}
    });

    // Employee.greet = async function(msg) {
    //     return 'Greetings... ' + msg;
    // }
    
    Employee.greet = async (msg) => 'Greetings... ' + msg;

    Employee.remoteMethod('greet', {
        accepts: {arg: 'msg', type: 'string'},
        returns: {arg: 'greeting', type: 'string'}
    });

};
