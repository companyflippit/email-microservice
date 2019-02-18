const emailDb = require('../database/email');
const emailTool = require('../tools/email');
const emailConfig = require('../config/email');

const _sendEmail = async (body) => {
  if(!body.to || !body.subject || !body.html) {
    const error = new Error('Incorrect arguments!');
    error.status = 400;
    throw error;
  }
  if(!body.permission) {
    const error = new Error('You need to give permission to subscribe to this list!');
    error.status = 400;
    throw error;
  }
  const email = {
    from: emailConfig.gmail.auth.user,
    to: body.to, 
    subject: 'Welcome to Flippit',
    html: body.html
  };
  await emailTool.sendEmail(emailConfig.gmail, email);
  return 'OK';
};

const _create = async (body) => {
  if(!body.email || !body.landing) {
    const error = new Error('Incorrect arguments!');
    error.status = 400;
    throw error;
  }
  const emails = await emailDb.findOneByEmailAndLanding(body);
  if(emails.length !== 0 && emails[0].permission) {
    const error = new Error('This email is already in our database!');
    error.status = 403;
    throw error;
  }
  if(!body.permission) {
    const error = new Error('You need to give permission to subscribe to this list!');
    error.status = 400;
    throw error;
  }
  const html = require(`../public/mailTemplates/${body.landing}`)(body.email, body.landing);
  const object = {
    to: body.email,
    subject: 'Welcome to Flippit!',
    html: html,
    permission: body.permission
  }
  await _sendEmail(object);
  await emailDb.create(body);
  return 'OK';
}

const _unsubscribe = async (query) => {
  if(!query.email || !query.landing) {
    const error = new Error('Incorrect arguments!');
    error.status = 400;
    throw error;
  }
  await emailDb.unsubscribe(query);
  return;
};
module.exports = {
  create: _create,
  sendEmail: _sendEmail,
  unsubscribe: _unsubscribe
}