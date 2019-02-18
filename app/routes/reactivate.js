const express  = require('express');
const router   = express.Router();

const _reactivate = (req, res, next) => {
  res.send({ data: 'ok', status: 200 });
};

router.get('/', _reactivate);

module.exports = router;