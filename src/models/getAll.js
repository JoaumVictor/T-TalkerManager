const fs = require('fs').promises;

const getAll = async () => {
  const tudao = await fs.readFile('./talker.json', 'utf-8');
  const dale = JSON.parse(tudao);
  return dale;
};

module.exports = getAll;
