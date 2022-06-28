const requestFieldTalk = (req, res, next) => {
  const { talk } = req.body;
  if (!talk || talk === undefined) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  if (!talk.watchedAt || talk.watchedAt === undefined) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  next();
};

module.exports = requestFieldTalk;