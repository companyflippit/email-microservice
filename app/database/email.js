const Email = require('./schemas/Email');

const _create = (object) => {
  return Email.create(object)
    .catch(error => {
      throw new Error(error); 
    });
};

const _findOneByEmailAndLanding = (body) => {
  return Email.find({ email: body.email, landing: body.landing })
    .catch(error => {
      throw new Error(error); 
    });
}
const _unsubscribe = (body) => {
  return Email.findOneAndUpdate({ email: body.email, landing: body.landing }, { permission: false })
    .catch(error => {
      throw new Error(error); 
    });
}

module.exports = {
  create: _create,
  findOneByEmailAndLanding: _findOneByEmailAndLanding,
  unsubscribe: _unsubscribe
}