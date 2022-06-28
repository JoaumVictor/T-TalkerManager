const validateDate = (data) => {
  const regxDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  return regxDate.test(data);
};

const requestWatchedAt = (req, res, next) => {
  const { talk } = req.body;
  if (!talk.watchedAt || talk.watchedAt === undefined) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!validateDate(talk.watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

module.exports = requestWatchedAt;
