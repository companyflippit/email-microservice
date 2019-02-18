const cors            = require('cors');
const { corsOptions } = require('../config/corsOptions');
const email           = require('./email');
const reactivate      = require('./reactivate');
const _assignRoutes = (app) => {
  app.use(cors(corsOptions));
  app.use('/api/email', email);
  app.use('/api/reactivate', reactivate);
}

module.exports = {
  assignRoutes: _assignRoutes
}