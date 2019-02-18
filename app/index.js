const app               = require('express')();
const databaseTool      = require('./tools/database');
const expressTool       = require('./tools/express');
const routes            = require('./routes');
const errorTool         = require('./tools/error');
const herokuChroneTool  = require('./tools/herokuChrone');

databaseTool.dbConnectMongoose()
.then(() => {
    expressTool.setExpress(app);
    routes.assignRoutes(app);
    herokuChroneTool.activateChrone();
    errorTool.errorHandler(app);
  })
  .catch(error => console.error(error));

module.exports = app;