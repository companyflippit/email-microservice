const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    landing: {
      type: String,
      required: true
    },
    permission: {
      type: Boolean,
      default: true
    }
}, {
  minimize: false,
  timestamps: true
});
const Email = mongoose.model('Email', EmailSchema);

module.exports = Email;
