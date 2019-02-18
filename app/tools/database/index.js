require('dotenv').config();
const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
let db;

const _dbConnectMongoose = () => {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    if (db) {
      return resolve(db);
    }
    mongoose.connect(dbUrl, { useNewUrlParser: true })
      .then(() => {
        db = mongoose.connection
        console.log(`Connection to database created at ${dbUrl}`);
        resolve(db);
      })
      .catch(err => {
        console.log('error creating db connection: ' + err);
        reject(err);
      });
  });
};

module.exports = {
  dbConnectMongoose: _dbConnectMongoose
}