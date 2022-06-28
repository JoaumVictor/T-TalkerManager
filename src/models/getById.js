const getAll = require('./getAll');

const getById = async (id) => {
  const tudao = await getAll();
  const found = tudao.find((each) => each.id === Number(id));
  return found;
};

module.exports = getById;