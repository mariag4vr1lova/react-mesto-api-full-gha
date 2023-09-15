const { SECRET_KEY = 'mesto2023' } = process.env;
const jwt = require('jsonwebtoken');
const UnautorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnautorizedError('Необходима авторизация'));
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return next(new UnautorizedError('Необходима авторизация'));
  }

  req.user = payload;

  return next();
};
