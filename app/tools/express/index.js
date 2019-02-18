const express        = require('express');
const logger         = require('morgan');
const bodyParser     = require('body-parser');

const _setExpress = (app) => {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(__dirname + '/public'));
}

module.exports = {
  setExpress: _setExpress
} 