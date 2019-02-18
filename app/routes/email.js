const express = require('express');
const router  = express.Router();
const emailDomain = require('../domain/email');
const html = {
  code: `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">
      <title>Flippit baja</title>
      <style>
          body {
              width: 100%;
              text-align: center;
              font-family: 'Work Sans', sans-serif;
              color: #4A4A4A;
          }
  
          h2 {
              margin-top: 50px;
              font-size: 30px;
          }
          svg{
              cursor: pointer;
              width: 280px;
          }
      </style>
  </head>
  
  <body>
      <h2>Has sido dado de baja de FLIPPIT</h2>
      <?xml version="1.0" encoding="UTF-8"?>
      <a href="https://flippitco.com">
          <svg class="animated infinite pulse delay-2s" width="376px" height="377px" viewBox="0 0 376 377" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
              <title>Flippit</title>
              <defs>
                  <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="linearGradient-1">
                      <stop stop-color="#808080" stop-opacity="0.25" offset="0%"></stop>
                      <stop stop-color="#808080" stop-opacity="0.12" offset="54%"></stop>
                      <stop stop-color="#808080" stop-opacity="0.1" offset="100%"></stop>
                  </linearGradient>
              </defs>
              <g id="04_Landing" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Landing-0003-Error-envío-de-datos" transform="translate(-874.000000, -120.000000)">
                      <g id="ilustración" transform="translate(874.000000, 107.000000)">
                          <ellipse id="Oval" fill="url(#linearGradient-1)" fill-rule="nonzero" cx="188.014925" cy="201.6" rx="187.844113"
                              ry="188"></ellipse>
                          <ellipse id="Oval" fill="#3572FF" fill-rule="nonzero" cx="187.215589" cy="202.4" rx="183.048093" ry="183.2"></ellipse>
                          <path d="M145.534161,190.238025 C147.439394,188.847625 148.68745,186.949248 149.278329,184.542897 C150.773411,156.156394 174.244867,133.6 202.980284,133.6 C232.680829,133.6 256.757877,157.69703 256.757877,187.422222 C256.757877,215.750789 234.890177,238.967643 207.127529,241.086774 C204.04687,242.159125 201.532963,243.912123 199.585809,246.34577 C193.130412,261.431264 178.161643,272 160.72646,272 C137.390318,272 118.472637,253.06662 118.472637,229.711111 C118.472637,211.715235 129.704072,196.344778 145.534161,190.238025 Z"
                              id="Combined-Shape" stroke="#FFFFFF" stroke-width="24.576"></path>
                      </g>
                  </g>
              </g>
          </svg>
      </a>
  </body>
  
  </html>`
}
const _create = async (req, res, next) => {
  try {
    const response = await emailDomain.create(req.body);
    res.send({ data: response, status: 200 });
  } catch (error) {
    next(error);
  }
};
router.post('/', _create);

const _sendEmail = async (req, res, next) => {
  try {
    const response = await emailDomain.sendEmail(req.body);
    res.send({ data: response, status: 200 });
  } catch (error) {
    next(error);
  }
};
router.post('/send', _sendEmail);

const _unsubscribe = async (req, res, next) => {
  try {
    await emailDomain.unsubscribe(req.query);
    res.send(html.code);
  } catch (error) {
    next(error);
  }
};
router.get('/unsubscribe', _unsubscribe);

module.exports = router;