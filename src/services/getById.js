const models = require('../models/index');

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await models.getById(id);
    if (data !== undefined) {
      return res.status(200).json(data);
    }
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getById;
