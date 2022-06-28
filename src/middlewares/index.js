const emailValidation = require('./emailValidation');
const passwordValidation = require('./passwordValidation');
const requestToken = require('./requestToken');
const nameRequest = require('./nameRequest');
const ageRequest = require('./ageRequest');
const requestFieldTalk = require('./requestFieldTalk');
const requestWatchedAt = require('./requestWatchedAt');
const requestRate = require('./requestRate');

// requestFieldTalk
// requestWatchedAt
// requestRate

module.exports = {
  emailValidation,
  passwordValidation,
  requestToken,
  nameRequest,
  ageRequest,
  requestFieldTalk,
  requestWatchedAt,
  requestRate,
};