in model-logger.js

const { logger } = require("./logger");

const extendModel = function (app) {
    const { Employer } = app.models;
    Employer.logger = logger;
};
  
module.exports.modelLogger = extendModel;

==================================================

const { modelLogger } = require("./model-logger");

modelLogger(app);  // in app.start

==================================================

in respective shared models

this.logger.info(`i -  EMPR - received message: ${msg}`);
this.logger.debug(`d -  EMPR - received message: ${msg}`);
Employer.logger.info(`i -  EMPR - received message: ${msg}`);
Employer.logger.debug(`d -  EMPR - received message: ${msg}`);
