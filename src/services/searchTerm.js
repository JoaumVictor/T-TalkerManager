const { getAll } = require('../models');

const searchTerm = async (req, res) => {
  const tudao = await getAll();
  const { q } = req.query;

  if (!q || q === undefined) return res.status(200).json(tudao);
  
  const result = await tudao.filter((each) => each.name.includes(q));
  return res.status(200).json(result);
};

module.exports = searchTerm;
