const models = require('../models');

const deleteUser = async (req, res) => {
  const { id } = req.params;
  
  const data = await models.getAll();
  const newData = data.filter((each) => each.id !== Number(id));

  console.log(JSON.stringify(newData));

  await models.write(newData);

  return res.status(204).end();
};

module.exports = deleteUser;
