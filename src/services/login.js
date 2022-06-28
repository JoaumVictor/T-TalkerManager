const crypto = require('crypto');

const generateToken = () => crypto.randomBytes(8).toString('hex');

const login = (_req, res) => res.status(200).json({ token: generateToken() });

module.exports = login;