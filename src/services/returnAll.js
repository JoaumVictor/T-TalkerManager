const models = require('../models');

const returnAll = async (_req, res) => {
  try {
    const data = await models.getAll();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'deu ruim' });
  }
};

module.exports = returnAll;
