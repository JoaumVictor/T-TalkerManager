const { Router } = require('express');
const middleware = require('../middlewares');
const services = require('../services');

const login = Router();

login.post(
  '/',
  middleware.emailValidation,
  middleware.passwordValidation,
  services.login,
  );

module.exports = login;