const whitelist    = ['https://flippitco.com', 'https://flippitco.github.io', 'http://localhost:4200/'];
const _corsOptions = {
  origin: (origin, callback) => {
      const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};

module.exports = {
    corsOptions: _corsOptions
}