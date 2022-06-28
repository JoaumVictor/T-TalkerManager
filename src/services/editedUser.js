const models = require('../models');

const editedUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  
  const data = await models.getAll();

  const newData = data.filter((each) => each.id !== Number(id));

  const newUser = { name, age, talk, id: Number(id) };

  const result = [...newData, newUser];
  await models.write(result);

  return res.status(200).json(newUser);
};

module.exports = editedUser;
