const { Router } = require('express');
const models = require('../models');
const services = require('../services');
const middleware = require('../middlewares');

const talker = Router();

talker.get('/', async (_req, res) => {
  try {
    const data = await models.getAll();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'deu ruim' });
  }
});

talker.get(
  '/search',
  middleware.requestToken,
  services.searchTerm,
);

talker.get('/:id', services.getById);

talker.post(
  '/',
  middleware.requestToken,
  middleware.nameRequest,
  middleware.ageRequest,
  middleware.requestFieldTalk,
  middleware.requestWatchedAt,
  middleware.requestRate,
  services.approvedUser,
);

talker.put(
  '/:id',
  middleware.requestToken,
  middleware.nameRequest,
  middleware.ageRequest,
  middleware.requestFieldTalk,
  middleware.requestWatchedAt,
  middleware.requestRate,
  services.editedUser,
);

talker.delete('/:id', middleware.requestToken, services.deleteUser);

module.exports = talker;
