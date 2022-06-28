const models = require('../models');

const approvedUser = async (req, res) => {
  const { name, age, talk } = req.body;
  
  const data = await models.getAll();
  const newUser = { name, age, talk, id: data.length + 1 };
  const result = [...data, newUser];
  await models.write(result);

  return res.status(201).json(newUser);
};

module.exports = approvedUser;
