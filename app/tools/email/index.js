const nodemailer = require('nodemailer');

const _sendEmail = (config, email) => {
  const transporter = nodemailer.createTransport(config);
  return transporter.sendMail(email)
    .catch(error => {
      const status = error.responseCode;
      error = new Error(error.response); 
      error.status = status;
      throw error;
    });
}

module.exports = {
  sendEmail: _sendEmail
}