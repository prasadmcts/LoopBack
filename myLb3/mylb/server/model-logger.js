const { logger } = require("./logger");

const extendModel = function (app) {
    const { Employer } = app.models;
    Employer.logger = logger;
};
  
module.exports.modelLogger = extendModel;
